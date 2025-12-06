"use client";

import Link from "next/link";
import Image from "next/image";
import DashboardIcon from "./icons/DashboardIcon";
import AddIcon from "./icons/AddIcon";
import ListIcon from "./icons/ListIcon";
import CartIcon from "./icons/CartIcon";
import ExchangeIcon from "./icons/ExchangeIcon";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface NavbarProps {
  onLogout: () => void;
  onMenuClick?: () => void;
}

export default function Navbar({ onLogout, onMenuClick }: NavbarProps) {
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
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg mr-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>

        {/* Logo */}
        <Link href="/dashboard" className="flex-shrink-0">
          <Image
            src="/amLogo3.png"
            alt="Admin Logo"
            width={120}
            height={48}
            className="h-8 sm:h-10 w-auto"
            priority
          />
        </Link>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-xs sm:text-sm whitespace-nowrap"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}