# Payment Integration Guide

## Current Implementation

Currently, the payment system is set up to:
1. **Validate** card details on the frontend and backend
2. **Store** payment records in your MongoDB database
3. **Simulate** successful payment processing

## Where Payments Go

Right now, payments are **NOT actually processed** through a real payment gateway. The system:
- Validates the card information
- Stores the transaction in your database with status "completed"
- Returns a success message

**IMPORTANT**: No actual money is transferred. This is a simulation for development purposes.

## Integrating with Real Payment Gateways for Pakistan

To process real payments in Pakistan (PKR), you need to integrate with a payment gateway. Here are the recommended options:

### 1. **JazzCash** (Recommended for Pakistan)
- Popular in Pakistan
- Supports PKR
- Good for local payments

**Integration Steps:**
1. Sign up at https://jazzcash.com.pk/
2. Get API credentials (Merchant ID, Password, Integrity Salt)
3. Install their SDK or use REST API
4. Update `backend/controllers/paymentController.js` to call JazzCash API

**Example Integration:**
```javascript
// In processPayment function, replace the simulation with:
const jazzcashResponse = await axios.post('https://payments.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/', {
  pp_MerchantID: process.env.JAZZCASH_MERCHANT_ID,
  pp_Password: process.env.JAZZCASH_PASSWORD,
  pp_TxnRefNo: transactionId,
  pp_Amount: orderDetails.totalAmount * 100, // Convert to paisa
  pp_TxnCurrency: 'PKR',
  // ... other required fields
});
```

### 2. **EasyPaisa**
- Another popular option in Pakistan
- Supports PKR
- Mobile wallet integration

**Integration Steps:**
1. Sign up at https://easypaisa.com.pk/
2. Get merchant account and API credentials
3. Use their API for payment processing

### 3. **Stripe** (International)
- Supports PKR
- More international features
- Better for global customers

**Integration Steps:**
```bash
npm install stripe
```

```javascript
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// In processPayment function:
const paymentIntent = await stripe.paymentIntents.create({
  amount: orderDetails.totalAmount * 100, // Convert to paisa
  currency: 'pkr',
  payment_method_types: ['card'],
  description: `Order ${orderDetails.orderNumber}`,
});
```

### 4. **PayFast** (Pakistan)
- Local payment gateway
- Supports multiple payment methods

## Implementation Steps

### Step 1: Choose a Payment Gateway
Select one of the above based on your needs.

### Step 2: Get API Credentials
Sign up and get:
- Merchant ID
- API Key/Secret
- Webhook Secret (for payment confirmations)

### Step 3: Update Environment Variables
Add to `backend/.env`:
```env
PAYMENT_GATEWAY=jazzcash
JAZZCASH_MERCHANT_ID=your_merchant_id
JAZZCASH_PASSWORD=your_password
JAZZCASH_INTEGRITY_SALT=your_salt
```

### Step 4: Update Payment Controller
Replace the simulation code in `backend/controllers/paymentController.js`:

```javascript
// Instead of:
const payment = await Payment.create({
  // ...
  status: "completed",
});

// Do:
const gatewayResponse = await processWithGateway(cardDetails, orderDetails);

if (gatewayResponse.success) {
  const payment = await Payment.create({
    // ...
    status: "completed",
    gatewayTransactionId: gatewayResponse.transactionId,
  });
} else {
  return res.status(400).json({
    success: false,
    message: gatewayResponse.error,
  });
}
```

### Step 5: Add Webhook Handler
Create `backend/routes/webhookRoutes.js` to handle payment confirmations:

```javascript
router.post('/payment-webhook', async (req, res) => {
  // Verify webhook signature
  // Update payment status in database
  // Send confirmation email to customer
});
```

## Security Considerations

1. **Never store full card numbers** - Only store last 4 digits (already implemented)
2. **Use HTTPS** in production
3. **Validate on both frontend and backend** (already implemented)
4. **Use environment variables** for API keys
5. **Implement rate limiting** to prevent abuse
6. **Add CSRF protection**
7. **Log all transactions** for audit trail

## Testing

### Test Cards (for development)
Most payment gateways provide test cards:

**JazzCash Test Cards:**
- Card: 5123456789012346
- Expiry: Any future date
- CVV: 123

**Stripe Test Cards:**
- Success: 4242 4242 4242 4242
- Decline: 4000 0000 0000 0002

## Current Database Schema

Payments are stored in MongoDB with this structure:
```javascript
{
  transactionId: "TXN1234567890ABC",
  orderId: "140578887001028745",
  cardHolderName: "John Doe",
  cardLastFourDigits: "1234",
  amount: 67580,
  currency: "PKR",
  country: "Pakistan",
  status: "completed",
  orderDetails: {
    productName: "...",
    quantity: 22,
    unitPrice: 2890,
    productAmount: 63580,
    logisticsFee: 2500,
    transactionFee: 1500
  },
  createdAt: "2024-01-15T10:30:00.000Z"
}
```

## Next Steps

1. Choose a payment gateway (JazzCash recommended for Pakistan)
2. Sign up and get credentials
3. Install required packages
4. Update payment controller with real gateway integration
5. Test with test cards
6. Go live with real credentials

## Support

For payment gateway specific issues:
- JazzCash: https://jazzcash.com.pk/support
- EasyPaisa: https://easypaisa.com.pk/support
- Stripe: https://stripe.com/docs

For code issues, check the backend logs in `backend/api/server.js`