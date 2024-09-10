import React from "react";
import ProfileSidebar from "../../components/ProfileSidebar";

const Profile = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 p-4">
        <ProfileSidebar />
      </div>
      <div className="col-span-9 bg-white p-6">
        <div className="border-b pb-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Profil Saya</h2>
          <p className="text-sm text-gray-600">Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="mb-5 grid grid-cols-12 items-center">
              <label className="col-span-3 text-sm font-medium text-custom-gray-rgb">Username</label>
              <p className="col-span-9 text-gray-900">nurdotid112</p>
            </div>
            <div className="mb-5 grid grid-cols-12 items-center">
              <label className="col-span-3 text-sm font-medium text-custom-gray-rgb">Nama</label>
              <input
                type="text"
                className="col-span-9 block w-full border border-gray-300 rounded-sm py-2 px-4 text-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-0"
                defaultValue="Muhamad Nur"
              />
            </div>
            <div className="mb-5 grid grid-cols-12 items-center">
              <label className="col-span-3 text-sm font-medium text-custom-gray-rgb">Email</label>
              <p className="col-span-9 text-gray-900">
                mn************@gmail.com{" "}
                <a href="#" className="text-blue-500">
                  Ubah
                </a>
              </p>
            </div>
            <div className="mb-5 grid grid-cols-12 items-center">
              <label className="col-span-3 text-sm font-medium text-custom-gray-rgb">Nomor Telepon</label>
              <p className="col-span-9 text-gray-900">
                ********89{" "}
                <a href="#" className="text-blue-500">
                  Ubah
                </a>
              </p>
            </div>
            <div className="mb-5 grid grid-cols-12 items-center">
              <label className="col-span-3 text-sm font-medium text-custom-gray-rgb">Nama Toko</label>
              <input
                type="text"
                className="col-span-9 block w-full border border-gray-300 rounded-sm py-2 px-4 text-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-0"
                defaultValue="nurdotid112"
              />
            </div>
            <div className="mb-5 grid grid-cols-12 items-center">
              <label className="col-span-3 text-sm font-medium text-custom-gray-rgb">Jenis Kelamin</label>
              <div className="col-span-9 space-x-4">
                <label className="inline-flex items-center text-sm text-gray-900">
                  <input type="radio" name="gender" className="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-500 focus:ring-1 " checked />
                  <span className="ml-2">Laki-laki</span>
                </label>
                <label className="inline-flex items-center text-sm text-gray-900">
                  <input type="radio" name="gender" className="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-500 focus:ring-1" />
                  <span className="ml-2">Perempuan</span>
                </label>
                <label className="inline-flex items-center text-sm text-gray-900">
                  <input type="radio" name="gender" className="h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-500 focus:ring-1" />
                  <span className="ml-2">Lainnya</span>
                </label>
              </div>
            </div>
            <div className="mb-5 grid grid-cols-12 items-center">
              <label className="col-span-3 text-sm font-medium text-custom-gray-rgb">Tanggal Lahir</label>
              <div className="col-span-9">
                <p className="text-gray-900">**/10/20**</p>
                <p className="text-xs text-gray-500">Kamu sudah melakukan verifikasi KYC sehingga tidak dapat mengubah tanggal lahir.</p>
              </div>
            </div>
          </div>

          <div className="col-span-4 flex flex-col items-center border-l border-gray-200" style={{ height: "60%" }}>
            <img src="https://down-id.img.susercontent.com/file/88c6ffcf58a1388336e4033be65b9e0d_tn" alt="Profile" className="rounded-full w-32 h-32 mb-4" />
            <button className="px-4 py-2 border border-gray-300 text-sm text-gray-900 bg-transparent hover:bg-gray-100">Pilih Gambar</button>
            <p className="mt-2 text-xs text-gray-500 text-center">
              Ukuran gambar: maks. 1 MB
              <br /> Format gambar: .JPEG, .PNG
            </p>
          </div>
        </div>

        <div className="border-t pt-4 mt-6">
          <button className="bg-orange-500 text-white px-4 py-2 text-sm">Simpan</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
