import React from "react";
import { BestSellingItem } from "@/app/types/bestSelling";

const BestSellingComponent = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/web/bestselling`, {
    next: { revalidate: 60 }, // Revalidate data setiap 60 detik
  });

  const data = await res.json();
  const items: BestSellingItem[] = data.data;

  return (
    <div className="bg-gray-100 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white relative">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold text-red-600">PRODUK TERLARIS</h2>
            <a href="#" className="text-sm font-semibold text-red-500">
              Lihat Semua &gt;
            </a>
          </div>
          <hr className="border-t border-gray-100" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
            {!items.length
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-white animate-pulse">
                    <div className="relative shadow-sm overflow-hidden">
                      <div className="bg-gray-200 h-40"></div>
                      <div className="bg-gray-200 h-6 mt-2 w-3/4 mx-auto"></div>
                      <div className="bg-gray-200 h-6 mt-1 w-1/2 mx-auto"></div>
                    </div>
                    <div className="pt-4 h-4 mt-1 bg-gray-200 mx-4"></div>
                  </div>
                ))
              : items.map((item, index) => (
                  <div key={index} className="bg-white">
                    <div className="relative shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {item.top && (
                        <div className="absolute top-0 left-0">
                          <img
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/06720e49514cbd94b755.png"
                            alt="Top label"
                            className="h-10 w-8"
                          />
                        </div>
                      )}
                      <img src={item.img} alt={item.name} className="w-180 h-180 object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gray-500 bg-opacity-65 text-white text-xs font-semibold px-2 py-1 text-center">
                        Penjualan / Bulan {item.sales}
                      </div>
                    </div>
                    <div className="pt-4 text-lg font-medium text-gray-900">{item.name}</div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingComponent;
