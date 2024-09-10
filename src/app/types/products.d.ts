export interface StoreStatus {
  last_active: string;
  is_verified: boolean;
}

export interface StoreActions {
  chat_now: string;
  visit_store: string;
}

export interface StoreRatings {
  total_reviews: string;
  chat_response_rate: string;
  chat_response_time: string;
}

export interface StoreInfo {
  joined: string;
  followers: string;
}

export interface Store {
  slug: string;
  logo: string;
  name: string;
  status: StoreStatus;
  actions: StoreActions;
  ratings: StoreRatings;
  products: number;
  store_info: StoreInfo;
  id: string;
}

export interface ProductMedia {
  id: string;
  type: string;
  url: string;
  duration?: string;
}

export interface ProductReview {
  id: number;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  img: string;
  price: number;
  originalPrice: number;
  discount: number;
  sold: string;
  description: string;
  isStar: boolean;
  isCOD: boolean;
  isLowestPrice: boolean;
  hasVideo: boolean;
  hasCashbackAndFreeShipping: boolean;
  isLimitedStock: boolean;
  isAd: boolean;
  isOnlyCashBack: boolean;
  isOnlyFreeShipping: boolean;
  isNineNine: boolean;
  isProductLocal: boolean;
  isNewProduct: boolean;
  created_at: string;
  updated_at: string;
  category_ids: string[];
}

export interface Breadcrumb {
  text: string;
  link: string;
}

export interface ValueWithLink {
  text: string;
  link: string;
  breadcrumbs?: Breadcrumb[];
}

export interface Specification {
  label: string;
  value: ValueWithLink | string | number;
}

// Tambahkan 'images' dan 'product_reviews' ke tipe FullProductData
export interface FullProductData {
  id: string;
  store: Store;
  product: Product;
  spesifikasi_produk: Specification[];
  media: ProductMedia[]; // Tambahan untuk tipe gambar
  product_reviews: ProductReview[]; // Tambahan untuk tipe ulasan produk
}

export interface ProductsResponse {
  data: FullProductData[]; // Ubah menjadi FullProductData untuk menyertakan struktur lengkap
  total: number;
}
