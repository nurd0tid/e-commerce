import React from "react";
import ProfileSidebar from "../../components/ProfileSidebar";

const Notifications = () => {
  const notifications = [
    {
      title: "Notifikasi Email",
      description: "Notifikasi tentang keamanan akun dan pengingat penting tidak dapat dinonaktifkan",
      options: [
        { label: "Status Pesanan", description: "Informasi terbaru dari status pesanan", enabled: true },
        { label: "Promosi", description: "Informasi eksklusif tentang promo dan penawaran yang akan datang", enabled: true },
        { label: "Survei Pembeli", description: "Terima survei untuk memberi penilaian dan saran untuk pelayanan yang lebih baik", enabled: true },
      ],
    },
    {
      title: "Notifikasi SMS",
      description: "Notifikasi tentang keamanan akun dan pengingat penting tidak dapat dinonaktifkan",
      options: [{ label: "Promosi", description: "Informasi eksklusif tentang promo dan penawaran yang akan datang", enabled: true }],
    },
    {
      title: "Notifikasi WhatsApp",
      description: "Notifikasi tentang keamanan akun dan pengingat penting tidak dapat dinonaktifkan",
      options: [
        { label: "Pesanan", description: "Informasi terbaru dari status pesanan", enabled: true },
        { label: "Promosi", description: "Informasi eksklusif tentang promo dan penawaran yang akan datang", enabled: true },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 p-4">
        <ProfileSidebar />
      </div>
      <div className="col-span-9 bg-white p-6">
        {notifications.map((notification, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">{notification.title}</h3>
            <p className="text-sm text-custom-gray-rgb mb-4">{notification.description}</p>
            {notification.options.map((option, idx) => (
              <div key={idx} className="flex justify-between items-center mb-3">
                <div className="pl-4">
                  <h4 className="text-base font-medium text-gray-800">{option.label}</h4>
                  <p className="text-sm text-custom-gray-rgb">{option.description}</p>
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={option.enabled} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:bg-green-500 relative after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              </div>
            ))}
            {index < notifications.length - 1 && <hr className="my-6" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
