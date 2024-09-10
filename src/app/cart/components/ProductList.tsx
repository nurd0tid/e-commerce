import React from "react";

// Define data types
interface ProductCart {
  id: string;
  product_name: string;
  variant: string;
  original_price: number;
  discounted_price: number | null;
  imgUrl: string;
  price?: number;
  quantity: number;
}

interface StoreCart {
  id: string;
  store_name: string;
  is_active: boolean;
  products: ProductCart[];
}

// Dummy data
export const stores: StoreCart[] = [
  {
    id: "8bfa7314-b13d-4c94-8fb6-e1b24b848b91",
    store_name: "Toyico",
    is_active: true,
    products: [
      {
        id: "a7e8ecf9-d84f-4765-a6d3-9bcbb455eae5",
        product_name:
          " Toyico 2.4Ghz Excavator Remote Control 14 Channel RC Beko Penggali Truk RC Crawler Kendaraan Teknik Excavator Mobil 2.4Ghz Remote RC Tracktor RC Trucks Truck / Dump Truck",
        variant: "9CH Truck Tractor",
        original_price: 298750,
        imgUrl: "https://placehold.co/80x80",
        discounted_price: 179250,
        quantity: 1,
      },
      {
        id: "9e4c504b-8164-4db4-bd3b-057fe3562f28",
        product_name: " [Toyico] Bak Mandi Bayi Lipat Foldable Silicone Bathtub Folding Baby Portable Bathtub Bayi Ver I",
        variant: "PINK BATHTUB + PILLOW",
        original_price: 248750,
        imgUrl: "https://placehold.co/80x80",
        discounted_price: 149250,
        quantity: 1,
      },
    ],
  },
  {
    id: "dfe48665-4427-41be-bc27-160c6b5f9ef9",
    store_name: "JoyTaroGadgetOfficial",
    is_active: true,
    products: [
      {
        id: "f0b34738-5202-43c8-9b2b-c9af96526f5a",
        product_name: "iPhone 11 Pro 64GB 256GB Fullset Lcd Original 100% Mulus No Recond No Refurb",
        variant: "256GB, grey",
        imgUrl: "https://placehold.co/80x80",
        original_price: 248750,
        discounted_price: null,
        quantity: 1,
      },
    ],
  },
  {
    id: "3a8e76fc-91b9-4aeb-a5e5-bd9aef4c6166",
    store_name: "InactiveStoreExample",
    is_active: false,
    products: [
      {
        id: "dbb77e79-70d4-47b7-8a6a-52b18e3792a5",
        product_name: "Sepatu Nke Sb dunnkk X Stusssy Super Import Premium Quality",
        variant: "46",
        original_price: 248750,
        imgUrl: "https://placehold.co/80x80",
        discounted_price: null,
        quantity: 1,
      },
    ],
  },
];

