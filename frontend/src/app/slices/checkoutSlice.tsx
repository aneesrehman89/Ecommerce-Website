import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { PaymentMethod } from "../types/checkout";

export interface CheckoutState {
  selectedPaymentMethod: PaymentMethod | null;
  payFromCountry: string;
  isProcessing: boolean;
}

const initialState: CheckoutState = {
  selectedPaymentMethod: PaymentMethod.GOOGLE_PAY,
  payFromCountry: "GB",
  isProcessing: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setSelectedPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      state.selectedPaymentMethod = action.payload;
    },
    setPayFromCountry: (state, action: PayloadAction<string>) => {
      state.payFromCountry = action.payload;
    },
    setProcessing: (state, action: PayloadAction<boolean>) => {
      state.isProcessing = action.payload;
    },
    resetCheckout: (state) => {
      state.selectedPaymentMethod = PaymentMethod.GOOGLE_PAY;
      state.payFromCountry = "GB";
      state.isProcessing = false;
    },
  },
});

export const {
  setSelectedPaymentMethod,
  setPayFromCountry,
  setProcessing,
  resetCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;