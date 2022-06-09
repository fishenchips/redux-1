import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
  // initial state items = []
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              totalPrice: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
