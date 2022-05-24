import React from "react";
//useDispatch used for triggering cart to show/close, and useSelector will update the state and ui (value) of total cartQty
import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../store/ui-slice";

function CartBtn() {
  //used to apply actions
  const dispatch = useDispatch();

  //name of cartSlice = cart, which has a property of totalQty
  const cartQty = useSelector((state) => state.cart.totalQty);

  const toggleCart = () => {
    //want to dispatch an action, specifically open/close cart - Reducer called "toggle"
    //HAVE TO EXCECUTE TOGGLE - so they return an action object that is then dispatched.
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={toggleCart}>
      <p>Cart</p>
      <p>{cartQty} </p>
    </button>
  );
}

export default CartBtn;
