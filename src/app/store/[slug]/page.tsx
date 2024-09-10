import { notFound } from "next/navigation";
import { Store } from "@/app/types/store";
import { Metadata } from "next";
import StoreProfile from "./components/StoreProfile";
import YouMightLike from "./components/YouMightLike";
import BestSelling from "./components/BestSelling";
import Category from "./components/Category";

// Fungsi untuk fetch data store berdasarkan slug
async function fetchStoreData(slug: string): Promise<Store | undefined> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/web/store/${slug}`);
  if (!res.ok) {
    return undefined; // Jika data tidak ditemukan
  }

  const storeData: { data: Store } = await res.json();
  return storeData.data;
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function StorePage({ params }: Props) {
  const slug = params.slug;
  // Ambil data store dari API
  const storeData = await fetchStoreData(slug);

  if (!storeData) {
    return notFound(); // Jika store tidak ditemukan, tampilkan 404
  }

  return (
    <div className="py-4">
      <StoreProfile />
      <YouMightLike />
      <BestSelling />
      <Category />
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const storeData = await fetchStoreData(slug);

  return {
    title: storeData ? `Toko Online ${storeData.name} | Shopee Indonesia` : "Toko Online | Shopee Indonesia",
    description:
      "Manage your B2B Ecommerce platform with our comprehensive dashboard. Access supplier and member statistics, monitor orders, and streamline your business operations all in one place.",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
  };
}
