

export interface OrderDetails {
  orderNumber: string;
  productName: string;
  productImage: string;
  quantity: number;
  unitPrice: number;
  unitCurrency: Currency;
  productAmount: number;
  productAmountCurrency: Currency;
  logisticsFee: number;
  logisticsFeeCurrency: Currency;
  orderAmount: number;
  orderAmountCurrency: Currency;
  transactionFee: number;
  transactionFeeCurrency: Currency;
  exchangeRate: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  paymentCurrency: Currency;
  totalAmount: number;
}

// Payment method types
export enum PaymentMethod {
  CREDIT_DEBIT_CARD = "credit_debit_card",
  PAYPAL = "paypal",
  APPLE_PAY = "apple_pay",
  WIRE_TRANSFER = "wire_transfer",
  TRUSTLY = "trustly",
  GOOGLE_PAY = "google_pay"
}

// Currency codes
export enum Currency {
  USD = "USD",
  GBP = "GBP",
  EUR = "EUR"
}


// Props types (data passed to components)
export interface CheckoutPageProps {
  orderDetails: OrderDetails;
  paymentMethods: PaymentMethodOption[];
  payFromCountry: CountryInfo;
  onPaymentMethodChange?: (methodId: PaymentMethod) => void;
  onCountryChange?: (countryCode: string) => void;
  onPayNow?: () => void;
}

export interface PaymentMethodOption {
  id: PaymentMethod;
  name: string;
  logos?: readonly string[];
  description?: string;
  fundingTime?: string;
  enabled: boolean;
  selected?: boolean;
}

export interface CountryInfo {
  name: string;
  code: string;
  flagUrl: string;
}

// Order status
export enum OrderStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  COMPLETED = "completed",
  FAILED = "failed"
}
