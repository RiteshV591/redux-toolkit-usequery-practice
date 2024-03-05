import AccountReducer from "./Features/Accounts/AccountSlice";
import { CustomerReducer } from "./Features/Customers/CustomerSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    account: AccountReducer,
    customer: CustomerReducer,
  },
});
