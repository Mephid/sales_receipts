import React, { useContext, useReducer, createContext } from "react";
import purchase from "../reducers/purchase";

const PurchaseContext = createContext();

export const initialState = {
  customer: "Walk-in Customer",
  purchase_specs: {
    item_list: [],
    tot_purchase: 0,
  },
  history: [],
  showDS: false,
};

function PurchaseProvider({ children }) {
  const [state, dispatch] = useReducer(purchase, initialState);
  return (
    <PurchaseContext.Provider value={{ state, dispatch }}>
      {children}
    </PurchaseContext.Provider>
  );
}

const usePurchase = () => useContext(PurchaseContext);

export { PurchaseProvider, usePurchase };
