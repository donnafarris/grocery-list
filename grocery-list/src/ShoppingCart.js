import React from "react";
import Item from "./Item.js";

function ShoppingCart(props) {
  return (
    <div>
      <h3>My Shopping Cart:</h3>
      <ul>
        {props.groceries.map((groceryItem) => (
          <li>
            {/* <input
              type="checkbox"
              id={groceryItem.name}
              name={groceryItem.name}
              onClick={props.onClick}
            /> */}
            <label htmlFor={groceryItem.name}>
              <Item item={groceryItem} />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
