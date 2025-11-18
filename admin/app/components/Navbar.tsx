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
}

export default function Navbar({ onLogout }: NavbarProps) {
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
    <nav className="w-screen bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/dashboard" className="flex-shrink-0">
          <Image
            src="/amLogo3.png"
            alt="Admin Logo"
            width={150}
            height={60}
            className="h-10 sm:h-12 w-auto"
            priority
          />
        </Link>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="px-4 sm:px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}