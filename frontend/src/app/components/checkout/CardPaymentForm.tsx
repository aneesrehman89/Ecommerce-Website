"use client";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setCardDetails } from "../../slices/checkoutSlice";
import { useState } from "react";

export default function CardPaymentForm() {
  const dispatch = useDispatch();
  const { cardDetails } = useSelector((state: RootState) => state.checkout);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, "");
    value = value.replace(/\D/g, "");
    value = value.substring(0, 16);
    const formatted = value.match(/.{1,4}/g)?.join(" ") || value;
    dispatch(setCardDetails({ cardNumber: formatted }));
    
    if (value.length === 16) {
      setErrors({ ...errors, cardNumber: "" });
    }
  };

  const handleCardHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    dispatch(setCardDetails({ cardHolderName: value }));
    
    if (value.trim().length >= 3) {
      setErrors({ ...errors, cardHolderName: "" });
    }
  };

  const handleExpiryMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCardDetails({ expiryMonth: e.target.value }));
    setErrors({ ...errors, expiryMonth: "" });
  };

  const handleExpiryYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCardDetails({ expiryYear: e.target.value }));
    setErrors({ ...errors, expiryYear: "" });
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").substring(0, 4);
    dispatch(setCardDetails({ cvv: value }));
    
    if (value.length >= 3) {
      setErrors({ ...errors, cvv: "" });
    }
  };

  const months = [
    { value: "", label: "Month" },
    { value: "01", label: "01 - January" },
    { value: "02", label: "02 - February" },
    { value: "03", label: "03 - March" },
    { value: "04", label: "04 - April" },
    { value: "05", label: "05 - May" },
    { value: "06", label: "06 - June" },
    { value: "07", label: "07 - July" },
    { value: "08", label: "08 - August" },
    { value: "09", label: "09 - September" },
    { value: "10", label: "10 - October" },
    { value: "11", label: "11 - November" },
    { value: "12", label: "12 - December" },
  ];

  const currentYear = new Date().getFullYear();
  const years = [
    { value: "", label: "Year" },
    ...Array.from({ length: 15 }, (_, i) => ({
      value: String(currentYear + i),
      label: String(currentYear + i),
    })),
  ];

  return (
    <div className="bg-white border-2 border-border-default rounded-checkout-card p-6 mt-4">
      <h3 className="text-base font-semibold text-checkout-gray-900 mb-4">
        Card Details
      </h3>

      <div className="space-y-4">
        {/* Card Number */}
        <div>
          <label className="block text-sm font-medium text-checkout-gray-900 mb-2">
            Card Number <span className="text-saya-red">*</span>
          </label>
          <input
            type="text"
            value={cardDetails.cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            className={`w-full px-4 py-3 border rounded-checkout-button text-base focus:outline-none focus:ring-2 focus:ring-alibaba-orange focus:border-transparent transition-all ${
              errors.cardNumber
                ? "border-saya-red"
                : "border-checkout-gray-300"
            }`}
            maxLength={19}
          />
          {errors.cardNumber && (
            <p className="text-sm text-saya-red mt-1">{errors.cardNumber}</p>
          )}
        </div>

        {/* Card Holder Name */}
        <div>
          <label className="block text-sm font-medium text-checkout-gray-900 mb-2">
            Card Holder Name <span className="text-saya-red">*</span>
          </label>
          <input
            type="text"
            value={cardDetails.cardHolderName}
            onChange={handleCardHolderChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 border rounded-checkout-button text-base focus:outline-none focus:ring-2 focus:ring-alibaba-orange focus:border-transparent transition-all ${
              errors.cardHolderName
                ? "border-saya-red"
                : "border-checkout-gray-300"
            }`}
          />
          {errors.cardHolderName && (
            <p className="text-sm text-saya-red mt-1">{errors.cardHolderName}</p>
          )}
        </div>

        {/* Expiry Date and CVV */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Expiry Month */}
          <div>
            <label className="block text-sm font-medium text-checkout-gray-900 mb-2">
              Expiry Month <span className="text-saya-red">*</span>
            </label>
            <select
              value={cardDetails.expiryMonth}
              onChange={handleExpiryMonthChange}
              className={`w-full px-4 py-3 border rounded-checkout-button text-base focus:outline-none focus:ring-2 focus:ring-alibaba-orange focus:border-transparent transition-all ${
                errors.expiryMonth
                  ? "border-saya-red"
                  : "border-checkout-gray-300"
              }`}
            >
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
            {errors.expiryMonth && (
              <p className="text-sm text-saya-red mt-1">{errors.expiryMonth}</p>
            )}
          </div>

          {/* Expiry Year */}
          <div>
            <label className="block text-sm font-medium text-checkout-gray-900 mb-2">
              Expiry Year <span className="text-saya-red">*</span>
            </label>
            <select
              value={cardDetails.expiryYear}
              onChange={handleExpiryYearChange}
              className={`w-full px-4 py-3 border rounded-checkout-button text-base focus:outline-none focus:ring-2 focus:ring-alibaba-orange focus:border-transparent transition-all ${
                errors.expiryYear
                  ? "border-saya-red"
                  : "border-checkout-gray-300"
              }`}
            >
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
            {errors.expiryYear && (
              <p className="text-sm text-saya-red mt-1">{errors.expiryYear}</p>
            )}
          </div>

          {/* CVV */}
          <div>
            <label className="block text-sm font-medium text-checkout-gray-900 mb-2">
              CVV <span className="text-saya-red">*</span>
            </label>
            <input
              type="text"
              value={cardDetails.cvv}
              onChange={handleCvvChange}
              placeholder="123"
              className={`w-full px-4 py-3 border rounded-checkout-button text-base focus:outline-none focus:ring-2 focus:ring-alibaba-orange focus:border-transparent transition-all ${
                errors.cvv ? "border-saya-red" : "border-checkout-gray-300"
              }`}
              maxLength={4}
            />
            {errors.cvv && (
              <p className="text-sm text-saya-red mt-1">{errors.cvv}</p>
            )}
          </div>
        </div>

        {/* Security Note */}
        <div className="flex items-start gap-2 bg-security-green-light p-3 rounded-checkout-badge mt-4">
          <svg
            className="w-5 h-5 text-security-green flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <p className="text-sm text-checkout-gray-900">
            Your payment information is encrypted and secure. We never store your
            full card details.
          </p>
        </div>
      </div>
    </div>
  );
}