const ProductList = () => {
  const activeStores = stores.filter((store) => store.is_active);
  const inactiveStores = stores.filter((store) => !store.is_active);

  return (
    <div>
      <div className="flex items-center text-sm bg-white py-4 px-10">
        {/* Custom checkbox */}
        <label className="relative flex items-center mr-4">
          <input type="checkbox" className="opacity-0 absolute h-4 w-4" />
          <div className="bg-white border-2 border-[#dbdbdb] w-4 h-4 flex items-center justify-center">
            <svg className="hidden w-4 h-4 text-[#dbdbdb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </label>

        {/* Other content */}
        <div className="flex-grow">Produk</div>
        <div className="w-32 text-custom-gray-rgb1 text-right">Harga Satuan</div>
        <div className="w-32 text-custom-gray-rgb1 text-right">Kuantitas</div>
        <div className="w-32 text-custom-gray-rgb1 text-right">Total Harga</div>
        <div className="w-20 text-custom-gray-rgb1 text-right">Aksi</div>
      </div>

      {/* Active Store */}
      {activeStores.map((store, index) => (
        <div className="bg-white" key={index}>
          <div className="flex items-center text-sm bg-white py-4 px-10 mt-4 border-b">
            <label className="relative flex items-center mr-4">
              <input type="checkbox" className="opacity-0 absolute h-4 w-4" />
              <div className="bg-white border-2 border-[#dbdbdb] w-4 h-4 flex items-center justify-center">
                <svg className="hidden w-4 h-4 text-[#dbdbdb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </label>
            <div className="flex-grow flex items-center">
              <svg width="17" height="16" viewBox="0 0 17 16" className="mr-2">
                <path
                  d="M1.95 6.6c.156.804.7 1.867 1.357 1.867.654 0 1.43 0 1.43-.933h.932s0 .933 1.155.933c1.176 0 1.15-.933 1.15-.933h.984s-.027.933 1.148.933c1.157 0 1.15-.933 1.15-.933h.94s0 .933 1.43.933c1.368 0 1.356-1.867 1.356-1.867H1.95zm11.49-4.666H3.493L2.248 5.667h12.437L13.44 1.934zM2.853 14.066h11.22l-.01-4.782c-.148.02-.295.042-.465.042-.7 0-1.436-.324-1.866-.86-.376.53-.88.86-1.622.86-.667 0-1.255-.417-1.64-.86-.39.443-.976.86-1.643.86-.74 0-1.246-.33-1.623-.86-.43.536-1.195.86-1.895.86-.152 0-.297-.02-.436-.05l-.018 4.79zM14.996 12.2v.933L14.984 15H1.94l-.002-1.867V8.84C1.355 8.306 1.003 7.456 1 6.6L2.87 1h11.193l1.866 5.6c0 .943-.225 1.876-.934 2.39v3.21z"
                  strokeWidth=".3"
                  stroke="#333"
                  fill="#333"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="mr-2 font-medium">{store.store_name}</span>
              <svg viewBox="0 0 16 16" className="text-[#ee4d2d] w-4 h-4" fill="currentColor">
                <g fillRule="evenodd">
                  <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.18-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z"></path>
                </g>
              </svg>
            </div>
          </div>

          {/* Item Product */}
          <div className="py-4 px-4">
            <div className="border border-[#dbdbdb] rounded-sm p-4">
              {store.products.map((product, index) => (
                <div className="flex items-center justify-between text-sm border-b pb-4 pt-2 px-2 gap-10" key={index}>
                  <div className="flex items-center">
                    <label className="relative flex items-center mr-4">
                      <input type="checkbox" className="opacity-0 absolute h-4 w-4" />
                      <div className="bg-white border-2 border-[#dbdbdb] w-4 h-4 flex items-center justify-center">
                        <svg className="hidden w-4 h-4 text-[#dbdbdb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </label>
                    <img src={product.imgUrl} alt="Product Placeholder" className="w-16 h-16 object-cover mr-4" />
                    <div className="w-[200px] mr-10">
                      <p className="font-medium text-gray-700 line-clamp-2">{product.product_name}</p>
                    </div>
                    <div className="items-center text-gray-500 text-sm mt-1">
                      <span className="flex items-center">
                        Variasi:
                        <svg className="w-3 h-3 mx-1 text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.92l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-500">{product.variant}</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-10">
                    <div className="flex items-center">
                      {product.discounted_price ? (
                        <span className="line-through text-gray-500 block mr-2">Rp{product.original_price.toLocaleString("id-ID")}</span>
                      ) : (
                        <span className="line-through text-gray-500 block mr-2">Rp{product.original_price.toLocaleString("id-ID")}</span>
                      )}
                      {product.discounted_price ? (
                        <span className="block">Rp{product.discounted_price.toLocaleString("id-ID")}</span>
                      ) : (
                        <span className="block">Rp{product.original_price.toLocaleString("id-ID")}</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <button className="px-2 border border-gray-300">-</button>
                      <span className="px-4 border-t border-b border-gray-300">1</span>
                      <button className="px-2 border border-gray-300">+</button>
                    </div>
                    {product.discounted_price ? (
                      <div className="text-red-500 text-right">Rp{(product.discounted_price * product.quantity).toLocaleString("id-ID")}</div>
                    ) : (
                      <div className="text-red-500 text-right">Rp{(product.original_price * product.quantity).toLocaleString("id-ID")}</div>
                    )}

                    <div className="cursor-pointer">Hapus</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Non Active Store */}
      {inactiveStores.length > 0 &&
        inactiveStores.map((store, index) => (
          <div className="bg-white" key={index}>
            <div className="flex items-center text-sm bg-white py-4 px-10 mt-4 border-b">
              <span className="font-medium">Daftar produk dari penjual yang tidak aktif</span>
            </div>
            {store.products.map((product, index) => (
              <div className="py-4 px-4" key={index}>
                <div className="flex items-center justify-between text-sm pb-4 pt-2 px-6 gap-10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-[#a3a3a3] uppercase text-xs text-white">
                      <span className="py-2 px-2">Dihapus</span>
                    </div>
                    <img src={product.imgUrl} alt="Product Placeholder" className="w-16 h-16 object-cover" />
                    <div className="w-[200px] mr-10">
                      <p className="text-custom-gray line-clamp-2">{product.product_name}</p>
                    </div>
                    <div className="items-center text-custom-gray text-sm mt-1">
                      <span className="flex items-center">
                        Variasi:
                        <svg className="w-3 h-3 mx-1 text-custom-gray" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.92l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-custom-gray">{product.variant}</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-10">
                    <div className="flex items-center">
                      <span className="block text-custom-gray">Rp{product.original_price.toLocaleString("id-ID")}</span>
                    </div>
                    <span className="px-4 text-custom-gray">{product.quantity}</span>
                    <div className="text-custom-gray">Rp{product.original_price.toLocaleString("id-ID")}</div>
                    <div className="cursor-pointer">Hapus</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center text-sm bg-white py-4 px-10 mt-4 border-t cursor-pointer">
              <span className="text-custom-gray-rgb">Hapus produk dari Penjual tidak aktif</span>
            </div>
          </div>
        ))}

      {/* Checkout */}
      <div className="bg-white sticky bottom-0 sticky:shadow-[0_-4px_10px_rgba(0,0,0,0.1)] ">
        <div className="flex items-center justify-between text-sm bg-white py-4 px-10 mt-4 border-b">
          <div className="flex items-center gap-4">
            <label className="relative flex items-center mr-4">
              <input type="checkbox" className="opacity-0 absolute h-4 w-4" />
              <div className="bg-white border-2 border-[#dbdbdb] w-4 h-4 flex items-center justify-center">
                <svg className="hidden w-4 h-4 text-[#dbdbdb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </label>
            <span className="mr-2 cursor-pointer">Pilih Semua (3)</span>
            <span className="mr-2 cursor-pointer">Hapus</span>
            <span className="mr-2 cursor-pointer">Hapus produk dari Penjual tidak aktif</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="mr-2">Total (0 produk):</span>
            <span className="mr-2 text-orange-500 text-xl">Rp0</span>
            <button className="px-20 py-2 bg-[#f05d40] text-white">Checkout</button>
          </div>
        </div>
      </div>

      {/* No Product List */}
      {activeStores.length === 0 && inactiveStores.length === 0 && (
        <div className="flex flex-col items-center justify-center text-center">
          <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f4.png" className="w-32 h-32" />
          <div className="text-custom-gray-rgb mt-4">Keranjang belanja Anda kosong</div>
          <button className="px-20 py-2 mt-4 bg-[#f05d40] text-white">Belanja Sekarang</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
