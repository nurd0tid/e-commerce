import { NextRequest, NextResponse } from "next/server";
import categories from "../../../../../../data/categories.json";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({
      statusCode: 200,
      message: "Categories data retrieved successfully",
      data: categories, // Langsung kembalikan data tanpa pengecekan
    });
  } catch (error) {
    console.error("Error retrieving categories data:", error);
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error while retrieving categories data",
    });
  }
}
