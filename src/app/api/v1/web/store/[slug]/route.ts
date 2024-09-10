import { NextRequest, NextResponse } from "next/server";
import stores from "../../../../../../../data/stores.json"; // Data lokal store atau bisa dari database
import { Store } from "@/app/types/products";

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params;

    // Cari store berdasarkan slug
    const store = stores.find((store: Store) => store.slug === slug);

    if (!store) {
      return NextResponse.json({
        statusCode: 404,
        message: "Store not found",
      });
    }

    return NextResponse.json({
      statusCode: 200,
      message: "Store data retrieved successfully",
      data: store, // Mengembalikan data store
    });
  } catch (error) {
    console.error("Error retrieving store data:", error);
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error while retrieving store data",
    });
  }
}
