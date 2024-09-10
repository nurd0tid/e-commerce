// app/[slug]/page.tsx
import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import ImageGallery from "./components/ImageGallery";
import dynamic from "next/dynamic";
import StoreInformation from "./components/StoreInformation";
import ProductInformation from "./components/ProductInformation";
import { FullProductData, ProductReview, ProductMedia } from "@/app/types/products";
import Shimmer from "./components/Shimmer";
import Reviews from "./components/Reviews";
import Suggestion from "./components/Suggestion";

const QuantitySelector = dynamic(() => import("./components/QuantitySelector"));

// Fungsi untuk mengambil data produk berdasarkan ID
async function getProductDataById(id: string): Promise<FullProductData | undefined> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/web/products/${id}`, { cache: "no-store" });

  if (!res.ok) {
    return undefined; // Jika data tidak ditemukan
  }

  const productData: { data: FullProductData } = await res.json();
  return productData.data;
}

type ProductPageProps = {
  params: { slug: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  // Memisahkan slug dan id
  const slug = params.slug;

  // Regex untuk menemukan UUID di akhir string
  const uuidRegex = /([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$/;

  // Mencari ID di slug
  const match = slug.match(uuidRegex);

  // Jika tidak ada ID, arahkan ke halaman 404
  if (!match) {
    return notFound();
  }

  const id = match[1]; // ID yang ditemukan

  const productDataPromise = getProductDataById(id);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Suspense to handle shimmer loading */}
      <Suspense fallback={<Shimmer />}>
        <ProductDetails productDataPromise={productDataPromise} productId={id} />
      </Suspense>
    </div>
  );
}

// Separate component for product details to handle the promise resolution
const ProductDetails: React.FC<{ productDataPromise: Promise<FullProductData | undefined>; productId: string }> = async ({ productDataPromise, productId }) => {
  const productData = await productDataPromise;

  if (!productData) {
    notFound(); // If data not found, show 404 page
  }

  const { product, store, product_reviews, media, spesifikasi_produk } = productData!;
  const totalReviews = product_reviews.length;
  const averageRating = product_reviews.reduce((acc, review: ProductReview) => acc + review.rating, 0) / totalReviews;

  function Star({ filled }: { filled: number }) {
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

  function StarRating({ rating }: { rating: number }) {
    const fullStars = Math.floor(rating);
    const partialStar = Math.round((rating - fullStars) * 100);

    return (
      <div className="flex items-center">
        <span className="text-red-500 font-normal text-md mr-1 underline">{rating.toFixed(1)}</span>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} filled={i < fullStars ? 100 : i === fullStars ? partialStar : 0} />
        ))}
      </div>
    );
  }

  const stokSpesifikasi = spesifikasi_produk.find((spec) => spec.label === "Stok");

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="breadcrumb text-xs mb-4">
        {spesifikasi_produk
          .filter((spec) => spec.label === "Kategori")
          .flatMap((spec) =>
            (spec.value as any).breadcrumbs.map((breadcrumb: any, index: number) => (
              <React.Fragment key={index}>
                <Link href={breadcrumb.link} className="text-blue-500">
                  {breadcrumb.text}
                </Link>
                {index < (spec.value as any).breadcrumbs.length - 1 && <span className="mx-1">{">"}</span>}
              </React.Fragment>
            ))
          )}
        <span className="mx-1">{">"}</span>
        <span className="text-gray-700">{product.name}</span>
      </div>

      <div className="p-4 bg-white">
        <div className="grid grid-cols-12  gap-4">
          <div className="col-span-5">
            <ImageGallery media={media} />
          </div>
          {/* Right side: Product Details */}
          <div className="col-span-7 px-2">
            <div className="text-lg font-medium text-gray-800 overflow-hidden text-ellipsis line-clamp-2 ">
              <img src="https://down-id.img.susercontent.com/file/id-11134258-7r98r-lyalscj1g30l0b" alt="Star+" className="h-4 float-left mr-2 mt-2" />
              <p>{product.name}</p>
            </div>
            <div className="flex items-center space-x-2 mt-1 justify-between">
              <div className="items-center flex space-x-2">
                <StarRating rating={averageRating} />
                <span className="border-l border-r px-2 border-gray-300">
                  <span className="underline font-normal text-md">{totalReviews.toLocaleString("id-ID")}</span>{" "}
                  <span className="text-sm text-custom-gray-rgb">Penilaian</span>
                </span>
                <span className="px-2">
                  <span className="underline font-normal text-md">{product.sold}</span> <span className="text-sm text-custom-gray-rgb">Terjual</span>
                </span>
              </div>
              <span className="text-xs text-custom-gray-rgb">Laporkan</span>
            </div>
            <div className="bg-gray-50">
              <div className="flex items-center mt-2 p-4">
                <span className="text-sm line-through text-gray-500 mr-2">Rp{product.originalPrice.toLocaleString("id-ID")}</span>
                <span className="text-xl font-medium text-red-500">Rp{product.price.toLocaleString("id-ID")}</span>
                <span className="ml-[15px] text-[0.75rem] bg-[#ee4d2d] text-white font-semibold leading-none rounded-[2px] px-[4px] py-[2px] uppercase whitespace-nowrap">
                  {product.discount}% OFF
                </span>
              </div>
            </div>

            {/* Etc */}
            <div className="grid grid-cols-8 gap-x-4 gap-y-4 mt-8 px-6">
              <div className="col-span-2">
                <span className="block text-custom-gray-rgb text-sm font-medium">Voucher Toko</span>
              </div>
              <div className="col-span-6">
                <div className="flex space-x-2">
                  <span className="inline-block px-2 py-0.5 bg-red-50 text-red-500 font-semibold text-xs rounded-md">Rp3RB OFF</span>
                  <span className="inline-block px-2 py-0.5 bg-red-50 text-red-500 font-semibold text-xs rounded-md">Rp1RB OFF</span>
                  <span className="inline-block px-2 py-0.5 bg-red-50 text-red-500 font-semibold text-xs rounded-md">Rp6RB OFF</span>
                </div>
              </div>

              <div className="col-span-2">
                <span className="block text-custom-gray-rgb text-sm font-medium">Return</span>
              </div>
              <div className="col-span-6">
                <div className="flex items-center space-x-1">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fc40ac00de8257314355.png"
                    alt="Return Icon"
                    className="h-4 w-4"
                  />
                  <span className="text-sm text-gray-700">Bebas Pengembalian</span>
                  <span className="text-sm text-gray-400">Berlaku untuk Produk Ini</span>
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/be6f27f93268c0f88ded.svg"
                    alt="Info Icon"
                    className="h-3 w-3 ml-1"
                  />
                </div>
              </div>

              <div className="col-span-2">
                <span className="block text-custom-gray-rgb text-sm font-medium">Paket Diskon</span>
              </div>
              <div className="col-span-6">
                <div className="inline-block px-2 py-0.5 border border-red-500 text-red-500 text-xs">Pilih 2, diskon 3%</div>
              </div>

              <div className="col-span-2">
                <span className="block text-custom-gray-rgb text-sm font-medium">Protection</span>
              </div>
              <div className="col-span-6">
                <div className="flex space-x-4">
                  <div>
                    <span className="text-sm text-gray-700 whitespace-nowrap">Proteksi Elektronik</span>
                    <span className="bg-[#ee4d2d] rounded-tl-md rounded-tr-md rounded-br-md text-white text-[10px] font-medium h-4 leading-4 px-1.5 ml-2">
                      New
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm leading-tight">
                    Melindungi elektronikmu dari kerusakan akibat cairan atau tidak disengaja hingga 12 bulan
                  </p>
                </div>
              </div>

              <div className="col-span-2">
                <span className="block text-custom-gray-rgb text-sm font-medium">Kuantitas</span>
              </div>
              <div className="col-span-6">
                <div className="flex items-center">
                  <QuantitySelector />
                  <span className="ml-4 text-sm text-custom-gray-rgb">
                    {" "}
                    {stokSpesifikasi
                      ? typeof stokSpesifikasi.value === "number" || typeof stokSpesifikasi.value === "string"
                        ? `tersisa ${stokSpesifikasi.value} buah`
                        : "tersisa Tidak diketahui"
                      : "tersisa Tidak diketahui"}
                  </span>
                </div>
              </div>

              <div className="col-span-8">
                <div className="flex space-x-4 mt-6 text-sm">
                  <button className="flex items-center justify-center px-6 py-2 border border-[#ee4d2d] text-[#ee4d2d] bg-[#fff0f0]">
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/0f3bf6e431b6694a9aac.svg"
                      alt="Cart Icon"
                      className="h-4 w-4 mr-2"
                    />
                    Masukkan Keranjang
                  </button>
                  <button className="px-6 py-2 bg-[#ee4d2d] text-white">Minta Penawaran</button>
                </div>
              </div>
              <div className="col-span-8">
                <div className="mt-4">
                  <hr className="border-t border-gray-200" />
                  <div className="flex items-center space-x-2 mt-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 8.77733C0 6.26602 1.86798 4.5 4.51175 4.5C5.87937 4.5 7.00205 5.01088 7.52344 5.92858L5.78791 7.28673C5.48201 6.75588 5.01213 6.44998 4.35828 6.44998C3.22508 6.44998 2.42933 7.34875 2.42933 8.62386C2.42933 9.46062 3.01169 10.022 3.8989 10.022C4.46025 10.022 5.00161 9.78754 5.49147 9.19466L6.91059 10.5518C6.04335 11.6135 4.98164 11.9709 3.66449 11.9709C1.44961 11.9709 0 10.6748 0 8.77628V8.77733Z"
                        fill="#EE4D2D"
                      ></path>
                      <path
                        d="M7.44141 8.77733C7.44141 6.2555 9.3199 4.5 11.9426 4.5C14.168 4.5 15.5661 5.81715 15.5661 7.6946C15.5661 10.2164 13.6876 11.9719 11.0649 11.9719C8.8395 11.9719 7.44141 10.6548 7.44141 8.77733ZM13.1379 7.83861C13.1379 7.01132 12.6175 6.44998 11.7398 6.44998C10.5561 6.44998 9.87178 7.46018 9.87178 8.63437C9.87178 9.46167 10.3921 10.023 11.2699 10.023C12.4535 10.023 13.1379 9.0128 13.1379 7.83861Z"
                        fill="#EE4D2D"
                      ></path>
                      <path
                        d="M17.1297 4.66309H20.3558C22.6117 4.66309 24.0003 5.81625 24.0003 7.69475C24.0003 10.2166 22.1323 11.8081 19.5296 11.8081H15.7021L17.1307 4.66309H17.1297ZM19.6105 9.93065C20.8867 9.93065 21.57 9.0119 21.57 7.83771C21.57 7.01042 21.0496 6.54158 20.0793 6.54158H19.1606L18.4868 9.93065H19.6095H19.6105Z"
                        fill="#EE4D2D"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.6177 13.921C22.6177 13.9209 22.6177 13.9209 22.6177 13.9209H1.18988L0 19.0638H1.19235C1.19235 19.0638 1.19235 19.0638 1.19235 19.0638H22.8102L24.0001 13.921H22.6177Z"
                        fill="#EE4D2D"
                      ></path>
                      <path
                        d="M3.53148 17.929C3.33087 17.929 3.15041 17.8915 2.99193 17.8173C2.83346 17.7431 2.70246 17.6414 2.6017 17.5113C2.50002 17.3822 2.4304 17.2292 2.39284 17.0542C2.35528 16.8793 2.3562 16.6933 2.39467 16.4945C2.43406 16.2902 2.50735 16.1015 2.61452 15.9266C2.7217 15.7516 2.85178 15.5996 3.00475 15.4695C3.15773 15.3403 3.32995 15.2377 3.52049 15.1635C3.71102 15.0893 3.90889 15.0518 4.11225 15.0518C4.35683 15.0518 4.56019 15.0948 4.7205 15.1809C4.88172 15.267 5.02188 15.3715 5.14005 15.4933L4.65455 16.0356C4.56935 15.966 4.475 15.9064 4.37241 15.8588C4.26981 15.8112 4.13698 15.7864 3.97301 15.7864C3.87957 15.7864 3.78797 15.802 3.69728 15.8341C3.60659 15.8661 3.52232 15.9119 3.44537 15.9715C3.36842 16.031 3.30155 16.1043 3.24567 16.1904C3.1898 16.2765 3.15041 16.3745 3.12934 16.4854C3.10918 16.587 3.1101 16.6823 3.13117 16.7693C3.15224 16.8564 3.18796 16.9315 3.24018 16.9947C3.29239 17.057 3.3556 17.1064 3.4298 17.1412C3.50491 17.1761 3.58553 17.1935 3.67347 17.1935C3.7724 17.1935 3.86217 17.1843 3.9437 17.1651C4.02431 17.1458 4.09942 17.1229 4.16721 17.0954C4.235 17.068 4.29729 17.0359 4.35408 16.9993C4.41088 16.9626 4.46401 16.9269 4.51439 16.8921L4.78554 17.4298C4.71226 17.4912 4.63164 17.5516 4.54279 17.6112C4.45393 17.6707 4.35775 17.7238 4.25424 17.7706C4.15072 17.8173 4.03805 17.8548 3.91713 17.8842C3.79622 17.9135 3.66797 17.9281 3.53056 17.9281L3.53148 17.929Z"
                        fill="white"
                      ></path>
                      <path
                        d="M7.5302 15.0972L7.39738 15.7787H6.19095L6.12042 16.1415L7.29936 16.146L7.16654 16.8276H5.98667L5.91522 17.1949H7.12165L6.98608 17.8938H5.0459L5.58911 15.0972H7.52929H7.5302Z"
                        fill="white"
                      ></path>
                      <path
                        d="M7.96698 15.0972H8.70073L8.50195 16.1195L9.52242 15.0972H10.4137L9.1276 16.3384L9.91815 17.8938H9.06623L8.57248 16.8578L8.30958 17.107L8.1566 17.8938H7.42285L7.96606 15.0972H7.96698Z"
                        fill="white"
                      ></path>
                      <path
                        d="M11.8742 15.0972H12.608C12.739 15.0972 12.8626 15.1027 12.978 15.1146C13.0935 15.1265 13.2006 15.1494 13.2986 15.1842C13.3967 15.219 13.4874 15.2676 13.5698 15.3308C13.6522 15.393 13.7255 15.4755 13.7906 15.5781C13.862 15.6917 13.9078 15.8291 13.9289 15.9885C13.95 16.1488 13.9435 16.3173 13.9087 16.495C13.8767 16.6608 13.8217 16.8212 13.7457 16.976C13.6687 17.1308 13.5652 17.2728 13.4351 17.4047C13.3371 17.5036 13.2354 17.5851 13.1301 17.6493C13.0248 17.7134 12.9148 17.7638 12.8012 17.8004C12.6877 17.837 12.5704 17.8618 12.4476 17.8746C12.3258 17.8874 12.1976 17.8938 12.0638 17.8938H11.3301L11.8733 15.0972H11.8742ZM12.466 15.8309L12.2076 17.1592H12.3341C12.5704 17.1592 12.7573 17.1079 12.8974 17.0044C13.0367 16.9009 13.1301 16.7314 13.1759 16.495C13.2217 16.2587 13.1961 16.0892 13.098 15.9857C13 15.8822 12.8333 15.8309 12.597 15.8309H12.466Z"
                        fill="white"
                      ></path>
                      <path
                        d="M15.1521 17.929C14.9945 17.929 14.8516 17.9043 14.7234 17.8548C14.5942 17.8054 14.4861 17.7339 14.3982 17.6405C14.3103 17.547 14.2443 17.4344 14.2022 17.3015C14.1591 17.1687 14.1472 17.0185 14.1655 16.849C14.1692 16.8142 14.1756 16.7693 14.1829 16.7134C14.1912 16.6585 14.2003 16.5998 14.2104 16.5385C14.2205 16.4771 14.2324 16.4157 14.2443 16.3525C14.2562 16.2902 14.2672 16.2353 14.2764 16.1885L14.4889 15.0957H15.2236L15.011 16.1885C14.9927 16.2847 14.9735 16.3791 14.9561 16.4725C14.9378 16.5659 14.9277 16.6356 14.924 16.6823C14.9084 16.8371 14.9295 16.9617 14.9872 17.056C15.0449 17.1504 15.1475 17.198 15.2959 17.198C15.4443 17.198 15.568 17.1504 15.6578 17.056C15.7475 16.9617 15.8126 16.8398 15.8529 16.6914C15.8684 16.642 15.8849 16.5696 15.9033 16.4753C15.9216 16.3809 15.9399 16.2847 15.9591 16.1885L16.1717 15.0957H16.9063L16.6938 16.1885C16.6846 16.2353 16.6736 16.2884 16.6608 16.3479C16.648 16.4075 16.6343 16.467 16.6214 16.5275C16.6086 16.587 16.5949 16.6438 16.582 16.6979C16.5683 16.7519 16.5564 16.7995 16.5454 16.8398C16.4987 17.0056 16.4309 17.1559 16.342 17.2896C16.2532 17.4234 16.1478 17.5379 16.026 17.6331C15.9042 17.7275 15.7686 17.8008 15.6211 17.8521C15.4727 17.9034 15.317 17.9281 15.1539 17.9281L15.1521 17.929Z"
                        fill="white"
                      ></path>
                      <path d="M16.8408 17.8938L17.384 15.0972H18.1709L17.7678 17.1683H18.5547L18.693 17.8938H16.8398H16.8408Z" fill="white"></path>
                      <path
                        d="M19.8582 17.929C19.7006 17.929 19.5577 17.9043 19.4295 17.8548C19.3003 17.8054 19.1922 17.7339 19.1043 17.6405C19.0163 17.547 18.9504 17.4344 18.9082 17.3015C18.8652 17.1687 18.8533 17.0185 18.8716 16.849C18.8752 16.8142 18.8817 16.7693 18.889 16.7134C18.8972 16.6585 18.9064 16.5998 18.9165 16.5385C18.9265 16.4771 18.9385 16.4157 18.9504 16.3525C18.9623 16.2902 18.9733 16.2353 18.9824 16.1885L19.1949 15.0957H19.9296L19.7171 16.1885C19.6988 16.2847 19.6795 16.3791 19.6621 16.4725C19.6438 16.5659 19.6337 16.6356 19.6301 16.6823C19.6145 16.8371 19.6356 16.9617 19.6933 17.056C19.751 17.1504 19.8536 17.198 20.002 17.198C20.1504 17.198 20.274 17.1504 20.3638 17.056C20.4536 16.9617 20.5186 16.8398 20.5589 16.6914C20.5745 16.642 20.591 16.5696 20.6093 16.4753C20.6276 16.3809 20.646 16.2847 20.6652 16.1885L20.8777 15.0957H21.6124L21.3999 16.1885C21.3907 16.2353 21.3797 16.2884 21.3669 16.3479C21.3541 16.4075 21.3403 16.467 21.3275 16.5275C21.3147 16.587 21.3009 16.6438 21.2881 16.6979C21.2744 16.7519 21.2624 16.7995 21.2515 16.8398C21.2047 17.0056 21.137 17.1559 21.0481 17.2896C20.9592 17.4234 20.8539 17.5379 20.7321 17.6331C20.6102 17.7275 20.4747 17.8008 20.3272 17.8521C20.1788 17.9034 20.023 17.9281 19.86 17.9281L19.8582 17.929Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-700">COD - Cek Dulu</span>
                    <span className="text-sm text-gray-400">Buka dulu, baru bayar!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StoreInformation store={store} />
      <ProductInformation product={product} specifications={spesifikasi_produk} />
      <Reviews averageRating={averageRating} productId={productId} />
      <Suggestion categoriesIds={product.category_ids} />
    </div>
  );
};
