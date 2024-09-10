"use client";
import React, { useEffect, useState } from "react";
import HeroSlider from "./HeroSlider";
import { Banner } from "@/app/types/banners";
import { FeatureCategory } from "@/app/types/featuresCategories";
import axios from "axios";

const HeroComponents = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [categories, setCategories] = useState<FeatureCategory[]>([]);
  const [loadingBanners, setLoadingBanners] = useState<boolean>(true);
  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
  const [errorBanners, setErrorBanners] = useState<string | null>(null);
  const [errorCategories, setErrorCategories] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get("/api/v1/web/hero/banners");
        setBanners(response.data.data);
        setLoadingBanners(false);
      } catch (err) {
        setErrorBanners("Failed to load banners");
        setLoadingBanners(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/v1/web/hero/features");
        setCategories(response.data.data);
        setLoadingCategories(false);
      } catch (err) {
        setErrorCategories("Failed to load feature categories");
        setLoadingCategories(false);
      }
    };

    fetchBanners();
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 py-7">
          <div className="relative lg:col-span-2 rounded-md group overflow-hidden">
            <HeroSlider />
          </div>

          <div className="grid grid-rows-2 gap-4">
            {loadingBanners ? (
              <>
                <div className="w-full h-30 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-md"></div>
                <div className="w-full h-30 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-md"></div>
              </>
            ) : (
              banners.map((banner) => (
                <div key={banner.id} className="bg-gray-100">
                  <img src={banner.image_url} alt={banner.alt_text} className="w-full h-auto rounded-md" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-5 px-4 sm:px-6 lg:px-8">
        {loadingCategories
          ? Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="p-4 w-12 h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-full"></div>
                <span className="mt-2 text-sm text-center bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse w-20 h-4 rounded"></span>
              </div>
            ))
          : categories.map((category) => (
              <div key={category.id} className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="p-4">
                  <img src={category.image_url} alt={category.alt_text} className="w-12 h-12" />
                </div>
                <span className="mt-2 text-sm text-center">{category.title}</span>
              </div>
            ))}
      </div>

      <hr className="mt-8 border-t-2 border-gray-200" />
    </div>
  );
};

export default HeroComponents;
