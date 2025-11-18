"use client";

import { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import CalendarIcon from "../icons/CalendarIcon";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import FilterIcon from "../icons/FilterIcon";
import { categories, statuses } from "@/app/data/productsListMockData";

interface FiltersBarProps {
  onSearchChange: (search: string) => void;
  onStatusChange: (status: string) => void;
  onCategoryChange: (category: string) => void;
}

export default function FiltersBar({
  onSearchChange,
  onStatusChange,
  onCategoryChange,
}: FiltersBarProps) {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onSearchChange(value);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between items-stretch sm:items-center gap-3 sm:gap-y-4 sm:gap-x-6">
        {/* Search Input */}
        <div className="w-full sm:flex-1 sm:min-w-[200px] sm:max-w-md relative">
          <SearchIcon
            width={18}
            height={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-6">
          {/* Date Range */}
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
              <CalendarIcon width={18} height={18} className="text-gray-500" />
              <span>12 Sep - 28 Oct 2024</span>
              <ChevronDownIcon
                width={16}
                height={16}
                className="text-gray-500"
              />
            </button>
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                onStatusChange(e.target.value);
              }}
              className="appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              width={16}
              height={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                onCategoryChange(e.target.value);
              }}
              className="appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              width={16}
              height={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            />
          </div>

          {/* Filter Button */}
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
            <FilterIcon width={18} height={18} className="text-gray-500" />
            <span>Filter</span>
          </button>
        </div>
      </div>
    </div>
  );
}
