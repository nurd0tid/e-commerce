import React from "react";

const Filter = () => {
  return (
    <div>
      <h2 className="text-gray-700 font-bold mb-4 flex items-center">
        <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="shopee-svg-icon mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg">
          <g>
            <polyline
              fill="none"
              points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              stroke="currentColor"
            ></polyline>
          </g>
        </svg>
        FILTER
      </h2>

      <div className="mb-6">
        <h3 className="text-gray-600 font-semibold mb-2">Lokasi</h3>
        <div className="space-y-2">
          <div>
            <input type="checkbox" id="jabodetabek" className="mr-2 h-3 w-3" />
            <label htmlFor="jabodetabek" className="text-sm">
              Jabodetabek
            </label>
          </div>
          <div>
            <input type="checkbox" id="dki-jakarta" className="mr-2 h-3 w-3" />
            <label htmlFor="dki-jakarta" className="text-sm">
              DKI Jakarta
            </label>
          </div>
          <div>
            <input type="checkbox" id="jakarta-selatan" className="mr-2  h-3 w-3" />
            <label htmlFor="jakarta-selatan" className="text-sm">
              Jakarta Selatan
            </label>
          </div>
          <div>
            <input type="checkbox" id="jakarta-utara" className="mr-2  h-3 w-3" />
            <label htmlFor="jakarta-utara" className="text-sm">
              Jakarta Utara
            </label>
          </div>
          <div className="ml-6 text-sm font-medium">
            <button className="flex items-center">
              Lainnya
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
      </div>

      <div className="mb-6">
        <h3 className="text-gray-600 font-semibold mb-2">Tipe Penjual</h3>
        <div className="space-y-2">
          <div>
            <input type="checkbox" id="shopee-mall" className="mr-2 h-3 w-3" />
            <label htmlFor="shopee-mall" className="text-sm">Shopee Mall</label>
          </div>
          <div>
            <input type="checkbox" id="star-plus" className="mr-2 h-3 w-3" />
            <label htmlFor="star-plus" className="text-sm">Star+</label>
          </div>
          <div>
            <input type="checkbox" id="star" className="mr-2 h-3 w-3" />
            <label htmlFor="star" className="text-sm">Star</label>
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
      </div>

      <div className="mb-6">
        <h3 className="text-gray-600 font-semibold mb-2">Batas Harga</h3>
        <div className="flex items-center space-x-2">
          <input type="text" placeholder="Rp MIN" className="border border-gray-300 p-1 text-sm w-full" />
          <span>-</span>
          <input type="text" placeholder="Rp MAKS" className="border border-gray-300 p-1 text-sm w-full" />
        </div>
        <button className="bg-[#ee4d2d] text-white text-sm py-1 px-4 mt-4 w-full">TERAPKAN</button>
        <hr className="my-4 border-gray-300" />
      </div>

      <div className="mb-6">
        <h3 className="text-gray-600 font-semibold mb-2">Penilaian</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="flex space-x-1 text-yellow-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="ml-2 text-sm">ke atas</span>
          </div>
          <div className="flex items-center">
            <div className="flex space-x-1 text-yellow-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="text-gray-400">★</span>
            </div>
            <span className="ml-2 text-sm">ke atas</span>
          </div>
          <div className="flex items-center">
            <div className="flex space-x-1 text-yellow-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="text-gray-400">★</span>
              <span className="text-gray-400">★</span>
            </div>
            <span className="ml-2 text-sm">ke atas</span>
          </div>
          <div className="ml-6 text-sm font-medium">
            <button className="flex items-center">
              Lainnya
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
      </div>

      <button className="bg-[#ee4d2d] text-white text-sm py-1 px-4 w-full">HAPUS SEMUA</button>
    </div>
  );
};

export default Filter;
