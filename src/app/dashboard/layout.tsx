import { Metadata } from "next";
import MainLayout from "./components/MainLayout";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Dashboard | B2B Ecommerce",
    description:
      "Manage your B2B Ecommerce platform with our comprehensive dashboard. Access supplier and member statistics, monitor orders, and streamline your business operations all in one place.",
    icons: {
      icon: "/favicon.ico", // Path to your custom favicon
      shortcut: "/favicon.ico", // Optional: adds a shortcut icon
    },
  };
}
