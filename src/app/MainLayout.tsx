"use client";
import { SessionProvider } from "next-auth/react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <SessionProvider basePath="/api/v1/web/auth">{children}</SessionProvider>;
}
