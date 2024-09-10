import { NextRequest, NextResponse } from "next/server";
import banners from "../../../../../../../data/banners.json"; // Misalnya ini adalah data lokal, atau bisa digantikan dengan data dari Supabase

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({
      statusCode: 200,
      message: "Banners data retrieved successfully",
      data: banners, // Langsung kembalikan data tanpa pengecekan
    });
  } catch (error) {
    console.error("Error retrieving banners data:", error);
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error while retrieving banners data",
    });
  }
}
