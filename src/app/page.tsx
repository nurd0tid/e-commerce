import Image from "next/image";
import Footer from "./components/layouts/frontend/layouts/Footer";
import Header from "./components/layouts/frontend/layouts/Header";
import HeroComponents from "./components/layouts/frontend/components/HeroComponents";
import CategoryComponent from "./components/layouts/frontend/components/CategoryComponent";
import FlashSaleComponent from "./components/layouts/frontend/components/FlashSaleComponent";
import BestSellingComponent from "./components/layouts/frontend/components/BestSellingComponent";
import RecomendationComponent from "./components/layouts/frontend/components/RecomendationComponent";
import PromotionBannerComponent from "./components/layouts/frontend/components/PromotionBannerComponent";

export default function Home() {
  return (
    <>
      <Header />
      <HeroComponents />
      <CategoryComponent />
      <FlashSaleComponent />
      <PromotionBannerComponent />
      <BestSellingComponent />
      <RecomendationComponent />
      <main></main>
      <Footer />
    </>
  );
}
