"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DashboardIcon from "./icons/DashboardIcon";
import AddIcon from "./icons/AddIcon";
import ListIcon from "./icons/ListIcon";
import CartIcon from "./icons/CartIcon";
import ExchangeIcon from "./icons/ExchangeIcon";
import CloseIcon from "./icons/CloseIcon";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface SidebarProps {
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

export default function Sidebar({ isMobileOpen = false, onMobileClose }: SidebarProps) {
  const navItems: NavItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <DashboardIcon width={20} height={20} />,
      path: "/dashboard",
    },
    {
      id: "add-item",
      label: "Add Item",
      icon: <AddIcon width={20} height={20} />,
      path: "/dashboard/add-item",
    },
    {
      id: "list-item",
      label: "List Item",
      icon: <ListIcon width={20} height={20} />,
      path: "/dashboard/list-item",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 z-50 w-64 h-full bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        md:translate-x-0 md:top-0 md:z-40
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200">
          <Image
            src="/amLogo3.png"
            alt="Admin Logo"
            width={120}
            height={48}
            className="h-10 w-auto"
          />
          <button
            onClick={onMobileClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <CloseIcon width={24} height={24} />
          </button>
        </div>

        {/* Navigation - Scrollable with background */}
        <nav className="h-[calc(100vh-64px)] md:h-full overflow-y-auto bg-white p-4 mt-16">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  onClick={onMobileClose}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="text-gray-600">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}