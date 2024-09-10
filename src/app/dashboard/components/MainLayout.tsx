"use client";
import Footer from "@/app/components/layouts/backend/footer";
import Header from "@/app/components/layouts/backend/header";
import Sidebar from "@/app/components/layouts/backend/sidebar";
import React, { useState } from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="lg:pl-72">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:pl-8">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
