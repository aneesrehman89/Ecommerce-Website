"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import Link from "next/link";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import YouTubeIcon from "./icons/YouTubeIcon";

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <WhatsAppIcon width={20} height={20} className="text-green-600" />
              <a
                href="mailto: Info@amboutique.pk"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Info@amboutique.pk
              </a>
            </div>
            <p className="text-sm text-gray-700">+92 321 9570971</p>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Customer Care
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Return and Exchange
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/stores"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Our Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Information */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Help & Information
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Term of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/order-process"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Order Process
                </Link>
              </li>
              <li>
                <Link
                  href="/track"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Hear from Our Customers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Newsletter Signup
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter to get notified of the latest launches
              and offers
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                placeholder="Your email address"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              {emailError && (
                <p className="text-xs text-red-600">{emailError}</p>
              )}
              <button
                type="submit"
                className="w-full bg-black text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <FacebookIcon width={20} height={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <InstagramIcon width={20} height={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <YouTubeIcon width={20} height={20} />
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
                className="h-4 sm:h-6 w-auto"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-4 sm:h-6 w-auto"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-4 sm:h-6 w-auto"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                alt="American Express"
                className="h-4 sm:h-6 w-auto"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg"
                alt="Discover"
                className="h-4 sm:h-6 w-auto"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Copyright © 2025 amboutique all rights reserved. Powered by Alchemative
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
