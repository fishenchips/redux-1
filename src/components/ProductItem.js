import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "./../store/cart-slice";

function ProductItem(props) {
  const dispatch = useDispatch();

  //in here im dispatching an item
  const addToCart = () => {
    //cartSlice (actions) has a method, addItemToCart that needs () in order to work
    dispatch(
      //add the object with respective properties when dispatched
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
  };

  return (
    <li key={props.id}>
      <div>
        <h4>{props.title} </h4>
        <p>{props.price} kr</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </li>
  );
}

export default ProductItem;
