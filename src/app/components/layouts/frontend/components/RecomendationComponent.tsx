import React from "react";
import { Product } from "@/app/types/products";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/v1/web/auth/[...nextauth]/route";
import RecomendationClientComponent from "./RecomendationClientComponent";

const fetchInitialProducts = async (page: number, limit: number = 24): Promise<Product[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/web/recommendation?page=${page}&limit=${limit}`, {
    cache: "no-store",
  });
  const data = await res.json();
  // Extract 'id' and 'product' fields, merging them into one object
  const products = data.data.map((item: any) => ({
    id: item.id, // Ambil ID
    ...item.product, // Gabungkan dengan data produk
  }));

  return products;
};

const RecomendationComponent = async () => {
  // const session = await getServerSession(authOptions);
  const initialPage = 1;
  const limit = 24; // Anda dapat mengubah nilai limit sesuai kebutuhan
  const initialProducts = await fetchInitialProducts(initialPage, limit);

  return (
    <div className="bg-gray-100 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="sticky top-[8rem] bg-white z-40">
          <div className="flex justify-center items-center py-4">
            <h2 className="text-red-600 text-lg font-semibold">REKOMENDASI</h2>
          </div>
          <hr className="border-t-4 border-red-600" />
        </div>

        {/* Pass initialProducts and session to the client component */}
        <RecomendationClientComponent initialProducts={initialProducts} initialPage={initialPage} limit={limit} />
      </div>
    </div>
  );
};

export default RecomendationComponent;
