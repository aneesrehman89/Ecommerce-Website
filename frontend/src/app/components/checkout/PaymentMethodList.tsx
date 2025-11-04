"use client";

import { PaymentMethod, type PaymentMethodOption } from "../../types/checkout";
import PaymentMethodCard from "./PaymentMethodCard";

interface PaymentMethodListProps {
  paymentMethods: PaymentMethodOption[];
  selectedMethod: PaymentMethod | null;
  onSelectMethod: (method: PaymentMethod) => void;
}

export default function PaymentMethodList({
  paymentMethods,
  selectedMethod,
  onSelectMethod,
}: PaymentMethodListProps) {
  
  // Payment method icons
  const getPaymentIcon = (id: PaymentMethod): React.ReactNode | undefined => {
    const iconMap: Record<PaymentMethod, React.ReactNode> = {
      [PaymentMethod.CREDIT_DEBIT_CARD]: (
        <div className="w-10 h-7 bg-checkout-gray-100 rounded flex items-center justify-center">
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
            <rect x="1" y="1" width="22" height="14" rx="2" stroke="#525252" strokeWidth="1.5" />
            <rect x="1" y="5" width="22" height="3" fill="#525252" />
          </svg>
        </div>
      ),
      [PaymentMethod.PAYPAL]: (
        <div className="h-7 px-3 bg-blue-600 rounded flex items-center">
          <span className="text-white font-bold text-sm">PayPal</span>
        </div>
      ),
      [PaymentMethod.APPLE_PAY]: (
        <div className="h-7 px-3 bg-black rounded flex items-center gap-1">
          <span className="text-white text-lg"></span>
          <span className="text-white font-medium text-sm">Pay</span>
        </div>
      ),
      [PaymentMethod.WIRE_TRANSFER]: (
        <div className="h-7 px-3 bg-checkout-gray-100 rounded flex items-center">
          <span className="text-checkout-gray-900 font-bold text-sm">T/T</span>
        </div>
      ),
      [PaymentMethod.TRUSTLY]: (
        <div className="h-7 px-3 bg-security-green rounded flex items-center">
          <span className="text-white font-bold text-sm">Trustly</span>
        </div>
      ),
      [PaymentMethod.GOOGLE_PAY]: (
        <div className="h-7 px-3 bg-white border border-checkout-gray-200 rounded flex items-center gap-1">
          <span className="text-xl">G</span>
          <span className="text-checkout-gray-900 font-medium text-sm">Pay</span>
        </div>
      ),
    };

    return iconMap[id];
  };

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-checkout-gray-900 mb-4 flex items-center gap-2">
        <span className="text-2xl">👑</span>
        Trade Assurance
      </h2>
      {paymentMethods.map((method) => (
        <PaymentMethodCard
          key={method.id}
          id={method.id}
          name={method.name}
          logos={method.logos}
          description={method.description}
          fundingTime={method.fundingTime}
          enabled={method.enabled}
          selected={selectedMethod === method.id}
          onSelect={onSelectMethod}
          icon={getPaymentIcon(method.id)}
        />
      ))}
    </div>
  );
}