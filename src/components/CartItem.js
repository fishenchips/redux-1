import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../store/cart-slice";

function CartItem(props) {
  //dispatching action by adding / removing items from cart
  const dispatch = useDispatch();

  const addToCart = () => {
    //want a payload in EXISTING ITEM
    dispatch(
      cartActions.addItemToCart({
        id: props.item.id,
        title: props.item.name,
        price: props.item.price,
      })
    );
  };

  const removeFromCart = () => {
    //want a payload IN ID!!
    dispatch(cartActions.removeItemFromCart(props.item.id));
  };
  return (
    <li>
      {/* Title is the property */}
      <p>name: {props.item.title}</p>
      <p>qty: {props.item.quantity}</p>
      <p>total:{props.item.totalPrice}</p>
      <p>per product:{props.item.price}</p>
      <button onClick={addToCart}>+</button>
      <button onClick={removeFromCart}>-</button>
    </li>
  );
}

export default CartItem;
