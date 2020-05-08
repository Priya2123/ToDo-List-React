import React, { Component } from 'react';
import '../src/app.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newItem:'',
      list: []
    }
  };
  updateInput(key , value){
    this.setState({
      [key] : value
    })
  }
  addItem(){
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      newItem: "",
      list
    })
  }
  deleteItem(id){
    const list = [...this.state.list];
    const updateList = list.filter(item => item.id !== id);
    this.setState({
      list: updateList
    })
  }
  render(){
    return(
      <div className="app" style={{border: '3px solid pink'}}>
      <h1>ToDo List</h1>
        <h3>Add Item Here...</h3>
        <br />
        <input type="text" placeholder="Type Item Here.." value={this.state.newItem} 
        onChange={e => this.updateInput('newItem', e.target.value)}/>
        <br />
        <button className="add" onClick={() => this.addItem()}>Add</button>
        <br />
        <div className="container">
        <ul style={{justifyContent: 'center'}}>
          {this.state.list.map(item => {
            return(
            <li key={item.id} style={{justifyContent: 'center'}}>
              {item.value}
              <button className="btn" onClick={() => this.deleteItem(item.id)} style={{marginLeft: '3%'}}>X</button>
            </li>
            )
          })}
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
