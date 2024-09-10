"use client";

import React, { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex border border-gray-200 divide-x divide-gray-200">
      <button className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none" onClick={decreaseQuantity}>
        <span className="text-sm">−</span>
      </button>
      <span className="w-10 h-6 flex items-center justify-center text-gray-700 text-sm">{quantity}</span>
      <button className="w-6 h-6 flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none" onClick={increaseQuantity}>
        <span className="text-sm">+</span>
      </button>
    </div>
  );
}
