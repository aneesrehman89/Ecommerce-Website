"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductListItem } from "@/app/types/product";
import StatusBadge from "./StatusBadge";
import MoreVerticalIcon from "../icons/MoreVerticalIcon";

interface ProductCardProps {
  product: ProductListItem;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function ProductCard({ product, isSelected, onSelect, onDelete }: ProductCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const getStockColor = () => {
    if (product.stockStatus === 'out') return 'text-red-600';
    if (product.stockStatus === 'low') return 'text-yellow-600';
    return 'text-gray-900';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(product.id)}
          className="mt-1 w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
        />
        
        <Image
          src={product.image}
          alt={product.name}
          width={60}
          height={60}
          className="rounded-lg object-cover"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 truncate">{product.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{product.category}</p>
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowMenu(!showMenu)}
                className="p-1 hover:bg-gray-100 rounded text-gray-600 flex-shrink-0"
              >
                <MoreVerticalIcon width={18} height={18} />
              </button>
              
              {showMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowMenu(false)}
                  />
                  <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                    <button
                      onClick={() => {
                        if (onDelete) {
                          onDelete(product.id);
                        }
                        setShowMenu(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-xs text-gray-500">Stock</p>
                <p className={`text-sm font-medium ${getStockColor()}`}>{product.stock}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Price</p>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
            <StatusBadge status={product.status} />
          </div>
        </div>
      </div>
    </div>
  );
}