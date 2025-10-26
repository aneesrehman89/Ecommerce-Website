"use client";

interface CartSummaryProps {
  subtotal: number;
  taxRate?: number;
  onCheckout: () => void;
}

export default function CartSummary({
  subtotal,
  taxRate = 0.1,
  onCheckout,
}: CartSummaryProps) {
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="border-t border-gray-200 pt-4 space-y-3">
      {/* Subtotal */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>Subtotal</span>
        <span className="font-medium">${subtotal.toFixed(2)}</span>
      </div>

      {/* Tax */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>Tax ({(taxRate * 100).toFixed(0)}%)</span>
        <span className="font-medium">${tax.toFixed(2)}</span>
      </div>

      {/* Total */}
      <div className="flex justify-between text-base font-semibold text-gray-900 pt-2 border-t border-gray-200">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      {/* Checkout Button */}
      <button
        onClick={onCheckout}
        className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-4"
      >
        Checkout
      </button>
    </div>
  );
}