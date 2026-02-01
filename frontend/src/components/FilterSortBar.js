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
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-4 border-b border-gray-200 mb-6">
      {/* Filter Button */}
      <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors w-fit">
        <FilterIcon width={16} height={16} color="currentColor" />
        <span>Filter</span>
      </button>

      {/* Sort Dropdown */}
      <div className="relative flex items-center">
        <label className="text-sm text-gray-600 mr-2 whitespace-nowrap">Sort by:</label>
        <select
          value={sortValue}
          onChange={handleSortChange}
          className="appearance-none bg-white border border-gray-300 rounded px-3 py-1.5 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 cursor-pointer w-full sm:w-auto min-w-[180px]"
        >
          <option value="date-new-old">Featured</option>
          <option value="date-old-new">Date, old to new</option>
          <option value="price-low-high">Price, low to high</option>
          <option value="price-high-low">Price, high to low</option>
        </select>
        <div className="pointer-events-none absolute right-0 flex items-center pr-2 text-gray-500">
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