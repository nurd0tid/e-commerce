import React from "react";
import { Product } from "@/app/types/products";
import SuggestionProduct from "./SuggestionProduct";

interface SuggestionProps {
  categoriesIds: string[];
}

// Fungsi untuk mengambil produk dengan pagination
const fetchProducts = async (categoriesIds: string[], page: number, limit: number = 24): Promise<{ products: Product[]; totalProducts: number }> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/web/suggestion/${categoriesIds.join(",")}?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Error fetching products:", res.statusText);
      return { products: [], totalProducts: 0 };
    }

    const data = await res.json();
    // Gabungkan ID dengan data produk
    const products: Product[] = data.data.map((item: any) => ({
      id: item.id, // Ambil ID dari item
      ...item.product, // Gabungkan dengan detail produk
    }));

    return {
      products,
      totalProducts: data.pagination.totalProducts, // Ambil total produk dari API
    };
  } catch (error) {
    console.error("Fetch error:", error);
    return { products: [], totalProducts: 0 };
  }
};

const Suggestion = async ({ categoriesIds }: SuggestionProps) => {
  const page = 1;
  const limit = 24;
  const { products, totalProducts } = await fetchProducts(categoriesIds, page, limit);

  // Hitung total halaman berdasarkan total produk dan limit
  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="mt-4">
      <div>
        <span className="text-sm text-custom-gray-rgb uppercase font-medium mb-4">Kamu Mungkin Juga Suka</span>
        <SuggestionProduct initialProducts={products} initialPage={page} limit={limit} totalPages={totalPages} categoriesIds={categoriesIds} />
      </div>
    </div>
  );
};

export default Suggestion;
