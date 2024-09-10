import { NextRequest, NextResponse } from "next/server";
import products from "../../../../../../../data/products.json";

export async function GET(request: NextRequest, { params }: { params: { categoriesIds: string } }) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1"); // Ambil halaman dari query params, default 1
    const limit = parseInt(searchParams.get("limit") || "24"); // Ambil limit dari query params, default 24

    const { categoriesIds } = params;

    if (!categoriesIds) {
      return NextResponse.json({
        statusCode: 400,
        message: "No category IDs provided",
      });
    }

    // Split the category IDs by comma
    const categoryIdArray = categoriesIds.split(",");

    // Filter products based on category IDs
    const filteredProducts = products.filter((product) => product.product.category_ids.some((id: string) => categoryIdArray.includes(id)));

    // Pagination logic
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return NextResponse.json({
      statusCode: 200,
      message: "Products retrieved successfully",
      data: paginatedProducts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filteredProducts.length / limit),
        totalProducts: filteredProducts.length,
      },
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Failed to retrieve products",
    });
  }
}
