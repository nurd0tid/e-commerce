"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Slider } from "../../../../types/sliders";
import axios from "axios";

export default function HeroSlider() {
  const [sliders, setSliders] = useState<Slider[]>([]); // Menentukan tipe array Slider
  const [loading, setLoading] = useState<boolean>(true); // Menentukan tipe boolean
  const [error, setError] = useState<string | null>(null); // Menentukan tipe string atau null

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await axios.get("/api/v1/web/hero/sliders");
        setSliders(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load sliders");
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  if (loading) {
    return <div className="w-full h-64 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>;
  }

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        style={{ width: "100%", height: "100%" }} // Ensure the Swiper takes up the full size
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id} style={{ width: "100%", height: "100%" }}>
            <img src={slider.image_url} alt={slider.title} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tombol Navigasi */}
      <div className="swiper-button-prev absolute left-0 top-0 bottom-0 flex items-center justify-center text-white w-8 h-8 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="swiper-button-next absolute right-0 top-0 bottom-0 flex items-center justify-center text-white w-8 h-8 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Dot Pagination */}
      <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10"></div>
    </>
  );
}
