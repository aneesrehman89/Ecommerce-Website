import { PaymentMethod, Currency } from '../types/checkout';

// Data passed as props to the root component
export const mockRootProps = {
  
  orderDetails: {
    orderNumber: "140578887001028745" as const,
    productName: "2021 Customized Students Bags ..." as const,
    productImage: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHN0dWRlbnQlMjBiYWclMjBzY2hvb2wlMjBiYWd8ZW58MHwyfHx8MTc2MTU4MjE2MHww&ixlib=rb-4.1.0&q=85" as const,
    quantity: 22 as const,
    unitPrice: 10.37 as const,
    unitCurrency: Currency.USD,
    productAmount: 241.34 as const,
    productAmountCurrency: Currency.USD,
    logisticsFee: 74.00 as const,
    logisticsFeeCurrency: Currency.USD,
    orderAmount: 251.52 as const,
    orderAmountCurrency: Currency.GBP,
    transactionFee: 7.53 as const,
    transactionFeeCurrency: Currency.GBP,
    exchangeRate: 0.797597 as const,
    fromCurrency: Currency.USD,
    toCurrency: Currency.GBP,
    paymentCurrency: Currency.GBP,
    totalAmount: 259.05 as const
  },


  paymentMethods: [
    {
      id: PaymentMethod.CREDIT_DEBIT_CARD,
      name: "Credit/Debit Card" as const,
      logos: ["visa", "mastercard", "amex", "discover", "jcb", "diners"] as const,
      enabled: true as const
    },
    {
      id: PaymentMethod.PAYPAL,
      name: "PayPal" as const,
      enabled: true as const
    },
    {
      id: PaymentMethod.APPLE_PAY,
      name: "Apple Pay" as const,
      description: "You need an iPhone to complete the payment" as const,
      enabled: true as const
    },
    {
      id: PaymentMethod.WIRE_TRANSFER,
      name: "Wire Transfer" as const,
      description: "Make payment to Alibaba.com's supplier account, secured by Trade Assurance" as const,
      enabled: true as const
    },
    {
      id: PaymentMethod.TRUSTLY,
      name: "Trustly" as const,
      description: "Personal bank account only" as const,
      enabled: true as const
    },
    {
      id: PaymentMethod.GOOGLE_PAY,
      name: "Google Pay" as const,
      fundingTime: "1-2 hours" as const,
      enabled: true as const,
      selected: true as const
    }
  ],

  payFromCountry: {
    name: "United Kingdom" as const,
    code: "GB" as const,
    flagUrl: "" as const
  }
};