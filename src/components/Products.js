import React from "react";
import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    price: 11,
    title: "Pepsi Max",
  },
  {
    id: 2,
    price: 20,
    title: "Heinz Ketchup",
  },
];

function Products() {
  return (
    <section>
      <h3>Available Products:</h3>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            //need to for the object to be added
            id={product.id}
            key={product.id}
            price={product.price}
            title={product.title}
          />
        ))}
      </ul>
    </section>
  );
}

export default Products;
