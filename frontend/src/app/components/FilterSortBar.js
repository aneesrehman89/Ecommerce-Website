"use client";

import { useState } from "react";
import FilterIcon from "./icons/FilterIcon";

export default function FilterSortBar({ onSortChange }) {
  const [sortValue, setSortValue] = useState("date-new-old");

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortValue(value);
    if (onSortChange) {
      onSortChange(value);
    }
  };

  return (
    <div className="flex justify-between items-center py-6 border-b border-gray-200">
      {/* Filter Button */}
      <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
        <FilterIcon width={18} height={18} color="#6b6b6b" />
        <span>Filter</span>
      </button>

      {/* Sort Dropdown */}
      <div className="relative">
        <select
          value={sortValue}
          onChange={handleSortChange}
          className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 cursor-pointer"
        >
          <option value="date-new-old">Date, new to old</option>
          <option value="date-old-new">Date, old to new</option>
          <option value="price-low-high">Price, low to high</option>
          <option value="price-high-low">Price, high to low</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}