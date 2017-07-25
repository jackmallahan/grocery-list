import React from 'react'
import GroceryItem from './GroceryItem'
import InputArea from './InputArea'
import './App.css'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      groceryItems: []
    }
  }

  addItem() {
    this.setState({
      newItem: '',
      groceryItems: [...this.state.groceryItems, { name: this.state.newItem }]
    })
  }

  deleteItem(index) {
    this.state.groceryItems.splice(index, 1)

    this.setState({
      groceryItems: this.state.groceryItems
    })
  }

  handleChange(e) {
    this.setState({
      newItem: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <InputArea
          inputVal={this.state.newItem}
          handleChange={this.handleChange.bind(this)}
          handleBtnClick={this.addItem.bind(this)}
        />
        <ul>
          {
            this.state.groceryItems.map( (item, index) =>
            <GroceryItem
              name={item.name}
              handleClick={ () => { this.deleteItem(index) } }
            />
            )
          }
        </ul>

      </div>
    )
  }
}
