import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { budgetApi } from "./budgetApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [budgetApi.reducerPath]: budgetApi.reducer
  },
  middleware: (getDefault) => getDefault().concat(budgetApi.middleware)
});
