import React from "react";
import GroceryList from "./GroceryList";
import NewGroceryItem from "./NewGroceryItem";
import ShoppingCart from "./ShoppingCart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {
        name: "",
      },
      groceryItems: [{ name: "milk" }, { name: "bread" }, { name: "eggs" }],
      shoppingCart: [],
    };
  }

  empty() {}

  handleDeleteAll(event) {
    this.setState({
      groceryItems: [],
    });
    if (this.state.groceryItems.length === 0) {
      return (event.target.hidden = false);
    } else {
      return (event.target.hidden = true);
    }
  }

  handleDelete(event) {
    var updatedList = this.state.groceryItems.filter(
      (item) => item.name !== event.target.name
    );
    this.setState({
      groceryItems: updatedList,
    });
  }

  isSelected(event) {
    var updatedList = this.state.groceryItems.filter(
      (item) => item.name !== event.target.name
    );
    this.setState({
      shoppingCart: this.state.shoppingCart.concat({ name: event.target.name }),
      groceryItems: updatedList,
    });
  }

  handleChange(event) {
    if (!event.target.value) {
      return;
    }
    this.setState({
      currentItem: {
        name: event.target.value,
      },
    });
  }

  handleSubmit(event) {
    if (this.state.currentItem.name.length === 0) {
      return;
    }
    this.setState({
      groceryItems: this.state.groceryItems.concat(this.state.currentItem),
      currentItem: {
        name: "",
      },
    });
    event.preventDefault();
    if (this.state.groceryItems.length === 0) {
      return (document.getElementById("Delete All").hidden = false);
    }
  }

  render() {
    return (
      <div className="App">
        <GroceryList
          groceries={this.state.groceryItems}
          onClick={this.isSelected.bind(this)}
          onDelete={this.handleDelete.bind(this)}
          onDeleteAll={this.handleDeleteAll.bind(this)}
        />
        <NewGroceryItem
          onChange={this.handleChange.bind(this)}
          onSubmit={this.handleSubmit.bind(this)}
        />
        <ShoppingCart groceries={this.state.shoppingCart} />
      </div>
    );
  }
}

export default App;
