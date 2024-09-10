"use client";
import React, { useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import Tabs from "./components/Tabs";
import { FaSearch } from "react-icons/fa";

const Purchase: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("Semua");

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 p-4">
        <ProfileSidebar />
      </div>
      <div className="col-span-9">
        {/* Tabs */}
        <div className="py-4">
          <div className="bg-white shadow-sm">
            <Tabs currentTab={currentTab} onTabChange={handleTabChange} />
          </div>
        </div>

        {/* Search Bar */}
        {currentTab === "Semua" && (
          <div className="pb-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Kamu bisa cari berdasarkan Nama Penjual, No. Pesanan atau Nama Produk"
                className="block w-full pl-10 pr-3 leading-5 bg-gray-200 rounded-sm border-gray-200 placeholder-gray-400 focus:outline-none focus:bg-gray-200 focus:ring-1 focus:ring-gray-200 focus:border-gray-200 sm:text-sm"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="bg-white pb-4 shadow-sm p-4">
          <p>Ini adalah konten untuk tab {currentTab}</p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
