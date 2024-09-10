"use client";
import React from "react";
import { Product } from "@/app/types/products";
import { useRouter } from "next/navigation";

interface SearchResultProps {
  keyword: string;
  products: Product[];
  totalProducts: number;
  page: number;
  limit: number;
  isLoading: boolean;
}

const ShimmerCard = () => (
  <div className="relative group pb-4">
    <div className="border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 hover:border-orange-500">
      <div className="animate-pulse p-4">
        <div className="bg-gray-300 h-36 w-full rounded-md"></div>
        <div className="mt-4 bg-gray-300 h-4 w-3/4 rounded-md"></div>
        <div className="mt-2 bg-gray-300 h-4 w-1/2 rounded-md"></div>
        <div className="mt-2 bg-gray-300 h-4 w-1/4 rounded-md"></div>
      </div>
    </div>
  </div>
);

const SearchResult: React.FC<SearchResultProps> = ({ keyword, products, totalProducts, page, limit, isLoading }) => {
  const noResultsFound = !keyword.trim() || products.length === 0;
  const totalPages = Math.ceil(totalProducts / limit);
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    router.push(`/search?keyword=${keyword}&page=${newPage}`);
  };

  // Fungsi untuk menangani klik pada produk
  const handleProductClick = (slug: string, id: string) => {
    router.push(`/${slug}-${id}`);
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <svg viewBox="0 0 18 24" className="shopee-svg-icon icon-hint-bulb w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(-355 -149)">
            <g transform="translate(355 149)">
              <g fillRule="nonzero" transform="translate(5.4 19.155556)">
                <path d="m1.08489412 1.77777778h5.1879153c.51164401 0 .92641344-.39796911.92641344-.88888889s-.41476943-.88888889-.92641344-.88888889h-5.1879153c-.51164402 0-.92641345.39796911-.92641345.88888889s.41476943.88888889.92641345.88888889z"></path>
                <g transform="translate(1.9 2.666667)">
                  <path d="m .75 1.77777778h2.1c.41421356 0 .75-.39796911.75-.88888889s-.33578644-.88888889-.75-.88888889h-2.1c-.41421356 0-.75.39796911-.75.88888889s.33578644.88888889.75.88888889z"></path>
                </g>
              </g>
              <path
                d="m8.1 8.77777718v4.66666782c0 .4295545.40294373.7777772.9.7777772s.9-.3482227.9-.7777772v-4.66666782c0-.42955447-.40294373-.77777718-.9-.77777718s-.9.34822271-.9.77777718z"
                fillRule="nonzero"
              ></path>
              <path
                d="m8.1 5.33333333v.88889432c0 .49091978.40294373.88888889.9.88888889s.9-.39796911.9-.88888889v-.88889432c0-.49091977-.40294373-.88888889-.9-.88888889s-.9.39796912-.9.88888889z"
                fillRule="nonzero"
              ></path>
              <path d="m8.80092773 0c-4.86181776 0-8.80092773 3.97866667-8.80092773 8.88888889 0 1.69422221.47617651 3.26933331 1.295126 4.61333331l2.50316913 3.9768889c.30201078.4782222.84303623.7697778 1.42482388.7697778h7.17785139c.7077799 0 1.3618277-.368 1.7027479-.9617778l2.3252977-4.0213333c.7411308-1.2888889 1.1728395-2.7786667 1.1728395-4.37688891 0-4.91022222-3.9409628-8.88888889-8.80092777-8.88888889m0 1.77777778c3.82979317 0 6.94810087 3.18933333 6.94810087 7.11111111 0 1.24444441-.3168334 2.43022221-.9393833 3.51466671l-2.3252977 4.0213333c-.0166754.0284444-.0481735.0462222-.0833772.0462222h-7.07224026l-2.43461454-3.8648889c-.68184029-1.12-1.04128871-2.4053333-1.04128871-3.71733331 0-3.92177778 3.11645483-7.11111111 6.94810084-7.11111111"></path>
            </g>
          </g>
        </svg>
        <span className="text-gray-600">
          Hasil pencarian untuk <span className="text-red-500">'{keyword}'</span>
        </span>
      </div>

      <div className="flex items-center bg-gray-200 p-2">
        <span className="text-gray-600 mr-4 text-sm">Urutkan</span>
        <button className="bg-[#ee4d2d] text-white px-4 py-2 mr-2 text-sm">Terkait</button>
        <button className="bg-white  border border-gray-300 px-4 py-2 mr-2 text-sm">Terbaru</button>
        <button className="bg-white  border border-gray-300 px-4 py-2 mr-2 text-sm">Terlaris</button>
        <div className="relative">
          <select className="bg-white text-gray-600 border border-gray-300 px-4 py-2 pr-8 appearance-none text-sm">
            <option>Harga</option>
            <option>Harga Tertinggi</option>
            <option>Harga Terendah</option>
          </select>
        </div>

        <div className="flex ml-auto items-center text-gray-600">
          <span className="mr-2">
            <span className="text-[#ee4d2d]">{page}</span>/<span>{totalPages}</span>
          </span>
          <button
            className={`px-3 py-1 border border-gray-300 bg-gray-100 ${page <= 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-600 cursor-pointer"}`}
            onClick={() => page > 1 && handlePageChange(page - 1)}
            disabled={page <= 1}
          >
            &lt;
          </button>
          <button
            className={`px-3 py-1 border border-gray-300 bg-white ${page >= totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-600 cursor-pointer"}`}
            onClick={() => page < totalPages && handlePageChange(page + 1)}
            disabled={page >= totalPages}
          >
            &gt;
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-4 px-2">
          {[...Array(20)].map((_, i) => (
            <ShimmerCard key={i} />
          ))}
        </div>
      ) : noResultsFound ? (
        <div className="flex flex-col items-center mt-10">
          <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/search/a60759ad1dabe909c46a.png" alt="No results" className="w-28 h-auto" />
          <p className="text-sm text-gray-700 mt-4">
            Hasil <span className="text-red-500">'{keyword}'</span> tidak ditemukan
          </p>
          <p className="text-sm text-gray-500">Mohon coba kata kunci yang lain atau yang lebih umum</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-4 px-2">
          {products.map((product, index) => (
            <div key={index} className="relative group pb-4 cursor-pointer" onClick={() => handleProductClick(product.slug, product.id)}>
              <div className="border rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 hover:border-orange-500">
                <div className="relative">
                  {/* Conditional rendering for product badges and image */}
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
                    <span className="text-red-600 font-bold">{product.price}</span>
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
        </div>
      )}

      {!isLoading && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          {/* Button to go to the previous page */}
          <button
            className={`px-2 py-1 ${page <= 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-600 cursor-pointer"}`}
            onClick={() => page > 1 && handlePageChange(page - 1)}
            disabled={page <= 1}
          >
            &lt;
          </button>

          {/* Page numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 ${page === i + 1 ? "bg-[#ee4d2d] text-white rounded-md" : "text-gray-600 hover:text-[#ee4d2d] cursor-pointer"} border-none`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          {/* Ellipsis if there are more pages */}
          {totalPages > 5 && <span className="text-gray-600">...</span>}

          {/* Button to go to the next page */}
          <button
            className={`px-2 py-1 ${page >= totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-600 cursor-pointer"}`}
            onClick={() => page < totalPages && handlePageChange(page + 1)}
            disabled={page >= totalPages}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
