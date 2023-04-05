import { configureStore } from "@reduxjs/toolkit";
import Customer from "./Customer/index";

export const store = configureStore({
  reducer: {
    customer: Customer,
  },
});
