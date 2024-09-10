import { NextRequest, NextResponse } from "next/server";
import flashSale from "../../../../../../data/flashsale.json";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({
      statusCode: 200,
      message: "Flash Sale data retrieved successfully",
      data: flashSale, // Langsung kembalikan data tanpa pengecekan
    });
  } catch (error) {
    console.error("Error retrieving Flash Sale data:", error);
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error while retrieving Flash Sale data",
    });
  }
}
