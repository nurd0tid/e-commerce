import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white fixed bottom-0 w-full">
      <div className="py-5 md:flex md:items-center md:justify-between lg:px-12">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
