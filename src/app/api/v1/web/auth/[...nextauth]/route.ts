import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "../../../../../../../supabase";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";
import { randomBytes } from "crypto";
import { addMinutes } from "date-fns";

const GOOGLE_AUTHORIZATION_URL =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
  });

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const url =
      "https://oauth2.googleapis.com/token?" +
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken!,
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.log("Error refreshing access token:", error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const { email, password } = credentials;

        const { data: user, error } = await supabase
          .from("users")
          .select("id, name, email, password, role_id, refresh_token, refresh_token_expires_at")
          .eq("email", email)
          .single();

        if (error || !user) {
          throw new Error("No user found");
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          throw new Error("Incorrect password");
        }

        let refreshToken = user.refresh_token;
        let refreshTokenExpiresAt = user.refresh_token_expires_at;

        if (!refreshToken || new Date(refreshTokenExpiresAt) < new Date()) {
          refreshToken = randomBytes(32).toString("hex");
          refreshTokenExpiresAt = addMinutes(new Date(), 5).toISOString();

          const { error: updateError } = await supabase
            .from("users")
            .update({
              refresh_token: refreshToken,
              refresh_token_expires_at: refreshTokenExpiresAt,
              last_login: new Date().toISOString(),
            })
            .eq("id", user.id);

          if (updateError) {
            console.error("Error updating refresh token for user:", updateError.message);
          }
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role_id,
          refreshToken: refreshToken,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // console.log("JWT Callback - Initial token:", token);
      // console.log("Account:", account);

      if (account?.provider === "google") {
        const expiresIn = account.expires_in ? Number(account.expires_in) : 120;
        token.accessToken = account.access_token;

        // Mengecek apakah refresh token tersedia dan menyimpannya jika ada
        if (account.refresh_token) {
          token.refreshToken = account.refresh_token;
          console.log("New Refresh Token from Google:", token.refreshToken);

          const refreshTokenExpiresAt = addMinutes(new Date(), 5).toISOString();

          // Cek apakah pengguna sudah ada di database
          const { data: existingUser, error } = await supabase.from("users").select("id, role_id").eq("email", token.email).single();

          if (!existingUser) {
            // Jika pengguna belum ada, simpan pengguna baru ke database
            const { data: newUser, error: insertError } = await supabase
              .from("users")
              .insert({
                email: token.email,
                name: token.name,
                role_id: 1, // Sesuaikan default role_id
                refresh_token: token.refreshToken,
                refresh_token_expires_at: refreshTokenExpiresAt,
                created_at: new Date().toISOString(),
                last_login: new Date().toISOString(),
              })
              .select()
              .single();

            if (insertError) {
              console.error("Error inserting new user:", insertError.message);
            } else {
              token.id = newUser.id;
              token.role = newUser.role_id;
              console.log("New user created and stored in the database:", newUser);
            }
          } else {
            // Jika pengguna sudah ada, perbarui token refresh di database
            const { error: updateError } = await supabase
              .from("users")
              .update({
                refresh_token: token.refreshToken,
                refresh_token_expires_at: refreshTokenExpiresAt,
                last_login: new Date().toISOString(),
              })
              .eq("email", token.email)
              .single();

            if (updateError) {
              console.error("Error updating refresh token:", updateError.message);
            } else {
              console.log("Refresh Token updated in database for user:", token.email);
            }

            token.id = existingUser.id;
            token.role = existingUser.role_id;
          }
        }

        token.accessTokenExpires = Date.now() + expiresIn * 1000;
      } else if (user) {
        token.id = user.id;
        token.role = user.role;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = Date.now() + 2 * 60 * 1000;
        token.refreshTokenExpires = Date.now() + 5 * 60 * 1000;
        console.log("Credentials login - token:", token);
      }

      // Cek apakah token sudah kedaluwarsa
      if (Date.now() < token.accessTokenExpires!) {
        // console.log("Token has not expired yet:", token);
        return token;
      }

      console.log("Token has expired, refreshing...");
      return refreshAccessToken(token);
    },

    async session({ session, token }) {
      // console.log("Session callback:", token);

      if (token.error === "RefreshAccessTokenError") {
        session.error = "RefreshAccessTokenError";
      } else if (Date.now() > token.accessTokenExpires!) {
        session.error = "SessionExpired";
      }

      session.user.id = token.id!;
      session.user.role = token.role!;

      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax", // Atur sameSite ke "lax" agar mendukung lintas subdomain
        path: "/",
        domain: ".b2b-ecommerce.com", // Ini memungkinkan cookie diakses oleh semua subdomain
        secure: process.env.NODE_ENV === "production", // Gunakan secure di produksi
      },
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 5 * 60,
  },
  secret: process.env.JWT_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
