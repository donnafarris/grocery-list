import React from "react";
import Item from "./Item.js";
import "./App.css";

function GroceryList(props) {
  return (
    <div>
      <h3>My Shopping List:</h3>
      {props.groceries.map((groceryItem) => (
        <li>
          <button
            type="button"
            onClick={props.onDelete}
            name={groceryItem.name}
          >
            Delete Item
          </button>
          <input
            type="checkbox"
            id={groceryItem.name}
            name={groceryItem.name}
            onClick={props.onClick}
          />
          <label htmlFor={groceryItem.name}>
            <Item item={groceryItem} />
          </label>
          
        </li>
      ))}
      <button
        hidden={false}
        type="button"
        onClick={props.onDeleteAll}
        id="Delete All"
      >
        Delete All
      </button>
    </div>
  );
}

export default GroceryList;
