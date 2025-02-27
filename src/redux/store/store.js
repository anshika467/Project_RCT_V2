import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../slice/apiSlice.js";
import counterReducer from "../slice/counterSlice.js";
import postApiSlice from "../slice/postApiSlice.js";

const store = configureStore({
  reducer: {
    numbers: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [postApiSlice.reducerPath]: postApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, postApiSlice.middleware),
});

export default store;
