import { NextRequest, NextResponse } from "next/server";
import bestSelling from "../../../../../../data/bestselling.json";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({
      statusCode: 200,
      message: "Best Selling Items retrieved successfully",
      data: bestSelling,
    });
  } catch (error) {
    console.error("Error retrieving Best Selling Items data:", error);
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error while retrieving Best Selling Items data",
    });
  }
}
