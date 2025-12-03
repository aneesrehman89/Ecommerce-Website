"use client";

import { useState, type ChangeEvent } from "react";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";
import WishlistIcon from "./icons/WishlistIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";

interface CartData {
  quantity: number;
  size: string;
  color: string;
  fabric: string;
}

interface ProductActionsProps {
  availableSizes: string[];
  availableColors: string[];
  availableFabrics: string[];
  selectedSize: string;
  selectedColor: string;
  selectedFabric: string;
  onAddToCart: (data: CartData) => void;
  onToggleWishlist: () => void;
  isInWishlist: boolean;
}

export default function ProductActions({
  availableSizes,
  availableColors,
  availableFabrics,
  selectedSize: initialSize,
  selectedColor: initialColor,
  selectedFabric: initialFabric,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
}: ProductActionsProps) {
  const [selectedSize, setSelectedSize] = useState<string>(initialSize);
  const [selectedColor, setSelectedColor] = useState<string>(initialColor);
  const [selectedFabric, setSelectedFabric] = useState<string>(initialFabric);
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (change: number): void => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleAddToCart = (): void => {
    onAddToCart({
      quantity,
      size: selectedSize,
      color: selectedColor,
      fabric: selectedFabric,
    });
  };

  return (
    <div className="space-y-6">
      {/* Color Selection */}
      <div>
        <h3 className="text-sm font-bold mb-3">COLOR: {selectedColor}</h3>
        <div className="flex gap-2">
          {availableColors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColor === color
                  ? "border-gray-900 ring-2 ring-gray-300"
                  : "border-gray-300 hover:border-gray-500"
              }`}
              style={{ backgroundColor: color === "GREEN" ? "#808000" : color }}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <h3 className="text-sm font-bold mb-3">
          SIZE: {selectedSize.toUpperCase()}
        </h3>
        <div className="flex gap-2 flex-wrap">
          {availableSizes.map((size) => (            
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 text-sm font-medium border transition-all ${
                selectedSize === size
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-900 border-gray-300 hover:border-gray-900"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Fabric Selection */}
      <div>
        <h3 className="text-sm font-bold mb-3">
          FABRIC: {selectedFabric.toUpperCase()}
        </h3>
        <div className="flex gap-2">
          {availableFabrics.map((fabric) => (
            <button
              key={fabric}
              onClick={() => setSelectedFabric(fabric)}
              className={`px-4 py-2 text-sm font-medium border transition-all ${
                selectedFabric === fabric
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-900 border-gray-300 hover:border-gray-900"
              }`}
            >
              {fabric}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex gap-4 items-center">
        {/* Quantity Controls */}
        <div className="flex items-center border border-gray-300">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="p-3 hover:bg-gray-100 transition-colors"
            aria-label="Decrease quantity"
          >
            <MinusIcon width={16} height={16} color="#1a1a1a" />
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))
            }
            className="w-16 text-center border-x border-gray-300 py-2 focus:outline-none"
            min="1"
          />
          <button
            onClick={() => handleQuantityChange(1)}
            className="p-3 hover:bg-gray-100 transition-colors"
            aria-label="Increase quantity"
          >
            <PlusIcon width={16} height={16} color="#1a1a1a" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-gray-900 text-white py-3 px-6 font-semibold hover:bg-gray-800 transition-colors"
        >
          ADD TO CART
        </button>

        {/* Wishlist Button */}
        <button
          onClick={onToggleWishlist}
          className="hidden md:flex p-3 border border-gray-300 hover:bg-gray-100 transition-colors"
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <WishlistIcon
            width={24}
            height={24}
            color={isInWishlist ? "#ef4444" : "#1a1a1a"}
          />
        </button>
      </div>

      {/* Social Share */}
      <div className="flex gap-4 pt-4 border-t border-gray-200">
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Share on Facebook"
        >
          <FacebookIcon width={20} height={20} />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Share on Twitter"
        >
          <TwitterIcon width={20} height={20} />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Share on WhatsApp"
        >
          <WhatsAppIcon width={20} height={20} />
        </a>
      </div>
    </div>
  );
}
