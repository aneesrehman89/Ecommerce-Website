"use client";

import StarIcon from "./icons/StarIcon";

interface ProductInfoProps {
  title: string;
  price: number;
  sku: string;
  barcode: string;
  availability: string;
  stockCount: number;
  design: string;
  color: string;
  fabric: string;
  description: string;
  features: string[];
  disclaimer: string;
}

export default function ProductInfo({
  title,
  price,
  sku,
  barcode,
  availability,
  stockCount,
  design,
  color,
  fabric,
  description,
  features,
  disclaimer,
}: ProductInfoProps) {
  return (
    <div className="space-y-4">
      {/* Title and Price */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h1>
        <p className="text-xl font-bold text-gray-900">Rs. {price.toLocaleString()}</p>
      </div>

      {/* Product Details */}
      <div className="space-y-2 text-sm">
        <div className="flex gap-2">
          <span className="font-semibold">SKU:</span>
          <span className="text-gray-700">{sku}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">Barcode:</span>
          <span className="text-gray-700">{barcode}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-semibold">Availability :</span>
          <span className="text-gray-700">{availability}</span>
        </div>
        <div className="flex gap-2 items-center">
          <StarIcon width={16} height={16} color="#fbbf24" filled={true} />
          <span className="text-sm font-medium">{stockCount} IN STOCK</span>
        </div>
      </div>

      {/* Description Section */}
      <div className="pt-4 border-t border-gray-200">
        <h2 className="text-sm font-bold mb-2">DESCRIPTION:</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <div>
            <span className="font-semibold">Design:</span> {design}
          </div>
          <div>
            <span className="font-semibold">Color:</span> {color}
          </div>
          <div>
            <span className="font-semibold">Fabric:</span> {fabric}
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div>
        <h3 className="text-sm font-bold mb-2">Product Detail</h3>
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-sm font-bold mb-2">Features</h3>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="pt-2">
        <p className="text-xs text-gray-500 italic">
          Disclaimer: {disclaimer}
        </p>
      </div>
    </div>
  );
}