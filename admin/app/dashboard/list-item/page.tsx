"use client";

import { useState, useMemo } from "react";
import ImportIcon from "@/app/components/icons/ImportIcon";
import ExportIcon from "@/app/components/icons/ExportIcon";
import AddIcon from "@/app/components/icons/AddIcon";
import FiltersBar from "@/app/components/products/FiltersBar";
import ProductsTable from "@/app/components/products/ProductsTable";
import Pagination from "@/app/components/products/Pagination";
import { mockProducts } from "@/app/data/productsListMockData";

export default function ListItemPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filter products
  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "All Status" || product.status === statusFilter;
      const matchesCategory = categoryFilter === "All Categories" || product.category === categoryFilter;
      
      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [searchQuery, statusFilter, categoryFilter]);

  // Paginate products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Products List</h1>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
          {/* Import Button */}
          <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <ImportIcon width={18} height={18} className="text-gray-600" />
            <span>Import</span>
          </button>

          {/* Export Button */}
          <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <ExportIcon width={18} height={18} className="text-gray-600" />
            <span>Export</span>
          </button>

          {/* Add Product Button */}
          <button className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-purple-600 rounded-lg text-sm font-medium text-white hover:bg-purple-700 transition-colors flex-1 sm:flex-initial justify-center">
            <AddIcon width={18} height={18} />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <FiltersBar
        onSearchChange={setSearchQuery}
        onStatusChange={setStatusFilter}
        onCategoryChange={setCategoryFilter}
      />

      {/* Products Table */}
      <ProductsTable products={paginatedProducts} />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredProducts.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
}