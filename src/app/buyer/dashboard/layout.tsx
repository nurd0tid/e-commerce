import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl pt-4 pb-8">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Shopee Indonesia | Situs Belanja Online Terlengkap & Terpercaya",
    description:
      "Manage your B2B Ecommerce platform with our comprehensive dashboard. Access supplier and member statistics, monitor orders, and streamline your business operations all in one place.",
    icons: {
      icon: "/favicon.ico", // Path to your custom favicon
      shortcut: "/favicon.ico", // Optional: adds a shortcut icon
    },
  };
}
