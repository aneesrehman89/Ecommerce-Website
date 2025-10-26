"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { removeFromCart, updateQuantity } from "../../slices/cartSlice";
import CloseIcon from "../icons/CloseIcon";
import CartIcon from "../icons/CartIcon";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    // TODO: Implement checkout logic
    alert("Proceeding to checkout...");
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price || 0) * item.quantity;
  }, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-gray-50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
            <div className="flex items-center gap-2">
              <CartIcon width={24} height={24} color="#1a1a1a" />
              <h2 className="text-lg font-semibold text-gray-900">
                Shopping Cart ({cartItems.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close cart"
            >
              <CloseIcon width={20} height={20} color="#374151" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <CartIcon width={64} height={64} color="#d1d5db" />
                <p className="mt-4 text-gray-500">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={`${item.productId}-${item.size}-${item.color}`}
                  id={item.productId}
                  name={item.name || "Product"}
                  price={item.price || 0}
                  originalPrice={item.originalPrice}
                  quantity={item.quantity}
                  image={item.image || "/placeholder.png"}
                  onQuantityChange={(quantity) =>
                    handleQuantityChange(item.productId, quantity)
                  }
                  onRemove={() => handleRemove(item.productId)}
                />
              ))
            )}
          </div>

          {/* Summary */}
          {cartItems.length > 0 && (
            <div className="p-4 bg-white border-t border-gray-200">
              <CartSummary subtotal={subtotal} onCheckout={handleCheckout} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}