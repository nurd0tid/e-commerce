import React from "react";
import SignInForm from "./components/SignInForm";

const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-24">
        {/* Bagian Kiri - Gambar dan Teks (Hanya tampil di layar besar) */}
        <div className="hidden lg:flex flex-1 flex-col items-center lg:items-start text-center lg:text-left lg:pr-8">
          <h1 className="text-3xl font-medium text-orange-600 mt-6 lg:mt-0">Jadilah Penjual Terbaik!</h1>
          <p className="text-gray-600 mt-4 mb-6 lg:mb-8 text-lg pr-80">Kelola toko Anda secara efisien di Shopee dengan Shopee Seller Centre</p>
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9019759f347a781f.png"
            alt="Shopee Seller Centre"
            className="max-w-full h-auto lg:w-3/4"
          />
        </div>

        {/* Bagian Kanan - Formulir Login (Selalu tampil) */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0 shadow-lg">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
