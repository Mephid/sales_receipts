export const clearEntry = () => ({ type: "CLEAR_ENTRY" });
export const cancelAll = () => ({ type: "CANCEL_ALL" });
export const addCustomer = (payload) => ({
  type: "ADD_CUSTOMER",
  payload: payload || "Walk-in Customer",
});
