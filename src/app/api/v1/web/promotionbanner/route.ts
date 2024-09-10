import { NextRequest, NextResponse } from "next/server";
import promotionBanner from "../../../../../../data/promotionbanner.json";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({
      statusCode: 200,
      message: "Promotion banners retrieved successfully",
      data: promotionBanner, // No type checking here
    });
  } catch (error) {
    console.error("Error retrieving promotion banners:", error);
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error while retrieving promotion banners",
    });
  }
}
