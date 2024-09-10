import Link from "next/link";
import React from "react";
import { Product, Specification, ValueWithLink, Breadcrumb } from "@/app/types/products";

interface ProductInformationProps {
  product: Product;
  specifications: Specification[];
}

const ProductInformation: React.FC<ProductInformationProps> = ({ product, specifications }) => {
  return (
    <div className="bg-white p-4 mt-4">
      {/* Spesifikasi Produk */}
      <div>
        <div className="bg-gray-50">
          <div className="p-4">
            <span className="text-md">Spesifikasi Produk</span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-6 mt-4 p-4 gap-y-4">
          {/* Loop untuk menampilkan spesifikasi */}
          {specifications.map((spec, index) => {
            if (spec.label.toLowerCase() === "kategori" && (spec.value as ValueWithLink)?.breadcrumbs) {
              // Menampilkan breadcrumb jika labelnya adalah kategori dan ada breadcrumbs
              const breadcrumbs = (spec.value as ValueWithLink).breadcrumbs as Breadcrumb[];
              return (
                <React.Fragment key={index}>
                  <div className="col-span-2">
                    <span className="block text-custom-gray-rgb1 text-sm">Kategori</span>
                  </div>
                  <div className="col-span-10">
                    <div className="breadcrumb text-xs">
                      {breadcrumbs.map((breadcrumb, idx) => (
                        <React.Fragment key={idx}>
                          <Link href={breadcrumb.link} className="text-blue-500">
                            {breadcrumb.text}
                          </Link>
                          {idx < breadcrumbs.length - 1 && <span className="mx-1">{">"}</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </React.Fragment>
              );
            }

            // Menampilkan spesifikasi lain secara dinamis, termasuk pengecekan jika value adalah array
            return (
              <React.Fragment key={index}>
                <div className="col-span-2">
                  <span className="block text-custom-gray-rgb1 text-sm">{spec.label}</span>
                </div>
                <div className="col-span-10">
                  <span className="text-sm text-gray-500">
                    {Array.isArray(spec.value)
                      ? spec.value.join(", ") // Jika value adalah array, gabungkan dengan koma
                      : typeof spec.value === "string" || typeof spec.value === "number"
                      ? spec.value
                      : (spec.value as ValueWithLink).text}
                  </span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Deskripsi Produk */}
      <div>
        <div className="bg-gray-50">
          <div className="p-4">
            <span className="text-md">Deskripsi Produk</span>
          </div>
        </div>
        <div className="p-4 text-sm text-custom-gray-rgb2">
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
