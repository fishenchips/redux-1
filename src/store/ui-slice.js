import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
  },
  //everything we want to handle should be here
  reducers: {
    toggle(state) {
      //show and hide depending on what is the current state
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

// will export uiActions to the button where it will be triggered by events
export const uiActions = uiSlice.actions;

//imported in store/index.js
export default uiSlice;
