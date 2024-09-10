"use client";

import React, { useEffect, useState } from "react";
import { Review } from "@/app/types/reviews";

interface ReviewProps {
  averageRating: number;
  productId: string;
}

function Shimmer() {
  return (
    <div className="animate-pulse">
      {/* Simulate a review block */}
      <div className="flex items-start p-6 mb-4 border-b border-gray-200">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/3"></div>
          <div className="flex space-x-2 mt-3">
            <div className="w-20 h-20 bg-gray-300"></div>
            <div className="w-20 h-20 bg-gray-300"></div>
            <div className="w-20 h-20 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Star({ filled }: { filled: number }) {
  return (
    <svg className="h-5 w-5 text-red-500" viewBox="0 0 24 24">
      <path
        d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.771 1.401 8.169L12 18.896l-7.335 3.853 1.401-8.169L.132 9.209l8.2-1.191z"
        fill={filled > 0 ? "#ff0000" : "none"}
        clipPath={`inset(0 ${100 - filled}% 0 0)`}
        style={{ transition: "clip-path 0.2s ease-in-out" }}
      />
      <path
        d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.771 1.401 8.169L12 18.896l-7.335 3.853 1.401-8.169L.132 9.209l8.2-1.191z"
        fill="none"
        stroke="#ff0000"
        strokeWidth="1"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const partialStar = Math.round((rating - fullStars) * 100);

  return (
    <div className="text-center">
      <span className="text-red-500 mr-1">
        <span className="font-medium text-2xl">{rating.toFixed(1)}</span> dari 5
      </span>
      <div className="flex justify-center items-center mt-2">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} filled={i < fullStars ? 100 : i === fullStars ? partialStar : 0} />
        ))}
      </div>
    </div>
  );
}

function StarReview({ filled }: { filled: number }) {
  return (
    <svg className="h-3 w-3 text-red-500" viewBox="0 0 24 24">
      <path
        d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.771 1.401 8.169L12 18.896l-7.335 3.853 1.401-8.169L.132 9.209l8.2-1.191z"
        fill={filled > 0 ? "#ff0000" : "none"}
        clipPath={`inset(0 ${100 - filled}% 0 0)`}
        style={{ transition: "clip-path 0.2s ease-in-out" }}
      />
      <path
        d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.771 1.401 8.169L12 18.896l-7.335 3.853 1.401-8.169L.132 9.209l8.2-1.191z"
        fill="none"
        stroke="#ff0000"
        strokeWidth="1"
      />
    </svg>
  );
}

function ReviewStarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const partialStar = Math.round((rating - fullStars) * 100);

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <StarReview key={i} filled={i < fullStars ? 100 : i === fullStars ? partialStar : 0} />
      ))}
    </div>
  );
}

