import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const StoreMenu = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex space-x-16 items-center">
          <a href="#home" className="text-sm text-red-500 border-b-2 border-red-500 py-2 text-center truncate max-w-[150px]">
            Halaman Utama
          </a>
          <a href="#all-products" className="text-sm text-gray-700 hover:text-red-500 hover:border-red-500 py-2 truncate max-w-[150px]">
            Semua Produk
          </a>
          <a href="#dining" className="text-sm text-gray-700 hover:text-red-500 hover:border-red-500 py-2 truncate max-w-[150px]">
            Peralatan Makan
          </a>
          <a href="#decoration" className="text-sm text-gray-700 hover:text-red-500 hover:border-red-500 py-2 truncate max-w-[150px]">
            Dekorasi
          </a>
          <a href="#school" className="text-sm text-gray-700 hover:text-red-500 hover:border-red-500 py-2 truncate max-w-[150px]">
            Perlengkapan Sekolah
          </a>
          <a href="#gifts" className="text-sm text-gray-700 hover:text-red-500 hover:border-red-500 py-2 truncate max-w-[150px]">
            Souvenir & Hadiah
          </a>

          {/* Menu Lainnya */}
          <Menu as="div" className="relative inline-block text-left">
            <div className="flex items-center">
              <MenuButton className="inline-flex justify-center text-sm text-gray-700 hover:text-red-500 py-2">
                Lainnya
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 ml-1" />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none max-h-60 overflow-y-auto" // Tambahkan max-height dan overflow-y
            >
              <div className="py-1">
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Kamar Mandi
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Renovasi Rumah
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Perlengkapan Pesta
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Kamera Keamanan
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Handphone & Tablet Aksesoris
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Alat Tulis
                  </a>
                </MenuItem>
                {/* Menambahkan menu baru */}
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Perkakas
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Koleksi
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </nav>
      </div>
    </div>
  );
};

export default StoreMenu;
