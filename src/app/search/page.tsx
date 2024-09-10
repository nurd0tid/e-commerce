import { Metadata } from "next";
import Filter from "./components/Filter";
import SearchResult from "./components/SearchResult";
import { Product, ProductsResponse } from "@/app/types/products";

type SearchPageProps = {
  searchParams: { keyword?: string; page?: string };
};

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("id-ID", { month: "long" });
  const year = currentDate.getFullYear();

  const title = `Jual ${searchParams.keyword || "Produk"} Harga Terbaik & Termurah ${month} ${year}`;

  return {
    title,
    description:
      "Manage your B2B Ecommerce platform with our comprehensive dashboard. Access supplier and member statistics, monitor orders, and streamline your business operations all in one place.",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const keyword = searchParams.keyword || "";
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const limit = 20;
  const offset = (page - 1) * limit;

  let products: Product[] = [];
  let total = 0;
  let isLoading = true;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/web/products?keyword=${keyword}&limit=${limit}&offset=${offset}`, {
      next: { revalidate: 60 }, // revalidate data every 60 seconds (ISR)
    });

    if (res.ok) {
      const jsonResponse: ProductsResponse = await res.json();
      // Extract 'id' and 'product' fields, merging them into one object
      products = jsonResponse.data.map((item: any) => ({
        id: item.id, // Ambil ID
        ...item.product, // Gabungkan dengan data produk
      }));  
      total = jsonResponse.total;
    }
  } catch (error) {
    console.error("Failed to fetch products", error);
  } finally {
    isLoading = false;
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Filter />
        </div>
        <div className="col-span-10">
          <SearchResult keyword={keyword} products={products} totalProducts={total} page={page} limit={limit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
