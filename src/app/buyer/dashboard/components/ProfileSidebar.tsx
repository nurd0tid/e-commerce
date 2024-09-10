"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const ProfileSidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const isActive = (path: string) => pathname.includes(path);

  useEffect(() => {
    // Buka submenu jika sudah berada di salah satu halaman submenu
    if (isActive("/buyer/dashboard/account")) {
      setIsAccountMenuOpen(true);
    }
  }, [pathname]);

  const handleAccountMenuClick = () => {
    // Buka submenu jika tertutup, dan alihkan ke profil jika tidak dalam submenu
    if (!isAccountMenuOpen) {
      router.push("/buyer/dashboard/account/profile");
      setIsAccountMenuOpen(true);
    } else {
      setIsAccountMenuOpen(!isAccountMenuOpen);
    }
  };

  return (
    <div className="w-64 pt-2">
      <div className="flex items-center mb-6">
        <img src="https://down-id.img.susercontent.com/file/88c6ffcf58a1388336e4033be65b9e0d_tn" alt="User profile" className="rounded-full w-12 h-12 mr-3" />
        <div>
          <p className="font-semibold text-sm">nurdotid112</p>
          <Link href="/buyer/dashboard/account/profile" className="text-xs text-gray-500">
            Ubah Profil
          </Link>
        </div>
      </div>

      <nav className="space-y-4">
        {/* Akun Saya */}
        <div>
          <div
            onClick={handleAccountMenuClick}
            className={`flex items-center justify-between cursor-pointer text-gray-600 font-semibold hover:text-orange-500 text-sm`}
          >
            <div className="flex items-center">
              <img src="https://down-id.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4" className="w-5 h-5 mr-3" />
              <span>Akun Saya</span>
            </div>
          </div>
          <ul
            className={`pl-9 mt-2 space-y-3 text-gray-700 text-sm overflow-hidden ${
              isAccountMenuOpen ? "max-h-screen" : "max-h-0"
            } transition-all duration-300 ease-in-out`}
          >
            <li>
              <Link href="/buyer/dashboard/account/profile" className={isActive("/buyer/dashboard/account/profile") ? "text-orange-500" : ""}>
                Profil
              </Link>
            </li>
            <li>
              <Link href="/buyer/dashboard/account/bank" className={isActive("/buyer/dashboard/account/bank") ? "text-orange-500" : ""}>
                Bank & Kartu
              </Link>
            </li>
            <li>
              <Link href="/buyer/dashboard/account/address" className={isActive("/buyer/dashboard/account/address") ? "text-orange-500" : ""}>
                Alamat
              </Link>
            </li>
            <li>
              <Link href="/buyer/dashboard/account/change-password" className={isActive("/buyer/dashboard/account/change-password") ? "text-orange-500" : ""}>
                Ubah Password
              </Link>
            </li>
            <li>
              <Link href="/buyer/dashboard/account/notifications" className={isActive("/buyer/dashboard/account/notifications") ? "text-orange-500" : ""}>
                Pengaturan Notifikasi
              </Link>
            </li>
            <li>
              <Link href="/buyer/dashboard/account/privacy" className={isActive("/buyer/dashboard/account/privacy") ? "text-orange-500" : ""}>
                Pengaturan Privasi
              </Link>
            </li>
          </ul>
        </div>

        {/* Pesanan Saya */}
        <div>
          <Link
            href="/buyer/dashboard/purchase"
            className={`font-semibold flex items-center text-sm text-gray-600 hover:text-orange-500 ${
              isActive("/buyer/dashboard/purchase") ? "text-orange-500" : ""
            }`}
          >
            <img src="https://down-id.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078" className="w-5 h-5 mr-3 text-sm" /> Pesanan Saya
          </Link>
        </div>

        {/* Notifikasi */}
        <div>
          <Link
            href="/buyer/dashboard/notifications"
            className={`font-semibold flex items-center text-sm text-gray-600 hover:text-orange-500 ${
              isActive("/buyer/dashboard/notifications") ? "text-orange-500" : ""
            }`}
          >
            <img src="https://down-id.img.susercontent.com/file/e10a43b53ec8605f4829da5618e0717c" className="w-5 h-5 mr-3 text-sm" /> Notifikasi
          </Link>
          {isActive("/buyer/dashboard/notifications") && (
            <ul className="pl-9 mt-2 space-y-1 text-gray-700 text-sm">
              <li>
                <Link
                  href="/buyer/dashboard/notifications/order-status"
                  className={isActive("/buyer/dashboard/notifications/order-status") ? "text-orange-500" : ""}
                >
                  Status Pesanan
                </Link>
              </li>
              <li>
                <Link href="/buyer/dashboard/notifications/promo" className={isActive("/buyer/dashboard/notifications/promo") ? "text-orange-500" : ""}>
                  Promo Shopee
                </Link>
              </li>
              <li>
                <Link href="/buyer/dashboard/notifications/info" className={isActive("/buyer/dashboard/notifications/info") ? "text-orange-500" : ""}>
                  Info Shopee
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Voucher Saya */}
        <div>
          <Link
            href="/buyer/dashboard/vouchers"
            className={`font-semibold flex items-center text-sm text-gray-600 hover:text-orange-500 ${
              isActive("/buyer/dashboard/vouchers") ? "text-orange-500" : ""
            }`}
          >
            <img src="https://down-id.img.susercontent.com/file/84feaa363ce325071c0a66d3c9a88748" className="w-5 h-5 mr-3 text-sm" /> Voucher Saya
          </Link>
        </div>

        {/* Koin Shopee Saya */}
        <div>
          <Link
            href="/buyer/dashboard/coins"
            className={`font-semibold flex items-center text-sm text-gray-600 hover:text-orange-500 ${
              isActive("/buyer/dashboard/coins") ? "text-orange-500" : ""
            }`}
          >
            <img src="https://down-id.img.susercontent.com/file/a0ef4bd8e16e481b4253bd0eb563f784" className="w-5 h-5 mr-3 text-sm" /> Koin Shopee Saya
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
