export interface FlashSaleItem {
  id: string;
  name: string;
  img: string;
  price: string;
  discount: string;
  sold: number;
  stock: number;
  isMall?: boolean;
  isStar?: boolean;
  freeShipping?: boolean;
  created_at: string;
  updated_at: string;
}
