import { configureStore } from "@reduxjs/toolkit";

import purchaseReducer from "../reducers/purchaseSlice";

export default configureStore({
  reducer: {
    purchase: purchaseReducer,
  },
});
