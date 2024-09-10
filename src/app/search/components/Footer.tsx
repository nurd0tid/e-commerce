import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr className="border-t-4 border-red-600" />
      <footer aria-labelledby="footer-copyright" className="bg-gray-50 mb-auto">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-14">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
            {/* Layanan Pelanggan */}
            <div>
              <h3 className="text-sm font-medium mb-4">Layanan Pelanggan</h3>
              <ul className="text-xs font-normal text-neutral-600 space-y-2">
                <li>Bantuan</li>
                <li>Metode Pembayaran</li>
                <li>ShopeePay</li>
                <li>Koin Shopee</li>
                <li>Lacak Pesanan Pembeli</li>
                <li>Lacak Pengiriman Penjual</li>
                <li>Gratis Ongkir</li>
                <li>Pengembalian Barang & Dana</li>
                <li>Garansi Shopee</li>
                <li>Hubungi Kami</li>
              </ul>
            </div>

            {/* Jelajahi Shopee */}
            <div>
              <h3 className="text-sm font-medium mb-4">Jelajahi Shopee</h3>
              <ul className="text-xs font-normal text-neutral-600 space-y-2">
                <li>Tentang Kami</li>
                <li>Karir</li>
                <li>Kebijakan Shopee</li>
                <li>Kebijakan Privasi</li>
                <li>Blog</li>
                <li>Shopee Mall</li>
                <li>Seller Centre</li>
                <li>Flash Sale</li>
                <li>Kontak Media</li>
                <li>Shopee Affiliate</li>
              </ul>
            </div>

            {/* Pembayaran */}
            <div>
              <h3 className="text-sm font-medium mb-4">Pembayaran</h3>
              <div className="grid grid-cols-3 gap-2">
                <img src="https://down-id.img.susercontent.com/file/5589c755ab085d2fac3e33f4755c6a9e" alt="SeaBank" className="rounded-sm bg-white px-1 py-1" />
                <img src="https://down-id.img.susercontent.com/file/49656d7100598b911a1f247dec64fda4" alt="BCA" className="rounded-sm bg-white px-1 py-1" />
                <img src="https://down-id.img.susercontent.com/file/e7865f5fb066b8b5e73f9d5c36fc7154" alt="BNI" className="rounded-sm bg-white px-1 py-1" />
                <img src="https://down-id.img.susercontent.com/file/59185c096964e1892e9122ceaae2609d" alt="BRI" className="rounded-sm bg-white px-1 py-1" />
                <img src="https://down-id.img.susercontent.com/file/9a08d3abab3dd059fff945c72ca372d9" alt="BSI" className="rounded-sm bg-white px-1 py-1" />
                <img
                  src="https://down-id.img.susercontent.com/file/780c2be80e523384a7320b89f42008d5"
                  alt="CIMB Niaga"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img src="https://down-id.img.susercontent.com/file/0cf8caa250763eefc3d79bb1f8c08e73" alt="Mandiri" className="rounded-sm bg-white px-1 py-1" />
                <img src="https://down-id.img.susercontent.com/file/c8dce1e557f48316ef80dc9dbee40097" alt="Permata" className="rounded-sm bg-white px-1 py-1" />
                <img
                  src="https://down-id.img.susercontent.com/file/1ad101bcf0e90b74b5697db1511de529"
                  alt="Alfamart"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img
                  src="https://down-id.img.susercontent.com/file/6167379c7a6e786452f9f03295f517e6"
                  alt="Alfamidi"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img src="https://down-id.img.susercontent.com/file/fc6e7bb9f2e88e7d1a702eb6de938d79" alt="DAN DAN" className="rounded-sm bg-white px-1 py-1" />
                <img
                  src="https://down-id.img.susercontent.com/file/231b50853c37d3ed0933b8ba7479f0e4"
                  alt="Credit Card"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img src="https://down-id.img.susercontent.com/file/d68d15075519a4dfcfc8ffd9385d7bb9" alt="VISA" className="rounded-sm bg-white px-1 py-1" />
                <img
                  src="https://down-id.img.susercontent.com/file/ea38821fb0e2ec640bcd4f21000de105"
                  alt="Shopee Pay"
                  className="rounded-sm bg-white px-1 py-1"
                />
              </div>

              <h3 className="text-sm font-medium mt-8 mb-4">Pengiriman</h3>
              <div className="grid grid-cols-3 gap-2">
                <img
                  src="https://down-id.img.susercontent.com/file/id-50009109-0c5dd5687ff2ede525c04fbde2f7b7fd"
                  alt="SPX"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img
                  src="https://down-id.img.susercontent.com/file/982216a49044ce4636f861333bfdac5c"
                  alt="J&T Express"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img
                  src="https://down-id.img.susercontent.com/file/5ecc185311ec587945838b507140ee21"
                  alt="J&T Cargo"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img
                  src="https://down-id.img.susercontent.com/file/5c07836b22c5689d56cb217c88171785"
                  alt="JNE Express"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img
                  src="https://down-id.img.susercontent.com/file/fe439088405f5b71199c3f6117932462"
                  alt="Ninja Xpress"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img src="https://down-id.img.susercontent.com/file/9f4d96722647cf501edf21c958294568" alt="SiCepat" className="rounded-sm bg-white px-1 py-1" />
                <img
                  src="https://down-id.img.susercontent.com/file/c2abc2de79484198bfc3fc3efd4ea049"
                  alt="GrabExpress"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img src="https://down-id.img.susercontent.com/file/5653e7f0ca1361ddddb5b545ab675bc2" alt="Gosend" className="rounded-sm bg-white px-1 py-1" />
                <img
                  src="https://down-id.img.susercontent.com/file/ed038a4fcd786fb2d6ef7b70a7a9a1b1"
                  alt="Pos Indonesia"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img
                  src="https://down-id.img.susercontent.com/file/8810ac4e4cffb855d280503c6eb33ed4"
                  alt="IndoPaket"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img
                  src="https://down-id.img.susercontent.com/file/5c023bfb427d9546a8055f3b76d91560"
                  alt="Anteraja"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img
                  src="https://down-id.img.susercontent.com/file/5e350fcf94101432052945e2931fa621"
                  alt="Blue Bird Kirim"
                  className="rounded-sm bg-white px-1 py-1"
                />
                <img
                  src="https://down-id.img.susercontent.com/file/47d94f9fb90cc7e374549620be687494"
                  alt="Sentral Cargo"
                  className="rounded-sm bg-white px-1 py-1"
                />
              </div>
            </div>

            {/* Ikuti Kami & Keamanan */}
            <div>
              <h3 className="text-sm font-medium mb-4">Ikuti Kami</h3>
              <ul className="text-xs font-normal text-neutral-600 space-y-2">
                <li className="flex">
                  <FaFacebook className="mr-2" /> Facebook
                </li>
                <li className="flex">
                  <FaInstagram className="mr-2" /> Instagram
                </li>
                <li className="flex">
                  <FaTwitter className="mr-2" /> Twitter
                </li>
                <li className="flex">
                  <FaLinkedin className="mr-2" /> LinkedIn
                </li>
                <li className="flex">
                  <FaUniversity className="mr-2" /> Kampus Shopee
                </li>
              </ul>
              <h3 className="text-sm font-medium mt-8 mb-4">Keamanan</h3>
              <img src="https://down-id.img.susercontent.com/file/94b9cbbfd8a95136b1b0ab6ba81f4f3e" alt="Keamanan" className="rounded-sm bg-white px-1 py-1" />
            </div>

            {/* Download Aplikasi Shopee */}
            <div>
              <h3 className="text-sm font-medium mb-4">Download Aplikasi Shopee</h3>
              <div className="flex items-center">
                <img
                  src="https://down-id.img.susercontent.com/file/bed0af4663f887db16a7047185478dcf"
                  alt="QR Code"
                  className="w-24 h-24 rounded-sm bg-white px-1 py-1"
                />
                <div className="ml-4 space-y-2">
                  <img
                    src="https://down-id.img.susercontent.com/file/bbf28a2328ec8c7f57b9cc2069d693fd"
                    alt="App Store"
                    className="rounded-sm bg-white px-1 py-1"
                  />
                  <img
                    src="https://down-id.img.susercontent.com/file/1858a153798406c87945f15a38bf4874"
                    alt="Google Play"
                    className="rounded-sm bg-white px-1 py-1"
                  />
                  <img
                    src="https://down-id.img.susercontent.com/file/0e74339f5da500baaaa52785f175bc6d"
                    alt="App Gallery"
                    className="rounded-sm bg-white px-1 py-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-300 py-4 text-center lg:justify-between lg:flex items-center flex-wrap">
            <p className="text-xs text-neutral-600">© Tailwind 2024. Hak Cipta Dilindungi</p>
            <div className="mt-2 flex justify-center space-x-4 flex-wrap">
              <span className="text-xs text-neutral-600 hover:text-orange-600 cursor-pointer">Negara: Singapura</span>
              <span className="text-xs text-neutral-600 hover:text-orange-600 cursor-pointer">Indonesia</span>
              <span className="text-xs text-neutral-600 hover:text-orange-600 cursor-pointer">Thailand</span>
              <span className="text-xs text-neutral-600 hover:text-orange-600 cursor-pointer">Malaysia</span>
              <span className="text-xs text-neutral-600 hover:text-orange-600 cursor-pointer">Vietnam</span>
              <span className="text-xs text-neutral-600 hover:text-orange-600 cursor-pointer">Filipina</span>
              <span className="text-xs text-neutral-600 hover:text-orange-600 cursor-pointer">Brazil</span>
              <span className="text-xs text-neutral-600 hover:text-orange-600 cursor-pointer">Mexico</span>
              <span className="text-xs text-neutral-600 hover:text-orange-600 cursor-pointer">Colombia</span>
              <span className="text-xs text-neutral-600 hover:text-orange-600 cursor-pointer">Chile</span>
              <span className="text-xs text-neutral-600 hover:text-orange-600 cursor-pointer">Taiwan</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
