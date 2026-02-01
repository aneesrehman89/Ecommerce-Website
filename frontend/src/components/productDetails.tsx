"use client";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store/store";
import { addToCart } from "@/slices/cartSlice";
import { toggleWishlist } from "@/slices/wishlistSlice";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductActions from "@/components/ProductActions";
import type { ProductDetailsData } from "@/types/product";

interface ProductDetailsProps {
  product: ProductDetailsData;
}

interface CartData {
  quantity: number;
  size: string;
  color: string;
  fabric: string;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist: boolean = wishlistItems.includes(product.id.toString());

  const handleAddToCart = ({
    quantity,
    size,
    color,
    fabric,
  }: CartData): void => {
    dispatch(
      addToCart({
        productId: product.id.toString(),
        title: product.title,
        price: product.salePrice,
        image: product.images[0],
        quantity,
        size,
        color,
        fabric,
      })
    );
  };

  const handleToggleWishlist = (): void => {
    dispatch(toggleWishlist(product.id.toString()));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Image Gallery */}
          <div>
            <ProductImageGallery images={product.images} />
          </div>

          {/* Right Side - Product Info and Actions */}
          <div className="space-y-6">
            <ProductInfo
              title={product.title}
              price={product.salePrice}
              sku={product.sku}
              barcode="WP1S-969"
              availability={product.inStock ? "In Stock" : "Out of Stock"}
              stockCount={12}
              design="SK-0152 (P38-25400-08B 1Pc)"
              color={product.colors?.[0]?.name || "Olive"}
              fabric="Scuba"
              description={product.description}
              features={product.features}
              disclaimer="These Images Are For Illustrative Purpose, Actual Color Of Product May Slight Vary."
            />

            <ProductActions
              availableSizes={product.sizes}
              availableColors={product.colors?.map((c) => c.name) || ["GREEN"]}
              availableFabrics={["Scuba"]}
              selectedSize={product.sizes?.[0] || "X-Small"}
              selectedColor={product.colors?.[0]?.name || "GREEN"}
              selectedFabric="Scuba"
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isInWishlist={isInWishlist}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
