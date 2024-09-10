"use client";
import { useSession, signOut } from "next-auth/react";
import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Import social media icons
import { BiNotification } from "react-icons/bi";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Header = () => {
  const { data: session, status } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const keyword = formData.get("keyword")?.toString().trim();

    if (keyword) {
      router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <header className="bg-orange-500">
      <nav className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 items-center">
            <Link href="#" className="hover:underline">
              Seller Centre
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Mulai Berjualan
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Download
            </Link>
            <span>|</span>
            <span className="flex items-center space-x-2">
              <span className="hover:underline">Ikuti kami di</span>
              <Link href="#" className="hover:underline">
                <FaFacebookF />
              </Link>
              <Link href="#" className="hover:underline">
                <FaInstagram />
              </Link>
              <Link href="#" className="hover:underline">
                <FaTwitter />
              </Link>
            </span>
          </div>

          <div className="flex space-x-4 relative">
            <div className="relative group inline-block">
              <Link href="#" className="flex items-center space-x-1 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
                <span>Notifikasi</span>
              </Link>

              {/* Pop-up container */}
              <div className="absolute hidden group-hover:block bg-white rounded-lg shadow-lg w-80 left-1/2 transform -translate-x-1/2 mt-2 z-10">
                <div className="relative bg-white rounded-t-lg p-6">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fc9c8de0048cfefe.png"
                      alt="Notification Icon"
                      className="h-16 mb-4"
                    />
                    <p className="text-gray-600">Log in untuk lihat notifikasi</p>
                  </div>
                  {/* Triangle indicator */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45"></div>
                </div>
                <div className="bg-gray-100 rounded-b-lg flex justify-between">
                  <button className="w-full py-2 text-gray-800 hover:text-orange-500">Daftar</button>
                  <button className="w-full py-2 text-gray-800 hover:text-orange-500">Login</button>
                </div>
              </div>
            </div>

            <Link href="#" className="flex items-center space-x-1 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
              <span>Bantuan</span>
            </Link>
            <div className="relative group inline-block">
              <Link href="#" className="flex items-center space-x-1 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <span>Bahasa Indonesia</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown */}
              <div className="absolute hidden group-hover:block bg-white rounded-lg shadow-lg w-40 mt-2 z-10">
                <ul className="py-2 text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="#" className="text-orange-600">
                      Bahasa Indonesia
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="#">English</Link>
                  </li>
                </ul>
                {/* Triangle indicator */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45"></div>
              </div>
            </div>
            {status !== "authenticated" ? (
              <>
                <Link href="/authentication/signup" className="hover:underline">
                  Daftar
                </Link>
                <span>|</span>
                <Link href="/authentication/signin" className="hover:underline">
                  Log In
                </Link>
              </>
            ) : (
              <>
                <div className="relative group inline-block">
                  <div className="flex items-center">
                    <img
                      src="https://down-id.img.susercontent.com/file/88c6ffcf58a1388336e4033be65b9e0d_tn"
                      alt="Profile"
                      className="rounded-full w-5 h-5 mr-2 "
                    />
                    {session.user?.name}
                  </div>

                  <div className="absolute hidden group-hover:block bg-white rounded-lg shadow-lg w-40 mt-2 z-10">
                    <ul className="py-2 text-sm text-gray-700">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="/buyer/dashboard/account/profile">Akun Saya</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link href="#">Pesanan Saya</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <button onClick={() => signOut()}>Log Out</button>
                      </li>
                    </ul>
                    {/* Triangle indicator */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45"></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img alt="Tailwind" src="https://tailwindui.com/img/logos/mark.svg?color=white" className="h-8 w-auto" />
              <span className="ml-2 text-2xl font-bold">Tailwind</span>
            </Link>

            <div className="flex flex-1 mx-10">
              <form onSubmit={handleSearch} className="flex w-full rounded-sm overflow-hidden">
                <input
                  type="text"
                  name="keyword"
                  placeholder="Daftar & Dapat Voucher Gratis"
                  defaultValue={searchParams.get("keyword") || ""}
                  className="w-full block rounded-none rounded-l-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gradient-to-r from-orange-400 to-red-400"
                >
                  <MagnifyingGlassIcon aria-hidden="true" className=" w-4 text-white" />
                </button>
              </form>
            </div>

            <div className="flex items-center">
              <div className="relative group">
                <ShoppingBagIcon aria-hidden="true" className="h-8 w-8 flex-shrink-0 text-white group-hover:text-white" />

                {/* Popup Content */}
                <div className="absolute hidden group-hover:block bg-white rounded-lg shadow-lg w-80 mt-2 z-10 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col items-center p-6">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/c44984f18d2d2211.png" alt="Cart Icon" className="h-20 mb-4" />
                    <p className="text-gray-600">Belum Ada Produk</p>
                  </div>

                  {/* Triangle indicator */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-2 text-xs text-gray-100">
            HP Gratis 0 Rupiah iPhone | Skintific | Jersey Bola Custom Nama | Sepatu Cowok Keren Buat Jalan Jalan | Isi Dana Bayar Nanti | Sunscreen
          </div>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <ShoppingBagIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
