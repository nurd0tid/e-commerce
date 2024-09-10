import { NextRequest, NextResponse } from "next/server";
import productsData from "../../../../../../data/products.json";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const keyword = searchParams.get("keyword") || "";
    const limit = parseInt(searchParams.get("limit") || "58");
    const offset = parseInt(searchParams.get("offset") || "0");

    let filteredProducts = productsData;

    // Filter berdasarkan nama produk yang ada di dalam objek product
    if (keyword) {
      filteredProducts = filteredProducts.filter((product) => product.product.name.toLowerCase().includes(keyword.toLowerCase()));
    }

    // Mengambil produk sesuai paginasi
    const paginatedProducts = filteredProducts.slice(offset, offset + limit);

    return NextResponse.json({
      statusCode: 200,
      message: "Products retrieved successfully",
      data: paginatedProducts,
      total: filteredProducts.length,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error while fetching products",
    });
  }
}
