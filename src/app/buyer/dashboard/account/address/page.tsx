import React from "react";
import ProfileSidebar from "../../components/ProfileSidebar";

const addresses = [
  {
    name: "John Doe",
    phone: "(+62) 812 3456 7890",
    address: "Jl. Joglo Raya No.33A RT.9/RW.3, Patokan Toko Alumunium Alexindo , samping ada GG masuk , KEMBANGAN, KOTA JAKARTA BARAT, DKI JAKARTA, ID, 11640",
    isPrimary: true,
  },
  {
    name: "Jane Smith",
    phone: "(+62) 811 2233 4455",
    address: "Pjmi Bintaro, Jalan Sejahtera, Pondok Aren (Blok a19 no 11) PONDOK AREN, KOTA TANGERANG SELATAN, BANTEN, ID, 15222",
    isPrimary: false,
  },
  {
    name: "Alice Brown",
    phone: "(+62) 877 6655 8899",
    address: "Sehati Advertising, Jalan Kalibaru Timur Iv No. 1C, Rt.7/Rw.7, Bungur, Senen SENEN, KOTA JAKARTA PUSAT, DKI JAKARTA, ID, 10460",
    isPrimary: false,
  },
];

const Address = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 p-4">
        <ProfileSidebar />
      </div>
      <div className="col-span-9 bg-white p-6">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-xl font-medium text-gray-800">Alamat Saya</h2>
          <button className="bg-orange-500 text-white px-4 py-2 text-sm flex items-center">
            <span className="mr-2">+</span> Tambah Alamat Baru
          </button>
        </div>

        <h3 className="text-lg font-normal text-gray-800 mb-8">Alamat</h3>

        {addresses.map((address, index) => (
          <div key={index} className="mb-4 pb-4 border-b last:border-b-0 last:mb-0 last:pb-0 flex justify-between items-start">
            <div className="flex-grow max-w-xl">
              {" "}
              {/* Set the max width of the address block */}
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold text-gray-800">{address.name}</p>
                <span className="border-l h-5 border-gray-300"></span> {/* Divider vertikal */}
                <p className="text-sm text-custom-gray-rgb">{address.phone}</p>
              </div>
              <p className="text-sm text-custom-gray-rgb mt-2">{address.address}</p>
              {address.isPrimary && (
                <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold mt-2 px-2 py-1 border border-red-600 rounded">Utama</span>
              )}
            </div>
            <div className="text-right flex flex-col items-end space-y-2">
              <div className="flex space-x-4">
                <a href="#" className="text-sm text-blue-500">
                  Ubah
                </a>
                {!address.isPrimary && (
                  <a href="#" className="text-sm text-blue-500">
                    Hapus
                  </a>
                )}
              </div>
              <button
                className={`px-4 py-2 text-sm ${
                  address.isPrimary ? "bg-white text-gray-500 cursor-not-allowed border border-gray-30" : "bg-white text-gray-700 border border-gray-300"
                } rounded-sm`}
                disabled={address.isPrimary}
              >
                Atur sebagai utama
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
