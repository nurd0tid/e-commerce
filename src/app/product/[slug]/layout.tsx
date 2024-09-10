import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Product({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-gray-100">{children}</main>
      <Footer />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Shopee Indonesia | Situs Belanja Terpercaya & Terlengkap",
    description:
      "Manage your B2B Ecommerce platform with our comprehensive dashboard. Access supplier and member statistics, monitor orders, and streamline your business operations all in one place.",
    icons: {
      icon: "/favicon.ico", // Path to your custom favicon
      shortcut: "/favicon.ico", // Optional: adds a shortcut icon
    },
  };
}
