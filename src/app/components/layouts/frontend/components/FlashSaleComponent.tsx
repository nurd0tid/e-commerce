"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { FlashSaleItem } from "@/app/types/flashSale"; // Pastikan path ini sesuai dengan lokasi file types

// ShimmerCard Component for loading state
const ShimmerCard = () => (
  <div className="animate-pulse p-4 bg-white rounded-md shadow-md">
    <div className="h-40 bg-gray-300 rounded-md mb-2"></div>
    <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
    <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
  </div>
);

// TimeLeft Interface
interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const FlashSaleComponent: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [flashSaleItems, setFlashSaleItems] = useState<FlashSaleItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch flash sale data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("/api/v1/web/flashsale"); // Ganti dengan endpoint API yang sesuai
        const result = await response.json();
        setFlashSaleItems(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching flash sale data:", error);
        setIsLoading(false); // Tetap hentikan loading meskipun ada error
      }
    };

    fetchData();

    const calculateTimeLeft = (): TimeLeft => {
      const targetTime = new Date().setHours(24, 0, 0, 0); // Target akhir hari ini
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;

      let timeLeft: TimeLeft = {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clear interval saat komponen tidak digunakan
  }, []);

  if (!timeLeft) {
    // Sembunyikan komponen saat belum ada `timeLeft`
    return null;
  }

  return (
    <div className="bg-gray-100 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white relative">
          <div className="px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e5389.png" alt="Flash Sale" width={120} />
              <div className="ml-2 flex items-center space-x-1">
                <div className="bg-black text-white px-1 py-[0.05rem] text-xs font-bold h-[18px] flex items-center justify-center">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="bg-black text-white px-1 py-[0.05rem] text-xs font-bold h-[18px] flex items-center justify-center">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="bg-black text-white px-1 py-[0.05rem] text-xs font-bold h-[18px] flex items-center justify-center">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
              </div>
            </div>
            <a href="#" className="text-red-500 text-sm font-semibold">
              Lihat Semua &gt;
            </a>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <ShimmerCard key={i} />
              ))}
            </div>
          ) : (
            <>
              <Swiper
                slidesPerView={6}
                spaceBetween={0}
                navigation={{
                  prevEl: ".swiper-button-prevzx",
                  nextEl: ".swiper-button-nextzx",
                }}
                pagination={false}
                onSlideChange={(swiper) => {
                  const prevButton = document.querySelector<HTMLDivElement>(".swiper-button-prevzx");
                  const nextButton = document.querySelector<HTMLDivElement>(".swiper-button-nextzx");

                  if (prevButton && nextButton) {
                    if (swiper.isBeginning) {
                      prevButton.classList.add("hidden");
                    } else {
                      prevButton.classList.remove("hidden");
                    }

                    if (swiper.isEnd) {
                      nextButton.classList.add("hidden");
                    } else {
                      nextButton.classList.remove("hidden");
                    }
                  }
                }}
                onInit={(swiper) => {
                  const prevButton = document.querySelector<HTMLDivElement>(".swiper-button-prevzx");
                  const nextButton = document.querySelector<HTMLDivElement>(".swiper-button-nextzx");

                  if (prevButton && nextButton) {
                    if (swiper.isBeginning) {
                      prevButton.classList.add("hidden");
                    }

                    const totalPages = Math.ceil(swiper.slides.length / (swiper.params.slidesPerView as number));
                    if (swiper.isEnd && totalPages <= 1) {
                      nextButton.classList.add("hidden");
                    }
                  }
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {flashSaleItems.map((item) => (
                  <SwiperSlide key={item.id} className="px-4 mb-4">
                    <div className="relative">
                      {item.isMall && (
                        <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-tr-md rounded-bl-md">Mall</div>
                      )}
                      {item.isStar && (
                        <div className="absolute top-0 left-0 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-tr-md rounded-bl-md">Star+</div>
                      )}

                      <div className="absolute top-0 right-0 flex items-center">
                        <div className="bg-yellow-300 text-red-600 text-xs font-bold flex items-center">
                          <svg
                            width="10"
                            height="16"
                            viewBox="0 0 10 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-1"
                            style={{
                              position: "relative",
                              left: "-5px",
                            }}
                          >
                            <path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" fill="url(#paint0_linear_2216_10611)" />
                            <defs>
                              <linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EE4D2D"></stop>
                                <stop offset="1" stopColor="#FF7337"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                          <span>{item.discount}</span>
                        </div>
                      </div>

                      {item.freeShipping && (
                        <div className="absolute bottom-0 left-0 text-gray-700 text-xs font-semibold px-2 py-1">
                          <img src="https://down-id.img.susercontent.com/file/id-11134004-7qul8-lk7ybm8asqw2b1_tn" alt="Gratis Ongkir" className="-ml-2 -m-1" />
                        </div>
                      )}

                      <img src={item.img} alt={item.name} className="w-full h-auto" />
                    </div>

                    <div className="mt-2 text-sm text-center flex-grow flex flex-col justify-center items-center">
                      <span className="font-semibold text-lg text-red-600">{item.price}</span>
                      <div className="flex items-center mt-1">
                        {item.stock - item.sold <= 2 ? (
                          <div className="relative bg-orange-200 rounded-full overflow-hidden w-[150px] h-5 flex items-center">
                            <div className="absolute left-0 h-full bg-gradient-to-r from-orange-500 to-yellow-300" style={{ width: "10%" }}></div>
                            <div className="relative z-10 flex items-center justify-center w-full h-full font-semibold text-xs text-white px-6">
                              STOK TERBATAS
                            </div>
                          </div>
                        ) : item.stock - item.sold <= 7 ? (
                          <div className="relative flex items-center">
                            <div className="absolute top-[-5px] left-0 z-20 flex items-center justify-center">
                              <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/c5316dd01de2b0d41d26.png"
                                alt="Fire icon"
                                className="h-5 w-5"
                              />
                            </div>

                            <div className="relative bg-orange-200 rounded-full overflow-hidden w-[150px] h-5 flex items-center">
                              <div
                                className="absolute left-0 h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300"
                                style={{ width: `${(item.sold / item.stock) * 100}%`, borderRadius: "0 10px 10px 0" }}
                              ></div>
                              <div className="relative z-10 flex items-center justify-center w-full h-full font-semibold text-xs text-white px-6">
                                TERSISA {item.stock - item.sold}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative flex items-center">
                            <div className="absolute top-[-5px] left-0 z-20 flex items-center justify-center">
                              <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/c5316dd01de2b0d41d26.png"
                                alt="Fire icon"
                                className="h-5 w-5"
                              />
                            </div>

                            <div className="relative bg-orange-200 rounded-full overflow-hidden w-[150px] h-5 flex items-center">
                              <div
                                className="absolute left-0 h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300"
                                style={{ width: `${(item.sold / item.stock) * 100}%`, borderRadius: "0 10px 10px 0" }}
                              ></div>
                              <div className="relative z-10 flex items-center justify-center w-full h-full font-semibold text-xs text-white px-6">
                                TERJUAL {item.sold}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-button-prevzx absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 focus:outline-none hover:scale-110 transition-transform duration-200 z-10">
                <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
              </div>
              <div className="swiper-button-nextzx absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 focus:outline-none hover:scale-110 transition-transform duration-200 z-10">
                <ChevronRightIcon className="h-6 w-6 text-gray-800" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlashSaleComponent;
