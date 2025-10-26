"use client";

import Image from "next/image";
import TrashIcon from "../icons/TrashIcon";
import QuantityControl from "./QuantityControl";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
}

export default function CartItem({
  id,
  name,
  price,
  originalPrice,
  quantity,
  image,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  
  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const totalPrice = price * quantity;

  return (
    <div className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
      {/* Product Image */}
      <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-gray-900 text-sm truncate pr-2">
            {name}
          </h3>
          <span className="font-semibold text-gray-900 text-sm whitespace-nowrap">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        {originalPrice && (
          <p className="text-xs text-gray-500 line-through mb-2">
            ${originalPrice.toFixed(2)}
          </p>
        )}

        <div className="flex items-center justify-between">
          <QuantityControl
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          <button
            onClick={onRemove}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Remove item"
          >
            <TrashIcon width={18} height={18} color="#ef4444" />
          </button>
        </div>
      </div>
    </div>
  );
}