import React from "react";
import StoreMenu from "./StoreMenu";

const StoreProfile = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex items-center gap-8">
            <div
              className="w-auto h-auto rounded-sm text-white"
              style={{
                backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/shopmicrofe/dc2a8ae5803b2531c9a5.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(0,0,0,0.6)", // Warna masking di atas gambar
                backgroundBlendMode: "darken", // Atur bagaimana gambar dan warna bercampur
              }}
            >
              <div className="px-4 py-2">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src="https://via.placeholder.com/60" alt="Store Logo" className="w-20 h-20 rounded-full" />
                    <span
                      className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 text-white text-xs font-bold px-2 py-0.5"
                      style={{ borderRadius: "4px", backgroundColor: "#ee4d2d" }}
                    >
                      Star
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-lg">klicklaser</p>
                    <p className="text-xs text-custom-gray">Aktif 34 menit lalu</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <button className="border border-gray-300 py-1 px-6  w-40 flex items-center gap-2 justify-center">
                    <span className="text-xs font-medium uppercase">+ Ikuti</span>
                  </button>
                  <button className="border border-gray-300 py-1 px-6 w-40 flex items-center gap-2 justify-center">
                    <svg viewBox="0 0 16 16" className="w-3 h-3 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                      <g fillRule="evenodd">
                        <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z"></path>
                      </g>
                    </svg>
                    <span className="text-xs font-medium uppercase">Chat</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 15 15" x="0" y="0" strokeWidth="0" className="w-4 h-4">
                    <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"></path>
                  </svg>
                  <p className="text-sm text-custom-gray-rgb2">
                    Produk: <span className="text-red-500">49</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 15 15" className="w-4 h-4">
                    <g>
                      <circle cx="7" cy="4.5" r="3.8" fill="none" stroke="currentColor" strokeMiterlimit="10" />
                      <line x1="12" x2="12" y1="11.2" y2="14.2" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" />
                      <line x1="10.5" x2="13.5" y1="12.8" y2="12.8" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" />
                      <path
                        d="M1.5 13.8C1.5 10.8 4 8.3 7 8.3c1.5 0 2.9.6 3.9 1.6"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                      />
                    </g>
                  </svg>
                  <p className="text-sm text-custom-gray-rgb2">
                    Mengikuti: <span className="text-red-500">2</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 15 15" className="w-4 h-4">
                    <g>
                      <circle cx="5.5" cy="5" r="4" fill="none" stroke="currentColor" strokeMiterlimit="10" />
                      <path
                        d="M8.4 7.5c.7 0 1.1.7 1.1 1.6v4.9h-8v-4.9c0-.9.4-1.6 1.1-1.6"
                        fill="none"
                        strokeLinejoin="round"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M12.6 6.9c.7 0 .9.6 .9 1.2v5.7h-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M9.5 1.2C11.4 1.2 13 2.8 13 4.7c0 1.4-.9 2.7-2.1 3.2"
                        fill="none"
                        strokeLinecap="round"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                    </g>
                  </svg>
                  <p className="text-sm text-custom-gray-rgb2">
                    Pengikut: <span className="text-red-500">66</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 15 15" className="w-4 h-4">
                    <polygon
                      fill="none"
                      points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                  <p className="text-sm text-custom-gray-rgb2">
                    Penilaian: <span className="text-red-500">4.9 (255 Penilaian)</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 15 15" className="w-4 h-4">
                    <g>
                      <polygon
                        fill="none"
                        points="14 10.8 7 10.8 3 13.8 3 10.8 1 10.8 1 1.2 14 1.2"
                        strokeLinejoin="round"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                      <circle cx="4" cy="5.8" r="1" fill="currentColor" />
                      <circle cx="7.5" cy="5.8" r="1" fill="currentColor" />
                      <circle cx="11" cy="5.8" r="1" fill="currentColor" />
                    </g>
                  </svg>
                  <p className="text-sm text-custom-gray-rgb2">
                    Performa Chat: <span className="text-red-500">91%</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 15 15" className="w-4 h-4">
                    <g>
                      <circle cx="6.8" cy="4.2" r="3.8" fill="none" stroke="currentColor" strokeMiterlimit="10" />
                      <polyline
                        fill="none"
                        points="9.2 12.5 11.2 14.5 14.2 11"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                      />
                      <path d="M.8 14C.8 10.7 3.5 8 6.8 8c2.1 0 3.9 1 5 2.6" fill="none" strokeLinecap="round" stroke="currentColor" strokeMiterlimit="10" />
                    </g>
                  </svg>
                  <p className="text-sm text-custom-gray-rgb2">
                    Bergabung: <span className="text-red-500">29 Bulan Lalu</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StoreMenu />
    </>
  );
};

export default StoreProfile;
