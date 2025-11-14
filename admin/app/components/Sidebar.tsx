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

export default function Sidebar() {
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
    // {
    //   id: "orders",
    //   label: "Orders",
    //   icon: <CartIcon width={20} height={20} />,
    //   path: "/dashboard/orders",
    // },
    // {
    //   id: "exchange",
    //   label: "Exchange",
    //   icon: <ExchangeIcon width={20} height={20} />,
    //   path: "/dashboard/exchange",
    // },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-40">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 flex items-center justify-center">
        <Image
          src="/amLogo3.png"
          alt="Admin Logo"
          width={150}
          height={60}
          className="h-12 w-auto"
        />
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
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
  );
}