import { NextRequest, NextResponse } from "next/server";
import products from "../../../../../../data/products.json";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "24");

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    return NextResponse.json({
      statusCode: 200,
      message: "Products retrieved successfully",
      data: paginatedProducts,
    });
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      message: "Failed to retrieve products",
    });
  }
}