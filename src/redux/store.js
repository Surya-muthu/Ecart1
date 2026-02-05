// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice"; // import the reducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other slices here later
  },
});
