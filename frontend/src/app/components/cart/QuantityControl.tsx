"use client";

import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  minQuantity?: number;
}

export default function QuantityControl({
  quantity,
  onIncrease,
  onDecrease,
  minQuantity = 1,
}: QuantityControlProps) {
  return (
    <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-2 py-1">
      <button
        onClick={onDecrease}
        disabled={quantity <= minQuantity}
        className={`p-1 rounded hover:bg-gray-100 transition-colors ${
          quantity <= minQuantity ? "opacity-40 cursor-not-allowed" : ""
        }`}
        aria-label="Decrease quantity"
      >
        <MinusIcon width={16} height={16} color="#374151" />
      </button>
      
      <span className="min-w-[24px] text-center font-medium text-gray-900">
        {quantity}
      </span>
      
      <button
        onClick={onIncrease}
        className="p-1 rounded hover:bg-gray-100 transition-colors"
        aria-label="Increase quantity"
      >
        <PlusIcon width={16} height={16} color="#374151" />
      </button>
    </div>
  );
}