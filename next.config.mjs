/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:slug", // URL yang dilihat pengguna, misalnya /jbl-go-2-portable-bluetooth-speaker
        destination: "/product/:slug", // Rute internal untuk produk
      },
    ];
  },
};

export default nextConfig;
