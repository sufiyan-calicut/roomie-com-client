import { createSlice } from "@reduxjs/toolkit";

const valueSlice = createSlice({
  name: "value",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return state + 1;
    },
    decrement: (state, action) => {
      return state - 1;
    },
  },
});

//  actions alredy toolkit eyudhivechitund console cheydhl ariyam just use cheydhal madhi

export const { increment, decrement } = valueSlice.actions;

export default valueSlice.reducer;
