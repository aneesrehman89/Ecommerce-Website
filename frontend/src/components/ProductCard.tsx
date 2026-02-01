"use client";

import Link from "next/link";
import type { Product } from "@/types/product";
import Image from "next/image";
import { formatPrice } from "@/utils/formatters";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Implement add to cart functionality
    console.log("Add to cart:", product.id);
  };

  return (
    <div className="group relative">
      <Link href={`/product/${product.id}`} className="block">
        {/* Product Image - Fixed aspect ratio for consistent sizing */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-3">
          <Image
            src={product.image || '/placeholder-product.svg'}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority={false}
            unoptimized={!product.image || (typeof product.image === 'string' && product.image.includes('placeholder'))}
          />
          {/* Discount Tag - Clean badge at top right */}
          {product.discount && (
            <Badge 
              variant="destructive" 
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-2 py-1 shadow-sm"
            >
              {product.discount}% OFF
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="text-xs font-medium text-gray-900 uppercase tracking-wide line-clamp-2 min-h-[2.5rem]">
            {product.title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500 line-through">
              Rs. {formatPrice(product.originalPrice)}
            </span>
            <span className="font-bold text-red-600">
              Rs. {formatPrice(product.salePrice)}
            </span>
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <Button 
        onClick={handleAddToCart}
        className="w-full mt-3 bg-black hover:bg-gray-800 text-white font-medium text-sm py-2 rounded-none"
        size="sm"
      >
        ADD TO CART
      </Button>
    </div>
  );
}