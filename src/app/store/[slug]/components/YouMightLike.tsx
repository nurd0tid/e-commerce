import React from "react";

const YouMightLike = () => {
  // Data dummy lengkap sesuai dengan permintaan
  const products = [
    {
      name: "Gantungan Kunci Custom Akrilik",
      slug: "gantungan-kunci-custom-akrilik",
      img: "https://via.placeholder.com/150",
      price: 4500,
      originalPrice: 5000,
      discount: "10%",
      sold: "10RB+ Terjual",
      description: `
        <p>Gantungan kunci custom dari akrilik dengan kualitas terbaik.</p>
      `,
      isStar: true,
      isCOD: true,
      isLowestPrice: false,
      hasVideo: false,
      hasCashbackAndFreeShipping: false,
      isLimitedStock: true,
      isAd: false,
      isOnlyCashBack: false,
      isOnlyFreeShipping: false,
      isNineNine: false,
      isProductLocal: true,
      isNewProduct: false,
      created_at: "2024-09-03T04:57:53.026055",
      updated_at: "2024-09-03T04:57:53.026055",
      category_ids: ["12345"],
    },
    {
      name: "PIN AKRILIK CUSTOM",
      slug: "pin-akrilik-custom",
      img: "https://via.placeholder.com/150",
      price: 3500,
      originalPrice: 4000,
      discount: "12%",
      sold: "1,2RB Terjual",
      description: `
        <p>Pin akrilik dengan desain yang dapat disesuaikan sesuai kebutuhan Anda.</p>
      `,
      isStar: false,
      isCOD: false,
      isLowestPrice: false,
      hasVideo: false,
      hasCashbackAndFreeShipping: false,
      isLimitedStock: false,
      isAd: false,
      isOnlyCashBack: false,
      isOnlyFreeShipping: false,
      isNineNine: false,
      isProductLocal: true,
      isNewProduct: false,
      created_at: "2024-09-03T04:57:53.026055",
      updated_at: "2024-09-03T04:57:53.026055",
      category_ids: ["12346"],
    },
    {
      name: "Gantungan Kunci Custom Akrilik (Gantungan Polaroid)",
      slug: "gantungan-kunci-akrilik-polaroid",
      img: "https://via.placeholder.com/150",
      price: 11000,
      originalPrice: 12000,
      discount: null,
      sold: "7 Terjual",
      description: `
        <p>Gantungan kunci akrilik Polaroid dengan kualitas tinggi dan custom desain.</p>
      `,
      isStar: true,
      isCOD: false,
      isLowestPrice: true,
      hasVideo: false,
      hasCashbackAndFreeShipping: false,
      isLimitedStock: false,
      isAd: false,
      isOnlyCashBack: false,
      isOnlyFreeShipping: true,
      isNineNine: false,
      isProductLocal: true,
      isNewProduct: false,
      created_at: "2024-09-03T04:57:53.026055",
      updated_at: "2024-09-03T04:57:53.026055",
      category_ids: ["12347"],
    },
    {
      name: "LUGGAGE TAG AKRILIK PRINTING",
      slug: "luggage-tag-akrilik-printing",
      img: "https://via.placeholder.com/150",
      price: 10000,
      originalPrice: 12000,
      discount: "10%",
      sold: "106 Terjual",
      description: `
        <p>Tag bagasi dengan cetakan akrilik berkualitas tinggi.</p>
      `,
      isStar: false,
      isCOD: false,
      isLowestPrice: false,
      hasVideo: false,
      hasCashbackAndFreeShipping: false,
      isLimitedStock: false,
      isAd: false,
      isOnlyCashBack: false,
      isOnlyFreeShipping: false,
      isNineNine: false,
      isProductLocal: true,
      isNewProduct: false,
      created_at: "2024-09-03T04:57:53.026055",
      updated_at: "2024-09-03T04:57:53.026055",
      category_ids: ["12348"],
    },
    {
      name: "Custom Bolpoin / Pulpen Souvenir",
      slug: "custom-bolpoin-souvenir",
      img: "https://via.placeholder.com/150",
      price: 3000,
      originalPrice: 3500,
      discount: "14%",
      sold: "34 Terjual",
      description: `
        <p>Pulpen souvenir yang dapat dicustom untuk berbagai acara.</p>
      `,
      isStar: false,
      isCOD: true,
      isLowestPrice: true,
      hasVideo: false,
      hasCashbackAndFreeShipping: false,
      isLimitedStock: false,
      isAd: false,
      isOnlyCashBack: false,
      isOnlyFreeShipping: false,
      isNineNine: false,
      isProductLocal: true,
      isNewProduct: true,
      created_at: "2024-09-03T04:57:53.026055",
      updated_at: "2024-09-03T04:57:53.026055",
      category_ids: ["12349"],
    },
    {
      name: "Photocard Holder",
      slug: "photocard-holder",
      img: "https://via.placeholder.com/150",
      price: 22000,
      originalPrice: 25000,
      discount: null,
      sold: "3 Terjual",
      description: `
        <p>Photocard holder untuk menyimpan koleksi photocard Anda dengan aman.</p>
      `,
      isStar: true,
      isCOD: false,
      isLowestPrice: false,
      hasVideo: false,
      hasCashbackAndFreeShipping: true,
      isLimitedStock: false,
      isAd: false,
      isOnlyCashBack: true,
      isOnlyFreeShipping: false,
      isNineNine: true,
      isProductLocal: true,
      isNewProduct: false,
      created_at: "2024-09-03T04:57:53.026055",
      updated_at: "2024-09-03T04:57:53.026055",
      category_ids: ["12350"],
    },
  ];

  const isLoading = false; // Simulasi loading
  const limit = 6; // Batasi jumlah produk yang ditampilkan menjadi 6

  return (
    <div className="max-w-7xl mx-auto p-4 pt-8">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-custom-gray-rgb uppercase font-medium">Kamu Mungkin Suka</span>
          <a href="#" className="text-red-500 text-sm">
            Lihat Semua &gt;
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
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
                <div key={index} className="relative group pb-4 cursor-pointer">
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
                              <img
                                src="https://down-id.img.susercontent.com/file/id-50009109-8d834dd660b129d1d3c72d22c1cb8867"
                                alt="COD"
                                className="h-4 ml-2"
                              />
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
        </div>
      </div>
    </div>
  );
};

export default YouMightLike;
