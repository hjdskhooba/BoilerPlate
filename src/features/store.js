import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Products";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
