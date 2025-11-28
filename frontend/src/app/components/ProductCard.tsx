"use client";

import Link from "next/link";
import StarIcon from "./icons/StarIcon";
import type { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group relative block">
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-3 text-center">
        <h3 className="text-sm text-gray-700 mb-2">{product.title}</h3>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-sm text-gray-400 line-through">
            Rs. {product.originalPrice.toLocaleString()}
          </span>
          <span className="text-sm font-bold text-gray-900">
            Rs. {product.salePrice.toLocaleString()}
          </span>
        </div>
        {/* Rating */}
        {product.rating && product.reviews !== null && (
          <div className="flex items-center justify-center gap-1 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  width={16}
                  height={16}
                  color="#fbbf24"
                  filled={i < (product.rating ?? 0)}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600 ml-1">
              {product.reviews} {product.reviews === 1 ? "review" : "reviews"}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
