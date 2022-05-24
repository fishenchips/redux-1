import React from "react";

function ProductItem(props) {
  return (
    <li key={props.id}>
      <div>
        <h4>{props.title} </h4>
        <p>{props.price} kr</p>
      </div>
    </li>
  );
}

export default ProductItem;
