import { PromotionBanner } from "@/app/types/promotionBanner";

export const fetchPromotionBanner = async (): Promise<PromotionBanner | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/web/promotionbanner`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch promotion banner");
    }

    const data = await res.json();
    return data.data[0] || null;
  } catch (error) {
    console.error("Error fetching promotion banner:", error);
    return null;
  }
};

const PromotionBannerComponent = async () => {
  const banner = await fetchPromotionBanner();

  return (
    <div className="bg-gray-100 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white relative">
          <div className="px-2 py-2">
            {banner ? (
              <img src={banner.img} alt="Banner Promotion" className="w-full h-auto" />
            ) : (
              <div className="animate-pulse">
                <div className="bg-gray-300 h-28 w-full"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBannerComponent;
