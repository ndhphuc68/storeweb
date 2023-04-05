import { createSlice } from "@reduxjs/toolkit";

export const customer = createSlice({
  name: "customer",
  initialState: {
    infoCustomer: {},
  },
  reducers: {
    getInfoCustomer(state, action) {
      state.infoCustomer = action.payload;
    },
    clearInfoCustomer(state) {
      state.infoCustomer = {};
    },
  },
});

export const { getInfoCustomer, clearInfoCustomer } = customer.actions;
export default customer.reducer;
