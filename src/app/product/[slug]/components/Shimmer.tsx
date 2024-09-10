// components/Shimmer.tsx
import React from "react";

const Shimmer: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="text-xs mb-4 flex items-center">
        <div className="h-2 bg-gray-200 w-10 rounded-md"></div>
        <span className="mx-1">{">"}</span>
        <div className="h-2 bg-gray-200 w-10 rounded-md"></div>
        <span className="mx-1">{">"}</span>
        <div className="h-2 bg-gray-200 w-10 rounded-md"></div>
        <span className="mx-1">{">"}</span>
        <div className="h-2 bg-gray-200 w-1/2 rounded-md"></div>
      </div>
      {/* Shimmer for main product section */}
      <div className="grid grid-cols-12 gap-4 bg-white p-4 rounded-lg shadow-sm">
        {/* Left: Image gallery shimmer */}
        <div className="col-span-5">
          <div className="flex items-center justify-center bg-gray-200 h-96 w-full rounded-lg mb-4">
            <svg className="w-20 h-20 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18" aria-hidden="true">
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="flex space-x-2">
            <div className="flex items-center justify-center bg-gray-200 h-24 w-28 rounded-md">
              <svg className="w-10 h-10 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18" aria-hidden="true">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="flex items-center justify-center bg-gray-200 h-24 w-28 rounded-md">
              <svg className="w-10 h-10 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18" aria-hidden="true">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="flex items-center justify-center bg-gray-200 h-24 w-28 rounded-md">
              <svg className="w-10 h-10 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18" aria-hidden="true">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="flex items-center justify-center bg-gray-200 h-24 w-28 rounded-md">
              <svg className="w-10 h-10 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18" aria-hidden="true">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="flex items-center justify-center bg-gray-200 h-24 w-28 rounded-md">
              <svg className="w-10 h-10 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18" aria-hidden="true">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Product details shimmer */}
        <div className="col-span-7">
          <div className="h-6 bg-gray-200 w-2/3 mb-4 rounded-md"></div>
          <div className="h-6 bg-gray-200 w-1/4 mb-2 rounded-md"></div>
          <div className="h-4 bg-gray-200 w-1/6 mb-6 rounded-md"></div>

          <div className="h-10 bg-gray-200 w-full mb-4 rounded-md"></div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="h-4 bg-gray-200 rounded-md"></div>
            <div className="h-4 bg-gray-200 rounded-md"></div>
            <div className="h-4 bg-gray-200 rounded-md"></div>
            <div className="h-4 bg-gray-200 rounded-md"></div>
          </div>

          <div className="h-8 bg-gray-200 w-1/4 rounded-md mb-4"></div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-10 bg-gray-200 w-full rounded-md"></div>
            <div className="h-10 bg-gray-200 w-full rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Shimmer for store section */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center">
          <div className="bg-gray-200 h-20 w-20 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18" aria-hidden="true">
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="ml-4">
            <div className="h-4 bg-gray-200 w-32 mb-2 rounded-md"></div>
            <div className="h-4 bg-gray-200 w-20 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Shimmer for product specifications and description */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
        <div className="h-6 bg-gray-200 w-1/4 mb-4 rounded-md"></div>
        <div className="space-y-4">
          {/* Spec labels and values */}
          <div className="h-4 bg-gray-200 rounded-md"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
          <div className="h-4 bg-gray-200 rounded-md"></div>
        </div>
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
        <div className="h-6 bg-gray-200 w-1/4 mb-4 rounded-md"></div>
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded-md"></div>
          <div className="h-6 bg-gray-200 rounded-md"></div>
          <div className="h-6 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
