"use client";

import ShieldCheckIcon from "../icons/ShieldCheckIcon";

export default function SecurityBadges() {
  return (
    <div className="bg-security-green-light border border-security-green/20 rounded-checkout-card p-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <ShieldCheckIcon width={24} height={24} color="#16A34A" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">PCI</span>
              </div>
              <span className="text-xs text-checkout-gray-600">
                Card information is guaranteed to be safe by PCI.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 bg-white border border-checkout-gray-300 rounded flex items-center justify-center">
                <ShieldCheckIcon width={14} height={14} color="#16A34A" />
              </div>
              <span className="text-xs text-checkout-gray-600">
                Personal information is protected by Verisign.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}