"use client"; // Mengindikasikan bahwa komponen ini hanya dijalankan di sisi klien

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Mengimpor Navigation dari swiper/modules
import "swiper/css";
import "swiper/css/navigation";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

interface ImageGalleryProps {
  media: {
    id: string;
    type: string;
    url: string;
    duration?: string;
  }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ media }) => {
  const mainSwiperRef = useRef<any>(null);
  const thumbsSwiperRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState(0); // State untuk menyimpan indeks slide aktif
  const [isReady, setIsReady] = useState(false); // State untuk mengontrol kapan Swiper siap
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol apakah modal terbuka

  // Fungsi untuk membuka dan menutup modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Inisialisasi navigasi Swiper setelah elemen DOM siap
  useEffect(() => {
    const initializeNavigation = () => {
      if (mainSwiperRef.current) {
        mainSwiperRef.current.navigation.init();
        mainSwiperRef.current.navigation.update();
      }
    };

    if (document.readyState === "complete") {
      initializeNavigation();
      setIsReady(true); // Set isReady ke true setelah inisialisasi
    } else {
      window.addEventListener("load", () => {
        initializeNavigation();
        setIsReady(true); // Set isReady ke true setelah inisialisasi
      });
    }

    return () => {
      window.removeEventListener("load", initializeNavigation);
    };
  }, []);

  // Jika Swiper belum siap, tampilkan placeholder atau shimmer loading
  if (!isReady) {
    return (
      <div className="shimmer-placeholder">
        {/* Placeholder untuk gambar utama */}
        <div className="w-full h-96 bg-gray-200 animate-pulse flex justify-center items-center">
          <svg className="w-10 h-10 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18" aria-hidden="true">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>

        {/* Placeholder untuk thumbnail gambar */}
        <div className="mt-2 grid grid-cols-5 gap-2">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="w-full h-24 bg-gray-200 animate-pulse flex justify-center items-center">
              <svg className="w-10 h-10 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18" aria-hidden="true">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="image-gallery">
      {/* Slider utama */}
      <Swiper
        spaceBetween={10}
        navigation={{
          prevEl: ".swiper-button-custom-prev",
          nextEl: ".swiper-button-custom-next",
        }}
        modules={[Navigation]} // Mengimpor modul navigasi yang benar
        onSwiper={(swiper) => {
          mainSwiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          if (thumbsSwiperRef.current) {
            thumbsSwiperRef.current.slideTo(swiper.activeIndex);
          }
        }}
        className="main-swiper"
      >
        {media.map((md, index) => (
          <SwiperSlide key={index}>
            {md.type === "video" ? (
              <video src={md.url} className="w-[484px] h-[484px]" controls onClick={openModal} />
            ) : (
              <img src={md.url} alt={`Image ${index}`} className="w-[484px] h-[484px]" onClick={openModal} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        navigation={{
          prevEl: ".swiper-button-custom-prev",
          nextEl: ".swiper-button-custom-next",
        }} // Menambahkan navigasi pada thumbnail
        modules={[Navigation]} // Mengimpor modul navigasi yang benar
        onSwiper={(swiper) => {
          thumbsSwiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          if (thumbsSwiperRef.current) {
            thumbsSwiperRef.current.slideTo(swiper.activeIndex);
          }
        }}
        className="thumbs-swiper mt-2"
      >
        {media.map((md, index) => (
          <SwiperSlide key={index}>
            {md.type === "video" ? (
              <div className="relative w-full h-full">
                <video
                  src={md.url}
                  className={`w-[89px] h-[89px] object-cover cursor-pointer ${activeIndex === index ? "border-red-500 border" : "border-transparent border"}`}
                  onClick={() => {
                    if (mainSwiperRef.current) {
                      mainSwiperRef.current.slideTo(index);
                    }
                  }}
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/160486046c4b1eafcb63.svg"
                    alt="Video Icon"
                    className="w-8 h-8"
                  />
                </div>
              </div>
            ) : (
              <img
                src={md.url}
                alt={`Thumbnail ${index}`}
                className={`w-[89px] h-[89px] object-cover cursor-pointer ${activeIndex === index ? "border-red-500 border" : "border-transparent border"}`}
                onClick={() => {
                  if (mainSwiperRef.current) {
                    mainSwiperRef.current.slideTo(index);
                  }
                }}
              />
            )}
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div
          className="swiper-button-custom-prev absolute top-[50%] transform -translate-y-1/2 left-[-5px] z-10  w-6 h-12 flex items-center justify-center cursor-pointer"
          style={{
            backgroundColor: "rgba(0, 0, 0, .2)",
          }}
        >
          <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/be6abcdf029c79bbafd9.svg" alt="Previous" className="w-4 h-4" />
        </div>
        <div
          className="swiper-button-custom-next absolute top-[50%] transform -translate-y-1/2 right-[-5px] z-10  w-6 h-12 flex items-center justify-center cursor-pointer"
          style={{
            backgroundColor: "rgba(0, 0, 0, .2)",
          }}
        >
          <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/8120e456c268426c4054.svg" alt="Next" className="w-4 h-4" />
        </div>
      </Swiper>

      <Dialog open={isModalOpen} onClose={closeModal} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="bg-white rounded-lg max-w-5xl w-full mx-auto p-4 flex relative shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="flex w-full relative">
                {/* Main image on the left */}
                <div className="w-3/4 flex justify-center items-center relative">
                  {media[activeIndex].type === "video" ? (
                    <video src={media[activeIndex].url} className="w-full h-[600px] object-cover" controls />
                  ) : (
                    <img src={media[activeIndex].url} alt={`Image ${activeIndex}`} className="w-full h-[600px] object-cover" />
                  )}

                  {/* Left navigation button */}
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white w-10 h-20 rounded-r-md flex items-center justify-center z-10 hover:bg-gray-800"
                    onClick={() => {
                      if (mainSwiperRef.current) {
                        mainSwiperRef.current.slidePrev(); // Navigate to the previous slide
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Right navigation button */}
                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white w-10 h-20 rounded-l-md flex items-center justify-center z-10 hover:bg-gray-800"
                    onClick={() => {
                      if (mainSwiperRef.current) {
                        mainSwiperRef.current.slideNext(); // Navigate to the next slide
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Thumbnails on the right */}
                <div className="w-1/4 ml-4 grid grid-cols-3 grid-flow-row auto-rows-max gap-1 overflow-y-auto h-full">
                  {media.map((md, index) => (
                    <div
                      key={index}
                      className="cursor-pointer p-1"
                      onClick={() => {
                        if (mainSwiperRef.current) {
                          mainSwiperRef.current.slideTo(index); // Selalu sinkronkan slide utama dengan index yang dipilih
                          setActiveIndex(index); // Set index langsung setelah slideTo
                        }
                      }}
                    >
                      {md.type === "video" ? (
                        <div className={`relative w-full h-20 object-cover ${activeIndex === index ? "border-2 border-red-500" : "border border-gray-200"}`}>
                          <video src={md.url} className="object-cover w-full h-full" />
                          <div className="absolute bottom-0 left-0 w-full h-6 bg-black opacity-50"></div>
                          <div className="flex justify-between items-center absolute bottom-0 w-full px-1">
                            <div>
                              <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z"
                                    fill="white"
                                  ></path>
                                </g>
                                <defs>
                                  <filter id="filter0_d" x="0" y="0" width="22.1667" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                    <feOffset></feOffset>
                                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                            <div>
                              <span className="text-white text-xs">{md.duration || "0:00"}</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={md.url}
                          alt={`Thumbnail ${index}`}
                          className={`w-full h-20 object-cover ${activeIndex === index ? "border-2 border-red-500" : "border border-gray-200"}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ImageGallery;
