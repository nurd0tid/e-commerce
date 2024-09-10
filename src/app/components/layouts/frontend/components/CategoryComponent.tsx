"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Category } from "@/app/types/categories";

const CategoryComponent: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/v1/web/categories")
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 200 && Array.isArray(data.data)) {
          setCategories(data.data);
        } else {
          console.error("Unexpected data format:", data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch categories:", error);
        setIsLoading(false);
      });
  }, []);

  const shimmerArray = new Array(20).fill(null);

  return (
    <div className="bg-gray-100 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white relative">
          <h2 className="text-lg font-semibold px-4 py-4">Kategori</h2>
          {isLoading ? (
            <div className="grid grid-cols-10 gap-4">
              {shimmerArray.map((_, index) => (
                <div key={index} className="flex flex-col justify-between items-center h-full border-t border-l border-gray-200 p-4 animate-pulse">
                  <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                  <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              slidesPerView={10}
              grid={{
                rows: 2,
                fill: "row",
              }}
              spaceBetween={0}
              navigation={{
                prevEl: ".swiper-button-prevz",
                nextEl: ".swiper-button-nextz",
              }}
              pagination={false}
              onSlideChange={(swiper) => {
                const prevButton = document.querySelector<HTMLDivElement>(".swiper-button-prevz");
                const nextButton = document.querySelector<HTMLDivElement>(".swiper-button-nextz");

                if (prevButton && nextButton) {
                  // Menyembunyikan tombol navigasi kiri jika di slide pertama
                  if (swiper.isBeginning) {
                    prevButton.classList.add("hidden");
                  } else {
                    prevButton.classList.remove("hidden");
                  }

                  // Menyembunyikan tombol navigasi kanan jika di slide terakhir
                  if (swiper.isEnd) {
                    nextButton.classList.add("hidden");
                  } else {
                    nextButton.classList.remove("hidden");
                  }
                }
              }}
              onInit={(swiper) => {
                const prevButton = document.querySelector<HTMLDivElement>(".swiper-button-prevz");
                const nextButton = document.querySelector<HTMLDivElement>(".swiper-button-nextz");

                if (prevButton && nextButton) {
                  // Menyembunyikan tombol navigasi kiri jika di slide pertama
                  if (swiper.isBeginning) {
                    prevButton.classList.add("hidden");
                  }

                  // Menyembunyikan tombol navigasi kanan jika hanya ada satu halaman
                  const totalPages = Math.ceil(swiper.slides.length / (swiper.params.slidesPerView as number));
                  if (swiper.isEnd && totalPages <= 1) {
                    nextButton.classList.add("hidden");
                  }
                }
              }}
              modules={[Grid, Navigation]}
              className="mySwiper"
            >
              {categories.map((category, index) => (
                <SwiperSlide key={index} style={{ padding: 0 }}>
                  <div className="flex flex-col justify-between items-center h-full transform hover:scale-105 transition-transform duration-300 border-t border-l border-gray-200 p-4">
                    <img src={category.img} alt={category.name} className="w-16 h-16" />
                    <span
                      className="mt-2 text-sm text-center flex-grow flex items-center justify-center"
                      style={{
                        minHeight: "40px",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                      }}
                    >
                      {category.name}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {!isLoading && (
            <>
              <div className="swiper-button-prevz absolute left-[-20px] top-1/2 transform -translate-y-1/7 bg-white rounded-full shadow-md p-2 focus:outline-none hover:scale-110 transition-transform duration-200 z-10">
                <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
              </div>
              <div className="swiper-button-nextz absolute right-[-20px] top-1/2 transform -translate-y-1/7 bg-white rounded-full shadow-md p-2 focus:outline-none hover:scale-110 transition-transform duration-200 z-10">
                <ChevronRightIcon className="h-6 w-6 text-gray-800" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
