import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "./MainLayout"; // Mengimpor MainLayout yang baru saja kita buat
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "B2B Ecommerce | Platform Terbaik untuk Bisnis Anda",
    description: "Temukan produk, promosi, dan kategori terbaik di platform B2B Ecommerce kami. Dapatkan penawaran terbaik untuk bisnis Anda hanya di sini.",
    icons: {
      icon: "/favicon.ico",
    },
    // openGraph: {
    //   title: "B2B Ecommerce | Platform Terbaik untuk Bisnis Anda",
    //   description: "Temukan produk, promosi, dan kategori terbaik di platform B2B Ecommerce kami. Dapatkan penawaran terbaik untuk bisnis Anda hanya di sini.",
    //   url: "https://b2b-ecommerce.com",
    //   images: [
    //     {
    //       url: "/images/landing-page-image.jpg", // Ganti dengan URL gambar yang sesuai
    //       width: 800,
    //       height: 600,
    //       alt: "Gambar Landing Page B2B Ecommerce",
    //     },
    //   ],
    // },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
