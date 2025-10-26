import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  productId: string;
  title?: string;
  name?: string;
  color?: string;
  fabric?: string;
  image?: string;
  size?: string;
  price: number;
  originalPrice?: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface AddToCartPayload {
  productId: string;
  quantity: number;
  size?: string;
  color?: string;
  fabric?: string;
  title?: string;
  name?: string;
  price: number;
  originalPrice?: number;
  image?: string;
}

interface UpdateQuantityPayload {
  productId: string;
  quantity: number;
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const { productId, quantity, size, color, fabric, title, name, price, originalPrice, image } = action.payload;
      const existingItem: CartItem | undefined = state.items.find(
        (item) =>
          item.productId === productId &&
          item.size === size &&
          item.color === color &&
          item.fabric === fabric
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          productId,
          quantity,
          size,
          color,
          fabric,
          title,
          name,
          price,
          originalPrice,
          image,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.productId !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { productId, quantity } = action.payload;
      const item: CartItem | undefined = state.items.find((item) => item.productId === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;