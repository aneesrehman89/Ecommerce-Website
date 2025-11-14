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
    {
      id: "orders",
      label: "Orders",
      icon: <CartIcon width={20} height={20} />,
      path: "/dashboard/orders",
    },
    {
      id: "exchange",
      label: "Exchange",
      icon: <ExchangeIcon width={20} height={20} />,
      path: "/dashboard/exchange",
    },
  ];

  return (
    <nav className="w-screen bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo and Navigation Items */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/dashboard" className="flex-shrink-0">
            <Image
              src="/amLogo2.png"
              alt="Admin Logo"
              width={180}
              height={90}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Navigation Items */}
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="text-gray-600">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}