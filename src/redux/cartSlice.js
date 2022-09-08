import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0
  },
  reducers: {
    addProduct: (state, action) => {
      const item = action.payload;
      const index = state.items.findIndex(
        it => it.product.id === item.product.id
      );
      const newItems = [...state.items];
      const totalPrice = state.totalPrice + item.product.price;

      if (item && item.quantity > 0) {
        if (index !== -1) {
          newItems[index] = { ...item };
        } else {
          newItems.push({ ...item });
        }
        return { ...state, items: newItems, totalPrice };
      }
    },
    removeProduct: (state, action) => {
      const item = action.payload;
      const index = state.items.findIndex(
        it => it.product.id === item.product.id
      );
      const items = [...state.items];
      const totalPrice = state.totalPrice - item.product.price;

      if (item && item.quantity > 0) {
        if (index !== -1) {
          items[index] = { ...item };
        } else {
          console.log("cannot be removed again, item is already removed");
        }
        return { ...state, items: items, totalPrice };
      } else {
        const removedItem = items.filter(e => {
          return e.product.id !== item.product.id;
        });
        return { ...state, items: removedItem, totalPrice };
      }
    }
  }
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartTotalPrice = state => state.cart.totalPrice;
export default cartSlice.reducer;
