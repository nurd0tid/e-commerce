import { NextRequest, NextResponse } from "next/server";
import featuresCategories from "../../../../../../../data/featurescategories.json";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({
      statusCode: 200,
      message: "Feature Categories data retrieved successfully",
      data: featuresCategories,
    });
  } catch (error) {
    console.error("Error retrieving feature categories data:", error);
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error while retrieving feature categories data",
    });
  }
}
