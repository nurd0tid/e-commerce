"use client";

import React, { useState, useRef } from "react";
import { Product } from "@/app/types/products";
import { useRouter } from "next/navigation";

interface SuggestionProductProps {
  initialProducts: Product[];
  initialPage: number;
  limit: number;
  totalPages: number;
  categoriesIds: string[];
}

const SuggestionProduct: React.FC<SuggestionProductProps> = ({ initialProducts, initialPage, limit, totalPages, categoriesIds }) => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(initialPage);
  const [hasMore, setHasMore] = useState<boolean>(page < totalPages); // Cek apakah masih ada halaman berikutnya

  const lastProductRef = useRef<HTMLDivElement | null>(null);

  // Fungsi untuk menangani klik pada produk
  const handleProductClick = (slug: string, id: string) => {
    router.push(`/${slug}-${id}`);
  };

  // Fungsi untuk memuat produk tambahan
  const loadMoreProducts = async () => {
    // Increment page terlebih dahulu
    const nextPage = page + 1;

    setIsLoading(true);

    try {
      // Fetch data produk baru berdasarkan page berikutnya
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/web/suggestion/${categoriesIds.join(",")}?page=${nextPage}&limit=${limit}`);

      if (!res.ok) {
        console.error("Failed to load more products.");
        setIsLoading(false);
        return;
      }

      const data = await res.json();

      const newProducts: Product[] = data.data.map((item: any) => ({
        id: item.id,
        ...item.product,
      }));

      // Tambahkan produk baru ke daftar produk
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);

      // Update nomor halaman setelah fetch berhasil
      setPage(nextPage);

      // Periksa apakah halaman berikutnya masih ada
      if (nextPage >= totalPages || newProducts.length < limit) {
        setHasMore(false); // Jika sudah mencapai totalPages atau produk baru lebih sedikit dari limit, sembunyikan tombol
      }
    } catch (error) {
      console.error("Error fetching more products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 pt-4">
      {/* Tampilkan produk */}
      {products.map((product, index) => (
        <div
          key={index}
          ref={index === products.length - 1 ? lastProductRef : null} // Beri ref pada elemen terakhir
          className="relative group pb-4 cursor-pointer"
          onClick={() => handleProductClick(product.slug, product.id)}
        >
          <div className="border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 hover:border-orange-500">
            <div className="relative">
              {product.hasVideo && (
                <div className="absolute bottom-0 right-0 text-xs font-semibold px-1 py-1">
                  <img
                    src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-daily-discover-v2/0.0.0-mr-20240805121008/pc/43bd6a890841685e2fea.svg"
                    alt="Video"
                    className="h-5 inline-block"
                  />
                </div>
              )}
              <img src={product.img} alt={product.name} className="w-full h-45 object-cover" />
              {product.discount && (
                <div className="absolute top-0 right-0 bg-red-100 text-red-600 text-xs font-semibold px-1 py-0.5 rounded-sm">{product.discount}</div>
              )}
            </div>
            <div className="p-2 bg-white">
              <div className="text-xs font-normal text-gray-800 overflow-hidden text-ellipsis line-clamp-2">{product.name}</div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-red-600 font-bold">Rp{product.price.toLocaleString("id-ID")}</span>
                <span className="text-gray-600 text-xs">{product.sold}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Tombol Lihat Lainnya hanya ditampilkan jika masih ada produk untuk dimuat */}
      {hasMore && (
        <div className="col-span-full flex justify-center items-center mt-4">
          <button
            className="bg-white border border-gray-300 px-28 py-2 text-gray-700 rounded-md hover:bg-gray-100 text-sm"
            onClick={loadMoreProducts}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Lihat Lainnya"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SuggestionProduct;
