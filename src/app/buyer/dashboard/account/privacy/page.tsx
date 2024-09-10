import React from "react";
import ProfileSidebar from "../../components/ProfileSidebar";

const Privacy = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 p-4">
        <ProfileSidebar />
      </div>
      <div className="col-span-9 bg-white p-6">
        <div className="border-b pb-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Privacy Settings</h2>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-gray-800 text-sm">Minta Penghapusan Akun</p>
          <button className="bg-orange-500 text-white px-4 py-2 text-sm">Menghapus</button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
