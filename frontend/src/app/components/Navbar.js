"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "./icons/MenuIcon";
import SearchIcon from "./icons/SearchIcon";
import AccountIcon from "./icons/AccountIcon";
import WishlistIcon from "./icons/WishlistIcon";
import CartIcon from "./icons/CartIcon";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-md lg:hidden"
            aria-label="Toggle menu"
          >
            <MenuIcon width={24} height={24} color="#1a1a1a" />
          </button>

          {/* Center: Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <Image
                src="/asset/brandLogo"
                alt="SAYA Logo"
                width={80}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-wide uppercase pl-2">
              Coming Soon...
            </h1>
          </Link>

          {/* Right: Navigation Items */}
          <div className="flex items-center gap-6">
            <Link
              href="/search"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <SearchIcon width={20} height={20} color="#1a1a1a" />
              <span className="hidden md:inline">SEARCH</span>
            </Link>
            <Link
              href="/account"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <AccountIcon width={20} height={20} color="#1a1a1a" />
              <span className="hidden md:inline">ACCOUNT</span>
            </Link>
            <Link
              href="/wishlist"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <WishlistIcon width={20} height={20} color="#1a1a1a" />
              <span className="hidden md:inline">WISHLIST</span>
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <CartIcon width={20} height={20} color="#1a1a1a" />
              <span className="hidden md:inline">CART</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/search"
              className="flex items-center gap-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <SearchIcon width={20} height={20} color="#1a1a1a" />
              <span>SEARCH</span>
            </Link>
            <Link
              href="/account"
              className="flex items-center gap-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <AccountIcon width={20} height={20} color="#1a1a1a" />
              <span>ACCOUNT</span>
            </Link>
            <Link
              href="/wishlist"
              className="flex items-center gap-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <WishlistIcon width={20} height={20} color="#1a1a1a" />
              <span>WISHLIST</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
