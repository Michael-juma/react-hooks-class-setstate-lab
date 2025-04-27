import React, { useState } from "react";

function Item({ name, category }) {
  // Create a state variable for whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Event handler to toggle the item in and out of the cart
  const handleAddToCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;