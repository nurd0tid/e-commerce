import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: number;
      accessToken?: string;
      refreshToken?: string;
    } & DefaultSession['user'];
    error?: string; // Menambahkan error ke dalam tipe Session
  }

  interface User extends DefaultUser {
    role?: number;
    refreshToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    role?: number;
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    error?: string;
  }
}
