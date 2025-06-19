import { create } from "zustand";

const cartStore = create((set) => ({
  orders: [],
  addToCart: (item) => {
    set((state) => {
      return { orders: [...state.orders, item] };
    });
  },
}));

export default cartStore;
