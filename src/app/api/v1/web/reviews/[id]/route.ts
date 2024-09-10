import { NextRequest, NextResponse } from "next/server";
import reviewsData from "../../../../../../../data/reviews.json"; // Make sure the path is correct for your project structure

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params; // Extract 'id' from params

    // Parse query parameters
    const url = new URL(req.url);
    const ratingParam = url.searchParams.get("rating");
    const pageParam = url.searchParams.get("page");
    const limitParam = url.searchParams.get("limit");

    // Default page and limit if not provided
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const limit = limitParam ? parseInt(limitParam, 10) : 5;

    // Convert rating to number or null if not provided
    const ratingFilter = ratingParam ? parseFloat(ratingParam) : null;

    // Find the product by 'product_id'
    const product = reviewsData.find((item: any) => item.product_id === id);

    if (product) {
      let filteredReviews = product.reviews;

      // If a rating filter is provided, filter the reviews by rating range
      if (ratingFilter !== null) {
        // Filter untuk range rating dari `ratingFilter` hingga `ratingFilter + 0.9`
        const upperLimit = ratingFilter + 0.9;
        filteredReviews = filteredReviews.filter((review: any) => review.rating >= ratingFilter && review.rating <= upperLimit);
      }
      // Implement pagination
      const totalReviews = filteredReviews.length;
      const totalPages = Math.ceil(totalReviews / limit);
      const paginatedReviews = filteredReviews.slice((page - 1) * limit, page * limit);

      return NextResponse.json({
        statusCode: 200,
        message: "Reviews retrieved successfully",
        data: paginatedReviews, // Return paginated reviews
        pagination: {
          totalReviews,
          totalPages,
          currentPage: page,
          limit,
        },
      });
    } else {
      return NextResponse.json(
        {
          statusCode: 404,
          message: "Product reviews not found",
        },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      {
        statusCode: 500,
        message: "Internal server error while fetching reviews",
      },
      { status: 500 }
    );
  }
}
