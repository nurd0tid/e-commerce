import { NextRequest, NextResponse } from "next/server";
import productsData from "../../../../../../../data/products.json"; // Akses file JSON produk Anda

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params; // Dapatkan 'id' dari URL
    const product = productsData.find((item: any) => item.id === id); // Cari produk berdasarkan 'id'

    if (product) {
      return NextResponse.json({
        statusCode: 200,
        message: "Product retrieved successfully",
        data: product,
      });
    } else {
      return NextResponse.json(
        {
          statusCode: 404,
          message: "Product not found",
        },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      {
        statusCode: 500,
        message: "Internal server error while fetching product",
      },
      { status: 500 }
    );
  }
}
