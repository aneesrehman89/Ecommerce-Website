"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { setSelectedPaymentMethod, setPayFromCountry, setProcessing } from "../slices/checkoutSlice";
import type { PaymentMethod } from "../types/checkout";
import CheckoutHeader from "../components/checkout/CheckoutHeader";
import PaymentMethodList from "../components/checkout/PaymentMethodList";
import OrderSummaryCard from "../components/checkout/OrderSummaryCard";
import SecurityBadges from "../components/checkout/SecurityBadges";
import { mockRootProps } from "./checkoutMockData";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const { selectedPaymentMethod, payFromCountry, isProcessing } = useSelector(
    (state: RootState) => state.checkout
  );

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    dispatch(setSelectedPaymentMethod(method));
  };

  const handleCountryChange = (countryCode: string) => {
    dispatch(setPayFromCountry(countryCode));
  };

  const handlePayNow = () => {
    dispatch(setProcessing(true));
    // Simulate payment processing
    setTimeout(() => {
      dispatch(setProcessing(false));
      alert("Payment processed successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-checkout-gray-50">
      {/* Header */}
      {/* <CheckoutHeader
        countryName={mockRootProps.payFromCountry.name}
        countryCode={mockRootProps.payFromCountry.code}
        onCountryChange={handleCountryChange}
      /> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Payment Methods */}
          <div className="lg:col-span-2 space-y-6">
            <PaymentMethodList
              paymentMethods={mockRootProps.paymentMethods}
              selectedMethod={selectedPaymentMethod}
              onSelectMethod={handlePaymentMethodChange}
            />

            {/* Security Badges */}
            <SecurityBadges />
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummaryCard
              orderDetails={mockRootProps.orderDetails}
              onPayNow={handlePayNow}
              isProcessing={isProcessing}
            />
          </div>
        </div>
      </div>
    </div>
  );
}