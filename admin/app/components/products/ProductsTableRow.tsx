"use client";

import Image from "next/image";
import { ProductListItem } from "@/app/types/product";
import StatusBadge from "./StatusBadge";
import MoreVerticalIcon from "../icons/MoreVerticalIcon";

interface ProductsTableRowProps {
  product: ProductListItem;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export default function ProductsTableRow({ product, isSelected, onSelect }: ProductsTableRowProps) {
  const getStockColor = () => {
    if (product.stockStatus === 'out') return 'text-red-600';
    if (product.stockStatus === 'low') return 'text-yellow-600';
    return 'text-gray-900';
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(product.id)}
          className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
        />
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src={product.image}
            alt={product.name}
            width={40}
            height={40}
            className="rounded-lg object-cover"
          />
          <span className="text-sm font-medium text-gray-900">{product.name}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
      <td className={`px-6 py-4 text-sm font-medium ${getStockColor()}`}>
        {product.stock}
      </td>
      <td className="px-6 py-4 text-sm text-gray-900">${product.price}</td>
      <td className="px-6 py-4">
        <StatusBadge status={product.status} />
      </td>
      <td className="px-6 py-4">
        <button className="p-1 hover:bg-gray-100 rounded text-gray-600">
          <MoreVerticalIcon width={20} height={20} />
        </button>
      </td>
    </tr>
  );
}