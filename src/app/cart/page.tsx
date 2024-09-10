import React from "react";
import ProductList from "./components/ProductList";
import Suggestion from "./components/Suggestion";

const CartPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <ProductList />
      <Suggestion/>
    </div>
  );
};

export default CartPage;
