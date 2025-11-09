"use client";

import type { OrderDetails } from "../../types/checkout";
import { formatCurrency, formatOrderNumber } from "../../utils/formatters";
import ChevronRightIcon from "../icons/ChevronRightIcon";

interface OrderSummaryCardProps {
  orderDetails: OrderDetails;
  onPayNow: () => void;
  isProcessing: boolean;
}

export default function OrderSummaryCard({
  orderDetails,
  onPayNow,
  isProcessing,
}: OrderSummaryCardProps) {
  return (
    <div className="bg-white rounded-checkout-card shadow-checkout-card p-5 sticky top-4">
      {/* Product Info */}
      <div className="flex gap-3 pb-4 border-b border-border-default">
        <div className="relative w-20 h-20 flex-shrink-0 bg-checkout-gray-100 rounded overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1546938576-6e6a64f317cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHN0dWRlbnQlMjBiYWclMjBzY2hvb2wlMjBiYWd8ZW58MHwyfHx8MTc2MTU4MjE2MHww&ixlib=rb-4.1.0&q=85"
            alt="SJ 📸 on Unsplash"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-checkout-gray-900 mb-1 line-clamp-2">
            {orderDetails.productName}
          </h3>
          <p className="text-xs text-checkout-gray-600 mb-1">
            {formatCurrency(orderDetails.unitPrice)} x {orderDetails.quantity}
          </p>
          <p className="text-xs text-checkout-gray-500">
            {formatOrderNumber(orderDetails.orderNumber)}
          </p>
        </div>
        <ChevronRightIcon width={20} height={20} color="#D4D4D4" />
      </div>

      {/* Pricing Breakdown */}
      <div className="py-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-checkout-gray-600">Product amount</span>
          <span className="font-medium text-checkout-gray-900">
            {formatCurrency(orderDetails.productAmount)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-checkout-gray-600">Logistics fee</span>
          <span className="font-medium text-checkout-gray-900">
            {formatCurrency(orderDetails.logisticsFee)}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-checkout-gray-600">Transaction fee</span>
          <span className="font-medium text-checkout-gray-900">
            {formatCurrency(orderDetails.transactionFee)}
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="pt-4 border-t border-border-default">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-checkout-gray-600">Total Amount</span>
          <div className="text-right">
            <div className="text-2xl font-bold text-alibaba-orange">
              {formatCurrency(orderDetails.totalAmount)}
            </div>
          </div>
        </div>

        {/* Pay Now Button */}
        <button
          onClick={onPayNow}
          disabled={isProcessing}
          className="w-full bg-alibaba-orange hover:bg-alibaba-orange-hover text-white font-semibold py-3 rounded-checkout-button transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                  fill="white"
                  fillOpacity="0.2"
                />
                <path
                  d="M12 2V12L17 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Pay Now
            </>
          )}
        </button>
      </div>
    </div>
  );
}