import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.cartItems.find(
        (item) => item.id === id
      );

      if (item) {
        if (quantity <= 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== id
          );
        } else {
          item.quantity = quantity;
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
