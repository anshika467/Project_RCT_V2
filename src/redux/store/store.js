import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../slice/apiSlice.js";
import counterReducer from "../slice/counterSlice.js";

const store = configureStore({
  reducer: {
    numbers: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
