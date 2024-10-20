import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state.pop(action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;
