import React from "react";
import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
  return (
    <div style={{ backgroundColor: "rgb(253, 250, 247)" }}>
      {/* Section Pertama: Background Color dengan Form */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:py-24">
        <div className="relative z-10 lg:flex mx-auto max-w-7xl items-center justify-between">
          <div className="lg:flex-1 lg:mr-12">
            <h1 className="text-orange-600 text-2xl font-medium">Shopee</h1>
            <h1 className="text-4xl font-bold text-orange-600 pr-48">Buat Toko di Shopee hanya butuh 1 menit!</h1>
            <ul className=" mt-4 mb-6 text-base space-y-6 text-orange-500">
              <li className="flex items-center">
                <span
                  style={{
                    display: "inline-block",
                    width: "36px",
                    height: "28px",
                    backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/deac6dcbd9a7ccb0.png')",
                    backgroundPosition: "48.6792% 1.63666%",
                    backgroundSize: "3780.56% 948.611%",
                    marginRight: "8px",
                  }}
                ></span>
                Situs belanja online terpopuler di Indonesia
              </li>
              <li className="flex items-center">
                <span
                  style={{
                    display: "inline-block",
                    width: "36px",
                    height: "28px",
                    backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/deac6dcbd9a7ccb0.png')",
                    backgroundPosition: "36.2264% 1.63666%", // Sesuaikan posisi
                    backgroundSize: "3780.56% 948.611%",
                    marginRight: "8px",
                  }}
                ></span>
                Jangkauan pembeli dari seluruh Indonesia dan negara lainnya
              </li>
              <li className="flex items-center">
                <span
                  style={{
                    display: "inline-block",
                    width: "36px",
                    height: "28px",
                    backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/deac6dcbd9a7ccb0.png')",
                    backgroundPosition: "16.1509% 1.5949%", // Sesuaikan posisi
                    backgroundSize: "3780.56% 1219.64%",
                    marginRight: "8px",
                  }}
                ></span>
                Mulai berjualan di Shopee sekarang, GRATIS!
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 shadow-lg rounded-lg bg-white p-6">
            <SignUpForm />
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-bottom bg-contain"
          style={{
            backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/020bba13463e5663.png')",
            height: "300px",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      {/* Section Kedua: Keuntungan Berjualan */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-300 mb-4 text-center">KEUNTUNGAN BERJUALAN DI SHOPEE</h2>
          <div className="flex flex-wrap justify-around text-center">
            <div className="w-full md:w-1/3 p-8">
              <span
                style={{
                  display: "inline-block",
                  width: "83px",
                  height: "72px",
                  backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/deac6dcbd9a7ccb0.png')",
                  backgroundPosition: "97.9167% 23.7316%", // Sesuaikan posisi
                  backgroundSize: "3319.51% 948.611%",
                  marginBottom: "8px",
                }}
              ></span>
              <h3 className="text-xl font-medium">Bebas Biaya Komisi</h3>
              <p className="text-sm text-gray-500 font-normal">Mulai Berjualan di Shopee tanpa dikenakan biaya apapun!</p>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <span
                style={{
                  display: "inline-block",
                  width: "83px",
                  height: "72px",
                  backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/deac6dcbd9a7ccb0.png')",
                  backgroundPosition: "37.0455% 46.8085%", // Sesuaikan posisi
                  backgroundSize: "3319.51% 948.611%",
                  marginBottom: "8px",
                }}
              ></span>
              <h3 className="text-xl font-medium">Akses Fitur Promosi Gratis</h3>
              <p className="text-sm text-gray-500 font-normal">
                Tingkatkan kunjungan dan penjualan toko dengan diskon, flash sale, livestream, dan masih banyak lagi.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <span
                style={{
                  display: "inline-block",
                  width: "83px",
                  height: "72px",
                  backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/deac6dcbd9a7ccb0.png')",
                  backgroundPosition: "36.6667% 16.6939%", // Sesuaikan posisi
                  backgroundSize: "3319.51% 948.611%",
                  marginBottom: "8px",
                }}
              ></span>
              <h3 className="text-xl font-medium">Pengiriman Anti Repot</h3>
              <p className="text-sm text-gray-500 font-normal">Atur, lacak, dan kirim pesanan dengan mudah melalui Jasa Kirim yang Didukung Shopee</p>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <span
                style={{
                  display: "inline-block",
                  width: "83px",
                  height: "72px",
                  backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/deac6dcbd9a7ccb0.png')",
                  backgroundPosition: "38.3333% 31.7512%", // Sesuaikan posisi
                  backgroundSize: "3319.51% 948.611%",
                  marginBottom: "8px",
                }}
              ></span>
              <h3 className="text-xl font-medium">Program Promosi Menarik</h3>
              <p className="text-sm text-gray-500 font-normal">Kembangkan tokomu dengan mengikuti beragam program promosi di Shopee</p>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <span
                style={{
                  display: "inline-block",
                  width: "83px",
                  height: "72px",
                  backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/deac6dcbd9a7ccb0.png')",
                  backgroundPosition: "32.5% 1.63666%", // Sesuaikan posisi
                  backgroundSize: "3319.51% 948.611%",
                  marginBottom: "8px",
                }}
              ></span>
              <h3 className="text-xl font-medium">Dukungan Penuh untuk Bisnismu</h3>
              <p className="text-sm text-gray-500 font-normal">
                Akses berbagai fitur untuk membantumu mengelola pesanan, memantau performa toko, dan mengembangkan penjualan tokomu.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-8">
              <span
                style={{
                  display: "inline-block",
                  width: "83px",
                  height: "72px",
                  backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/deac6dcbd9a7ccb0.png')",
                  backgroundPosition: "45.2273% 50.9002%", // Sesuaikan posisi
                  backgroundSize: "3319.51% 948.611%",
                  marginBottom: "8px",
                }}
              ></span>
              <h3 className="text-xl font-medium">Komunitas Penjual yang Erat</h3>
              <p className="text-sm text-gray-500 font-normal">
                Berkoneksi dan berkembang bersama Penjual Shopee lainnya. Dapatkan akses ke training, webinar, tips dan informasi, serta materi edukasi untuk
                terus megembangkan tokomu.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Ketiga: Langkah Mudah */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center">Langkah Mudah untuk Mulai Berjualan</h2>
          <div className="flex flex-wrap justify-around mt-8 text-center">
            <div className="w-full md:w-1/3 p-4">
              <h3 className="text-7xl font-normal">01</h3>
              <h2 className="font-bold mb-4">Buat akun Shopee</h2>
              <p className="text-sm">Klik Daftar melalui halaman Saya di Aplikasi Shopee. Lalu, daftar menggunakan no. handphone-mu.</p>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <h3 className="text-7xl font-normal">02</h3>
              <h2 className="font-bold mb-4">Tambahkan Alamat Toko dan Atur Metode Pengiriman</h2>
              <p className="text-sm">
                Tambahkan alamat melalui halaman Alamat Saya di Pengaturan Akun. Lalu aktifkan jasa kirim pada Pengiriman Saya di halaman Toko Saya.
              </p>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <h3 className="text-7xl font-normal">03</h3>
              <h2 className="font-bold mb-4">Tambahkan Produkmu</h2>
              <p className="text-sm">Pilih Mulai Berjualan, lalu klik Tambahkan Produk. Kemudian, isi informasi produk dan upload!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Keempat: Bantuan Seputar Penjualan */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-medium text-gray-300 mb-4 text-center">BANTUAN SEPUTAR PENJUALAN</h2>
          <div className="flex flex-wrap justify-around text-center">
            <div className="w-full md:w-1/3 p-4">
              <span
                style={{
                  display: "inline-block",
                  width: "60px",
                  height: "60px",
                  backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/deac6dcbd9a7ccb0.png')",
                  backgroundPosition: "0.375657% 1.60772%", // Sesuaikan posisi
                  backgroundSize: "4536.67% 1119.67%",
                  marginBottom: "8px",
                }}
              ></span>
              <p className="font-bold">Pusat Edukasi Penjual</p>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <span
                style={{
                  display: "inline-block",
                  width: "60px",
                  height: "60px",
                  backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/deac6dcbd9a7ccb0.png')",
                  backgroundPosition: "41.8482% 40.1929%", // Sesuaikan posisi
                  backgroundSize: "4536.67% 1119.67%",
                  marginBottom: "8px",
                }}
              ></span>
              <p className="font-bold">Tips dan Trik dari Komunitas Penjual</p>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <span
                style={{
                  display: "inline-block",
                  width: "60px",
                  height: "60px",
                  backgroundImage: "url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/deac6dcbd9a7ccb0.png')",
                  backgroundPosition: "44.8535% 24.077%", // Sesuaikan posisi
                  backgroundSize: "4536.67% 1119.67%",
                  marginBottom: "8px",
                }}
              ></span>
              <p className="font-bold">Customer Service Shopee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
