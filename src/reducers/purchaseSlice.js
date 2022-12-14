import { createSlice } from "@reduxjs/toolkit";
import {
  addItem as addItemHandler,
  clearEntry as clearEntryHandler,
} from "./purchaseHandlers";

const initialState = {
  customer: "Walk-in Customer",
  specs: {
    items: [],
    total: 0,
  },
  history: [],
  showDS: false,
};

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    addItem: (state, action) => addItemHandler(state, action.payload),
    clearEntry: (state) => clearEntryHandler(state, initialState),
    cancelAll: () => initialState,
    addCustomer: (state, action) => {
      state.customer = action.payload;
    },
    showDs: (state) => {
      state.showDS = true;
    },
    hideDs: (state) => {
      state.showDS = false;
    },
  },
});

export const { addCustomer, cancelAll, hideDs, showDs, addItem, clearEntry } =
  purchaseSlice.actions;

export default purchaseSlice.reducer;
