import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nums: [10, 20],
};

const counterSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    add: (state) => {
      const num = Math.floor(Math.random() * 100);
      state.nums = [...state.nums, num];
    },
    remove: (state) => {
      state.nums.pop();
    },
    reset: (state) => {
      state.nums = [];
    },
  },
});

export const { add, remove, reset } = counterSlice.actions;

export default counterSlice.reducer;