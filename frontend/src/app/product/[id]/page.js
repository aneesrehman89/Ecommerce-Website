"use client";

import { useParams } from "next/navigation";
import ProductDetails from "@/components/productDetails";
import Footer from "@/components/Footer";
import { productDetailsData } from "@/data/productInfoMockData";

export default function ProductPage() {
  const params = useParams();  
  const productId = parseInt(params.id);
  
  const product = productDetailsData[productId];

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <ProductDetails product={product} />
      <Footer />
    </>
  );
}