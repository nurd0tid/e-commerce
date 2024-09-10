import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { supabase } from "../supabase"; // Sesuaikan dengan path supabase Anda

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.JWT_SECRET });

  const { pathname } = request.nextUrl;

  const hostname = request.headers.get("host");
  const pureHostname = hostname?.split(":")[0];

  console.log(pureHostname);

  // Handle seller subdomain specifically
  if (pureHostname === "seller.b2b-ecommerce.com") {
    if (!token) {
      // User is not logged in, redirect to login page
      return NextResponse.redirect(new URL("/seller/login", request.url));
    } else {
      // User is logged in, redirect to the seller dashboard
      return NextResponse.redirect(new URL("/seller/dashboard", request.url));
    }
  }

  // Allow access to the main domain root path without protection
  if (pureHostname === "b2b-ecommerce.com" && pathname === "/") {
    return NextResponse.next();
  }

  // Redirect to the main domain if accessing signin or signup on supplier or console subdomains
  if (pureHostname === "supplier.b2b-ecommerce.com" || pureHostname === "console.b2b-ecommerce.com") {
    if (pathname.startsWith("/authentication/signin") || pathname.startsWith("/authentication/signup")) {
      return NextResponse.redirect(new URL(`http://b2b-ecommerce.com:3000${pathname}`, request.url));
    }
  }

  // Redirect to the main domain if accessing the root on supplier or console subdomains
  if ((pureHostname === "supplier.b2b-ecommerce.com" || pureHostname === "console.b2b-ecommerce.com") && pathname === "/") {
    return NextResponse.redirect(new URL("http://b2b-ecommerce.com:3000/", request.url));
  }

  // Jika pengguna tidak memiliki token, arahkan ke halaman login
  if (!token) {
    if (pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/authentication/signin", request.url));
    }
    return NextResponse.next();
  }

  const role = token.role ?? 1; // Default to 1 (member) if role is undefined

  // Redirect users to the correct subdomain and dashboard based on their role
  if (role === 1 && (pureHostname !== "b2b-ecommerce.com" || !pathname.startsWith("/dashboard/member"))) {
    // Member should only access the main domain and member dashboard
    return NextResponse.redirect(new URL("http://b2b-ecommerce.com:3000/dashboard/member", request.url));
  }

  if (role === 2 && (pureHostname !== "supplier.b2b-ecommerce.com" || !pathname.startsWith("/dashboard/supplier"))) {
    // Supplier should only access the supplier subdomain and supplier dashboard
    return NextResponse.redirect(new URL("http://supplier.b2b-ecommerce.com:3000/dashboard/supplier", request.url));
  }

  if (role === 3 && (pureHostname !== "console.b2b-ecommerce.com" || !pathname.startsWith("/dashboard/console"))) {
    // Console user should only access the console subdomain and console dashboard
    return NextResponse.redirect(new URL("http://console.b2b-ecommerce.com:3000/dashboard/console", request.url));
  }

  // Cek apakah refresh token telah kedaluwarsa
  const { data: user, error } = await supabase.from("users").select("refresh_token_expires_at").eq("id", token.id).single();

  if (error || !user) {
    console.error("Error fetching user refresh token expiry:", error?.message);
    return NextResponse.redirect(new URL("/authentication/signin", request.url));
  }

  const refreshTokenExpiresAt = new Date(user.refresh_token_expires_at);
  if (new Date() > refreshTokenExpiresAt) {
    const response = NextResponse.redirect(new URL("/authentication/signin", request.url));

    // Menghapus cookies yang menyimpan token JWT untuk logout pengguna
    response.cookies.set("next-auth.session-token", "", { path: "/", expires: new Date(0) });
    response.cookies.set("next-auth.csrf-token", "", { path: "/", expires: new Date(0) });

    return response;
  }

  // Redirect logged-in users away from auth pages
  if (pathname.startsWith("/authentication/signin") || pathname.startsWith("/authentication/signup")) {
    return NextResponse.redirect(new URL(`/dashboard/${getRolePath(role)}`, request.url));
  }

  return NextResponse.next();
}

function getRolePath(role: number): string {
  switch (role) {
    case 1:
      return "member";
    case 2:
      return "supplier";
    case 3:
      return "console";
    default:
      return "member";
  }
}

export const config = {
  matcher: ["/", "/authentication/signin", "/authentication/signup", "/dashboard/:path*"],
};
