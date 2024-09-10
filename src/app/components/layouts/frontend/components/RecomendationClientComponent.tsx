"use client";

import React, { useState, useRef } from "react";
import { Product } from "@/app/types/products";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

interface RecomendationClientComponentProps {
  initialProducts: Product[];
  initialPage: number;
  limit: number;
}

const RecomendationClientComponent: React.FC<RecomendationClientComponentProps> = ({ initialProducts, initialPage, limit }) => {
  const router = useRouter(); // Untuk navigasi
  const pathname = usePathname();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(initialPage);
  const [hasMore, setHasMore] = useState<boolean>(true); // State untuk melacak apakah masih ada produk yang bisa dimuat
  const { data: session } = useSession();

  const lastProductRef = useRef<HTMLDivElement | null>(null); // Ref untuk elemen terakhir

  const loadMoreProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/web/recommendation?page=${page + 1}&limit=${limit}`);
      const data = await res.json();

      // Periksa apakah produk yang diambil lebih sedikit dari limit, sehingga tidak ada lagi yang dimuat
      if (data.data.length < limit) {
        setHasMore(false);
      }

      // Extract 'id' dan 'product' seperti yang dilakukan di fetchInitialProducts
      const newProducts = data.data.map((item: any) => ({
        id: item.id, // Ambil ID
        ...item.product, // Gabungkan dengan data produk
      }));

      // Update state dengan produk baru
      setProducts((prev) => [...prev, ...newProducts]);
      setPage((prev) => prev + 1);

      // Smooth scroll ke elemen terakhir yang baru dimuat
      setTimeout(() => {
        lastProductRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error loading more products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductClick = (slug: string, id: string) => {
    // Navigasi dengan slug di URL dan ID sebagai bagian dari path, bukan query parameter
    router.push(`/${slug}-${id}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 pt-4 px-2">
      {isLoading
        ? Array.from({ length: limit }).map((_, index) => (
            <div key={index} className="relative group pb-4">
              <div className="border rounded-md overflow-hidden shadow-sm transition-shadow duration-200">
                <div className="relative animate-pulse">
                  <div className="bg-gray-300 h-40 w-full"></div>
                  <div className="p-2 bg-white">
                    <div className="bg-gray-300 h-4 w-3/4 mt-2"></div>
                    <div className="bg-gray-300 h-4 w-1/2 mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : products.map((product, index) => (
            <div
              key={index}
              ref={index === products.length - 1 ? lastProductRef : null} // Beri ref pada elemen terakhir
              className="relative group pb-4 cursor-pointer"
              onClick={() => handleProductClick(product.slug, product.id)}
            >
              <div className="border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 hover:border-orange-500">
                <div className="relative">
                  {product.isAd && (
                    <div className="absolute bottom-0 right-0 text-xs font-semibold px-1 py-1">
                      <div className="rounded-sm bg-gray-300 text-white px-2 py-1">
                        <span>Ad</span>
                      </div>
                    </div>
                  )}
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
                  <div className="text-xs font-normal text-gray-800 overflow-hidden text-ellipsis line-clamp-2">
                    {product.isStar && (
                      <img src="https://down-id.img.susercontent.com/file/id-11134258-7r98r-lyalscj1g30l0b" alt="Star+" className="h-4 float-left mr-2" />
                    )}
                    <p>{product.name}</p>
                  </div>

                  <div className="flex items-center mt-2">
                    {product.isLimitedStock && (
                      <div className="bg-red-100 text-red-600 text-xs font-semibold px-1 rounded-sm flex items-center">
                        <div
                          className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-l-sm p-0.5 flex items-center"
                          style={{ marginLeft: "-2px", borderRadius: "3px 0 0 3px" }}
                        >
                          <div className="bg-white p-0.5">
                            <img
                              src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-daily-discover-v2/0.0.0-mr-20240805121008/pc/12669d7d5c43ecc913ef.svg"
                              alt="Stok Terbatas"
                              className="h-3"
                            />
                          </div>
                        </div>
                        <span className="ml-1">Stok Terbatas</span>
                      </div>
                    )}

                    {product.isLowestPrice && (
                      <div className="text-orange-600 text-xs font-semibold mr-1 flex items-center">
                        {!product.isNewProduct ? (
                          <span className="border border-orange-600 px-1 py-0.5 text-xs">Termurah di Shopee</span>
                        ) : (
                          <span className="border border-orange-600 px-1 py-0.5 text-xs">Produk Baru</span>
                        )}
                        {product.isCOD && (
                          <img src="https://down-id.img.susercontent.com/file/id-50009109-8d834dd660b129d1d3c72d22c1cb8867" alt="COD" className="h-4 ml-2" />
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-red-600 font-bold">Rp{product.price.toLocaleString("id-ID")}</span>
                    <span className="text-gray-600 text-xs">{product.sold}</span>
                  </div>
                </div>
              </div>
              {/* Produk Serupa di luar card, hanya muncul saat di hover */}
              <div className="relative -mt-2 z-10">
                <div className="absolute inset-x-0 bottom-[-10] bg-orange-500 text-white text-sm font-semibold text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  Produk Serupa
                </div>
              </div>
            </div>
          ))}

      {!session ? (
        <div className="col-span-full flex justify-center items-center mt-4">
          <Link className="bg-white border border-gray-300 px-28 py-2 text-gray-700 rounded-md hover:bg-gray-100 text-sm" href="/buyer/login">
            Login Untuk Lihat Lainnya
          </Link>
        </div>
      ) : (
        hasMore && ( // Tombol hanya muncul jika masih ada produk yang bisa dimuat
          <div className="col-span-full flex justify-center items-center mt-4">
            <button className="bg-white border border-gray-300 px-28 py-2 text-gray-700 rounded-md hover:bg-gray-100 text-sm" onClick={loadMoreProducts}>
              Lihat Lainnya
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default RecomendationClientComponent;
