"use client";

import { ProductListStatus } from "@/app/types/product";
import ChevronDownIcon from "../icons/ChevronDownIcon";

interface StatusBadgeProps {
  status: ProductListStatus;
  onChange?: (newStatus: ProductListStatus) => void;
}

const statusStyles = {
  [ProductListStatus.PUBLISHED]: {
    bg: "bg-green-100",
    text: "text-green-800",
    border: "border-green-200"
  },
  [ProductListStatus.DRAFT_LIST]: {
    bg: "bg-gray-100",
    text: "text-gray-800",
    border: "border-gray-200"
  },
  [ProductListStatus.INACTIVE]: {
    bg: "bg-red-100",
    text: "text-red-800",
    border: "border-red-200"
  },
  [ProductListStatus.STOCK_OUT]: {
    bg: "bg-yellow-100",
    text: "text-yellow-800",
    border: "border-yellow-200"
  }
};

export default function StatusBadge({ status, onChange }: StatusBadgeProps) {
  const styles = statusStyles[status];

  return (
    <div className="relative inline-block">
      <button
        className={`flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium border ${styles.bg} ${styles.text} ${styles.border} hover:opacity-80 transition-opacity`}
      >
        {status}
        {onChange && <ChevronDownIcon width={14} height={14} />}
      </button>
    </div>
  );
}