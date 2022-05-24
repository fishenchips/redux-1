import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  //needs an initial state object
  initialState: {
    items: [],
    totalQty: 0,
  },
  //map of methods that represent all cases we wanna handle
  reducers: {
    //also need the action argument, because when it is dispatched, it needs extra information
    // we need to know which item should be added
    addItemToCart(state, action) {
      // payload property that redux/toolkit sets for us, that contain any extra data we add to the action
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      //increase total cartQty by 1
      state.totalQty++;

      //when adding an item
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.pice,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++,
          (existingItem.totalPrice = existingItem.totalPrice + newItem.price);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
