import { initialState } from "../context/Purchase";
import { clearEntry, addItem } from "./purchaseHandlers";

//   STATE STRUCTURE
/*
    customer: "Walk-in Customer",
  {
    purchase_specs: {
    item_list: [],
    tot_purchase: 0,
  },
  history: []
}
*/

function purchase(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return addItem(state, payload);
    case "CLEAR_ENTRY":
      return clearEntry(state, initialState);
    case "CANCEL_ALL":
      return initialState;
    case "ADD_CUSTOMER":
      return { ...state, customer: payload };
    case "SHOW_DS":
      return { ...state, showDs: !state.showDs };
    default:
      throw new Error(`${type} action is not valid`);
  }
}

export default purchase;
