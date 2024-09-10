import React from "react";

const Category = () => {
  const categories = [
    { name: "Peralatan Makan", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Dekorasi", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Perlengkapan Sekolah & Kantor", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Souvenir & Hadiah", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Kamar Mandi", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Renovasi Rumah", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Perlengkapan Pesta", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Kamera Keamanan", img: "https://via.placeholder.com/100", link: "#" },
    { name: "Handphone & Tablet Aksesoris", img: "https://via.placeholder.com/100", link: "#" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-custom-gray-rgb uppercase font-medium">Kategori</span>
          <a href="#" className="text-red-500 text-sm">
            Lihat Semua &gt;
          </a>
        </div>
        <div className="flex space-x-6 overflow-x-auto items-start">
          {categories.map((category, index) => (
            <a key={index} href={category.link} className="flex flex-col items-center text-center space-y-2 min-w-[100px]">
              <img src={category.img} alt={category.name} className="w-24 h-24 rounded-full border border-gray-300" />
              <span className="text-sm text-gray-700 line-clamp-2 overflow-hidden">{category.name}</span>
            </a>
          ))}
          {/* Tombol Lihat Semua */}
          <a href="#" className="flex flex-col items-center justify-center text-center space-y-2 min-w-[100px]">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
              <span className="text-red-500 text-xs">Lihat Semua &gt;</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
