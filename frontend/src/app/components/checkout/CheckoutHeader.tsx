"use client";

import Image from "next/image";
import InfoIcon from "../icons/InfoIcon";
import ChevronDownIcon from "../icons/ChevronDownIcon";

interface CheckoutHeaderProps {
  countryName: string;
  countryCode: string;
  onCountryChange?: (countryCode: string) => void;
}

export default function CheckoutHeader({
  countryName,
  countryCode,
  onCountryChange,
}: CheckoutHeaderProps) {
  return (
    <div className="bg-white border-b border-border-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo and Title */}
          <div className="flex items-center gap-3">
            <Image
              src="/asset/AMLogo.png"
              alt="Alibaba.com"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-normal text-checkout-gray-900">
                Trade Assurance Checkout
              </h1>
            </div>
          </div>

          {/* Right: Country Selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-checkout-gray-600">Pay From:</span>
            <button
              className="flex items-center gap-2 px-3 py-1.5 border border-border-default rounded hover:bg-checkout-gray-50 transition-colors"
              onClick={() => onCountryChange?.(countryCode)}
            >
              <span className="text-2xl">🇬🇧</span>
              <span className="text-sm font-medium text-checkout-gray-900">
                {countryName}
              </span>
              <ChevronDownIcon width={16} height={16} color="#525252" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}