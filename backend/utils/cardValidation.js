// Luhn algorithm for card number validation
export const validateCardNumber = (cardNumber) => {
  if (!cardNumber) return false;
  
  // Remove spaces and check if it's all digits
  const sanitized = cardNumber.replace(/\s/g, "");
  if (!/^\d{13,19}$/.test(sanitized)) return false;

  let sum = 0;
  let isEven = false;

  // Loop through values starting from the rightmost digit
  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

// Validate CVV
export const validateCVV = (cvv) => {
  if (!cvv) return false;
  return /^\d{3,4}$/.test(cvv);
};

// Validate expiry date
export const validateExpiryDate = (month, year) => {
  if (!month || !year) return false;

  const expMonth = parseInt(month, 10);
  const expYear = parseInt(year, 10);

  if (expMonth < 1 || expMonth > 12) return false;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  if (expYear < currentYear) return false;
  if (expYear === currentYear && expMonth < currentMonth) return false;

  return true;
};

// Get card type from card number
export const getCardType = (cardNumber) => {
  const sanitized = cardNumber.replace(/\s/g, "");

  const patterns = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
    discover: /^6(?:011|5)/,
    jcb: /^35/,
    diners: /^3(?:0[0-5]|[68])/,
  };

  for (const [type, pattern] of Object.entries(patterns)) {
    if (pattern.test(sanitized)) {
      return type;
    }
  }

  return "unknown";
};