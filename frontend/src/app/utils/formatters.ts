import { Currency } from '../types/checkout';

// Format currency with symbol and amount
export const formatCurrency = (amount: number, currency: Currency): string => {
  const symbols: Record<Currency, string> = {
    [Currency.USD]: 'USD',
    [Currency.GBP]: 'GBP',
    [Currency.EUR]: 'EUR'
  };
  return `${symbols[currency]} ${amount.toFixed(2)}`;
};

// Format exchange rate
export const formatExchangeRate = (fromCurrency: Currency, toCurrency: Currency, rate: number): string => {
  return `${fromCurrency} 1 = ${toCurrency} ${rate.toFixed(6)}`;
};

// Format order number
export const formatOrderNumber = (orderNo: string): string => {
  return `Order No. ${orderNo}`;
};

// Format time duration
export const formatDuration = (hours: string): string => {
  return `${hours} hours`;
};