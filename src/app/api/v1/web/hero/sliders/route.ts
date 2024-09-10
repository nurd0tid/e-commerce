import { NextRequest, NextResponse } from "next/server";
import sliders from "../../../../../../../data/sliders.json";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({
      statusCode: 200,
      message: "Sliders data retrieved successfully",
      data: sliders, // Langsung kembalikan data tanpa pengecekan
    });
  } catch (error) {
    console.error("Error retrieving sliders data:", error);
    return NextResponse.json({
      statusCode: 500,
      message: "Internal server error while retrieving sliders data",
    });
  }
}
