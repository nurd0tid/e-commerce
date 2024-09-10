import React from "react";

type TabsProps = {
  currentTab: string;
  onTabChange: (tab: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ currentTab, onTabChange }) => {
  const tabs = ["Semua", "Belum Bayar", "Sedang Dikemas", "Dikirim", "Selesai", "Dibatalkan", "Pengembalian Barang"];

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`${
              currentTab === tab ? "border-orange-500 text-orange-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            } py-4 px-2 border-b-2 font-medium text-sm focus:outline-none transition duration-150 ease-in-out`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