const MediaPreview = ({
  media,
  selectedMediaId,
  onMediaClick,
}: {
  media: Review["media"];
  selectedMediaId: string | null;
  onMediaClick: (id: string) => void;
}) => {
  return (
    <div className="flex gap-2">
      {media.map((item, index) => (
        <div
          key={index}
          onClick={() => onMediaClick(item.id)}
          className={`relative cursor-pointer border ${selectedMediaId === item.id ? "border-orange-500" : "border-gray-300"}`}
          style={{ width: 80, height: 80 }}
        >
          {item.type === "photo" ? (
            <img src={item.url} alt={`media-${index}`} className="object-cover w-full h-full" />
          ) : (
            <div className="relative w-full h-full">
              <video src={item.url} className="object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 w-full h-6 bg-black opacity-50"></div>
              <div className="flex justify-between items-center absolute bottom-0 w-full px-1">
                <div>
                  <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 4C4.44772 4 4 4.44772 4 5V13C4 13.5523 4.44772 14 5 14H13C13.5523 14 14 13.5523 14 13V5C14 4.44772 13.5523 4 13 4H5ZM11.5 9C11.5 10.3807 10.3807 11.5 9 11.5C7.61929 11.5 6.5 10.3807 6.5 9C6.5 7.61929 7.61929 6.5 9 6.5C10.3807 6.5 11.5 7.61929 11.5 9ZM9 10.6667C9.92047 10.6667 10.6667 9.92047 10.6667 9C10.6667 8.07952 9.92047 7.33333 9 7.33333C8.07953 7.33333 7.33333 8.07952 7.33333 9C7.33333 9.92047 8.07953 10.6667 9 10.6667ZM18.1667 4.83333L14.8333 7.33306V10.6667L18.1667 13.1667V4.83333Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <filter id="filter0_d" x="0" y="0" width="22.1667" height="18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.26 0"></feColorMatrix>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div>
                  <span className="text-white text-xs">{item.duration || "0:00"}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Filter options array
const filters = [
  { label: "Semua", value: "all" },
  { label: "5 Bintang", value: "5" },
  { label: "4 Bintang", value: "4" },
  { label: "3 Bintang", value: "3" },
  { label: "2 Bintang", value: "2" },
  { label: "1 Bintang", value: "1" },
  { label: "Dengan Komentar", value: "with-comment" },
  { label: "Dengan Media", value: "with-media" },
];

// Reviews Component
const Reviews: React.FC<ReviewProps> = ({ averageRating, productId }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [selectedMediaId, setSelectedMediaId] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const limit = 5; // Show 5 reviews per page

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true); // Start loading
      try {
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/web/reviews/${productId}?page=${page}&limit=${limit}`;

        if (!isNaN(Number(activeFilter))) {
          url += `&rating=${activeFilter}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (data?.data && Array.isArray(data.data)) {
          setReviews(data.data); // Set paginated reviews
          setTotalPages(data.pagination.totalPages); // Set total pages for pagination
        } else {
          setReviews([]);
          setTotalPages(0);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews([]);
        setTotalPages(0);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchReviews();
  }, [productId, activeFilter, page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleMediaClick = (id: string) => {
    setSelectedMediaId(id === selectedMediaId ? null : id); // Toggle media view on click
  };

  return (
    <div className="bg-white p-4 mt-4">
      <div>
        <span>Penilaian Produk</span>
        <div className="p-4 bg-[#fffbf8] mt-2">
          <div className="grid grid-cols-8 gap-4 p-4">
            <div className="col-span-1">
              <StarRating rating={averageRating} />
            </div>
            <div className="col-span-6 flex flex-wrap gap-2">
              {filters.map((filter, index) => (
                <div
                  key={index}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`border px-3 py-1 bg-white cursor-pointer ${
                    activeFilter === filter.value ? "border-orange-500 text-orange-500" : "border-gray-300"
                  }`}
                >
                  {filter.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Show shimmer if loading */}
        {loading ? (
          <>
            {[...Array(5)].map((_, index) => (
              <Shimmer key={index} />
            ))}
          </>
        ) : reviews.length === 0 ? (
          <div className="flex justify-center items-center py-10">
            <div className="text-center">
              <p className="text-2xl font-extrabold text-gray-700">Belum Ada Ulasan</p>
              <p className="mt-2 text-lg text-gray-500">
                Jadilah <span className="text-[#ee4d2d] font-bold">Orang Pertama</span> yang memberikan ulasan untuk produk ini!
              </p>
              <button className="mt-4 px-6 py-2 bg-[#ee4d2d] text-white font-semibold rounded-full shadow-md hover:bg-[#d7441a] transition duration-300">
                Berikan Ulasan Sekarang
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Render the filtered reviews */}
            {reviews.map((review, idx) => (
              <div key={idx} className="border-b border-gray-200 p-6 mb-4">
                <div className="flex items-start">
                  <img src={review.photo} alt={review.name} className="w-10 h-10 rounded-full mr-4" />
                  <div>
                    <div className="flex items-center">
                      <span className="font-semibold text-sm">{review.name}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <ReviewStarRating rating={review.rating} />
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-custom-gray-rgb1">{review.created_at}</span>
                    </div>
                  </div>
                </div>

                {/* Review description */}
                <div className="mt-2 text-sm text-custom-gray-rgb2">
                  <p>{review.comment}</p>
                </div>

                {/* Media (images or videos) */}
                {review.media.length > 0 && (
                  <div className="mt-3">
                    <MediaPreview media={review.media} selectedMediaId={selectedMediaId} onMediaClick={handleMediaClick} />
                    {/* Main preview display */}
                    {selectedMediaId && review.media.some((item) => item.id === selectedMediaId) && (
                      <div className="mt-6 w-[375px] h-[500px]">
                        {review.media.find((item) => item.id === selectedMediaId)?.type === "photo" ? (
                          <img
                            src={review.media.find((item) => item.id === selectedMediaId)?.url}
                            alt="Selected Media"
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <video src={review.media.find((item) => item.id === selectedMediaId)?.url} controls className="object-cover w-full h-full" />
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Likes section */}
                <div className="mt-5 flex items-center text-custom-gray-rgb1">
                  <div className="text-sm text-custom-gray-rgb1">
                    <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" className="text-current">
                      <g stroke="none" strokeWidth="1" fillRule="evenodd">
                        <g id="Product-Ratings-Working" transform="translate(-245.000000, -855.000000)" fillRule="nonzero">
                          <g transform="translate(155.000000, 92.000000)">
                            <g transform="translate(40.000000, 184.000000)">
                              <g transform="translate(0.000000, 326.000000)">
                                <g transform="translate(50.000000, 253.000000)">
                                  <g>
                                    <path
                                      d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"
                                      fill="currentColor"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="ml-1">380</span>
                </div>
              </div>
            ))}

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              {/* Button to go to the previous page */}
              <button
                className={`px-2 py-1 ${page <= 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-600 cursor-pointer"}`}
                onClick={() => page > 1 && handlePageChange(page - 1)}
                disabled={page <= 1}
              >
                &lt;
              </button>

              {/* Page numbers */}
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 ${
                    page === i + 1 ? "bg-[#ee4d2d] text-white rounded-md" : "text-gray-600 hover:text-[#ee4d2d] cursor-pointer"
                  } border-none`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              {/* Ellipsis if there are more pages */}
              {totalPages > 5 && <span className="text-gray-600">...</span>}

              {/* Button to go to the next page */}
              <button
                className={`px-2 py-1 ${page >= totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-600 cursor-pointer"}`}
                onClick={() => page < totalPages && handlePageChange(page + 1)}
                disabled={page >= totalPages}
              >
                &gt;
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Reviews;
