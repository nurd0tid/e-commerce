import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function LoginSellerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Login untuk mengakses fitur penjual | Shopee Seller Center Indonesia",
    description:
      "Manage your B2B Ecommerce platform with our comprehensive dashboard. Access supplier and member statistics, monitor orders, and streamline your business operations all in one place.",
    icons: {
      icon: "/favicon.ico", // Path to your custom favicon
      shortcut: "/favicon.ico", // Optional: adds a shortcut icon
    },
  };
}
