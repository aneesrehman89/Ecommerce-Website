"use client";

import type { PaymentMethod } from "../../types/checkout";
import PaymentMethodLogos from "./PaymentMethodLogos";

interface PaymentMethodCardProps {
  id: PaymentMethod;
  name: string;
  logos?: readonly string[];
  description?: string;
  fundingTime?: string;
  enabled: boolean;
  selected: boolean;
  onSelect: (id: PaymentMethod) => void;
  icon?: React.ReactNode;
}

export default function PaymentMethodCard({
  id,
  name,
  logos,
  description,
  fundingTime,
  enabled,
  selected,
  onSelect,
  icon,
}: PaymentMethodCardProps) {
  return (
    <button
      onClick={() => enabled && onSelect(id)}
      disabled={!enabled}
      className={`w-full p-5 bg-white border-2 rounded-checkout-card transition-all text-left ${
        selected
          ? "border-border-selected shadow-selected"
          : "border-border-default hover:border-checkout-gray-300 hover:shadow-checkout-card-hover"
      } ${!enabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <div className="flex items-start gap-4">
        {/* Radio Button */}
        <div className="flex-shrink-0 mt-1">
          <div
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
              selected
                ? "border-alibaba-orange bg-alibaba-orange"
                : "border-checkout-gray-300 bg-white"
            }`}
          >
            {selected && (
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-3">
              <h3 className="text-base font-medium text-checkout-gray-900">
                {name}
              </h3>
              {logos && <PaymentMethodLogos logos={logos} />}
            </div>
            {icon && <div className="flex-shrink-0">{icon}</div>}
          </div>

          {description && (
            <p className="text-sm text-checkout-gray-600 mt-1">
              {description}
            </p>
          )}

          {fundingTime && (
            <p className="text-sm text-checkout-gray-600 mt-1">
              Supplier will receive the funds in{" "}
              <span className="font-medium text-checkout-gray-900">
                {fundingTime}
              </span>
            </p>
          )}
        </div>
      </div>
    </button>
  );
}