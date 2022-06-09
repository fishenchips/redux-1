import React from "react";

function CartItem(props) {
  return (
    <li>
      {/* Title is the property */}
      <p>name: {props.item.title}</p>
      <p>qty: {props.item.quantity}</p>
      <p>total:{props.item.totalPrice}</p>
      <p>per product:{props.item.price}</p>
      <button>+</button>
      <button>-</button>
    </li>
  );
}

export default CartItem;
