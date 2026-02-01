"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import MenuIcon from "./icons/MenuIcon";
import CartIcon from "./icons/CartIcon";
import HomeIcon from "./icons/HomeIcon";
import ProductsIcon from "./icons/ProductsIcon";
import CheckoutIcon from "./icons/CheckoutIcon";
import LoginIcon from "./icons/LoginIcon";
import ShoppingCart from "./cart/ShoppingCart";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);  
  const cartItemCount: number = cartItems.length;

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
          <Link
            href="/"
            className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3"
          >
            <div className="flex items-center justify-center">
              <Image
                src="/asset/amLogo2.png"
                alt="ambotique Logo"
                width={80}
                height={40}
                className="h-8 w-auto sm:h-10 md:h-12 cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-wide uppercase text-center sm:text-left">
              Coming Soon...
            </h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              <HomeIcon width={20} height={20} color="#1a1a1a" />
              <span>HOME</span>
            </Link>
            <Link
              href="/products"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ProductsIcon width={20} height={20} color="#1a1a1a" />
              <span>PRODUCTS</span>
            </Link>
            <Link
              href="/checkout"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              <CheckoutIcon width={20} height={20} color="#1a1a1a" />
              <span>CHECKOUT</span>
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              <LoginIcon width={20} height={20} color="#1a1a1a" />
              <span>LOGIN</span>
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors relative"
            >
              <CartIcon width={20} height={20} color="#1a1a1a" />
              <span>CART</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {/* Page Navigation */}
            <Link
              href="/"
              className="flex items-center gap-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HomeIcon width={20} height={20} color="#1a1a1a" />
              <span>HOME</span>
            </Link>
            <Link
              href="/products"
              className="flex items-center gap-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ProductsIcon width={20} height={20} color="#1a1a1a" />
              <span>PRODUCTS</span>
            </Link>
            <button
              className="flex items-center gap-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 relative"
              onClick={() => setIsCartOpen(true)}
            >
              <CartIcon width={20} height={20} color="#1a1a1a" />
              <span>CART</span>
               {cartItemCount > 0 && (
                <span className="absolute -top-[-7px] -right-6 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
             </button>
            <Link
              href="/checkout"
              className="flex items-center gap-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <CheckoutIcon width={20} height={20} color="#1a1a1a" />
              <span>CHECKOUT</span>
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LoginIcon width={20} height={20} color="#1a1a1a" />
              <span>LOGIN</span>
            </Link>
          </div>
        </div>
      )}

      {/* Shopping Cart Drawer */}
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
}
