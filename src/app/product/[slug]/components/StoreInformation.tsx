import React from "react";
import { Store } from "@/app/types/products"; // Mengimpor tipe Store dari types
import Link from "next/link";

interface StoreInformationProps {
  store: Store;
}

const StoreInformation: React.FC<StoreInformationProps> = ({ store }) => {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-6 bg-white p-4 mt-4">
      <div className="flex items-center">
        {/* Gambar Toko */}
        <div className="relative">
          <img src={store.logo} alt="Store Logo" className="w-20 h-20 rounded-full" />
          {store.status.is_verified && (
            <span
              className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 text-white text-xs font-bold px-2 py-0.5"
              style={{ borderRadius: "4px", backgroundColor: "#ee4d2d" }}
            >
              Star
            </span>
          )}
        </div>

        {/* Informasi Toko */}
        <div className="ml-4 pr-8 border-r h-full border-gray-200">
          <h2 className="text-md font-medium">{store.name}</h2>
          <p className="text-sm text-gray-500">Aktif {store.status.last_active}</p>
          <div className="mt-2 flex space-x-2 text-xs">
            <Link href={store.actions.chat_now}>
              <button className="flex items-center px-4 py-2 border border-[#ee4d2d] text-[#ee4d2d] bg-[#fff0f0]">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/7bf03ed38ca37787fe78.svg"
                  alt="Chat Icon"
                  className="w-4 h-4 mr-1"
                />
                Chat Sekarang
              </button>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_API_URL}/store/${store.slug}`}>
              <button className="flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/192a8dfc1c23525d396b.svg"
                  alt="Store Icon"
                  className="w-4 h-4 mr-1"
                />
                Kunjungi Toko
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bagian Kanan yang sesuai dengan konten */}
      <div className="flex flex-col justify-center">
        <div className="flex justify-between text-sm text-custom-gray-rgb1">
          <div className="flex flex-row items-center flex-1 justify-between mr-4">
            <span>Penilaian</span>
            <span className="text-[#ee4d2d] ml-2">{store.ratings.total_reviews}</span>
          </div>
          <div className="flex flex-row items-center flex-1 justify-between mx-4">
            <span>Persentase Chat Dibalas</span>
            <span className="text-[#ee4d2d] ml-2">{store.ratings.chat_response_rate}%</span>
          </div>
          <div className="flex flex-row items-center flex-1 justify-between ml-4">
            <span>Bergabung</span>
            <span className="text-[#ee4d2d] ml-2">{store.store_info.joined}</span>
          </div>
        </div>
        <div className="flex justify-between text-sm text-custom-gray-rgb1 mt-2">
          <div className="flex flex-row items-center flex-1 justify-between mr-4">
            <span>Produk</span>
            <span className="text-[#ee4d2d] ml-2">{store.products}</span>
          </div>
          <div className="flex flex-row items-center flex-1 justify-between mx-4">
            <span>Waktu Chat Dibalas</span>
            <span className="text-[#ee4d2d] ml-2">{store.ratings.chat_response_time}</span>
          </div>
          <div className="flex flex-row items-center flex-1 justify-between ml-4">
            <span>Pengikut</span>
            <span className="text-[#ee4d2d] ml-2">{store.store_info.followers}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInformation;
