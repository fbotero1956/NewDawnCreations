import React, { Component } from "react";
import "./todo.css";
import PendingToDos from './pendingtodos';


class ToDo extends Component {
  state = {
    todoText: '',
    todoArray: []
  };


  render() {
    return (
      <div className="todo-container">
        <div className="todo-div">
                <h5>To Do List</h5>
                <h6>Add items</h6>
                <input 
                value = {this.state.todoText} 
                className="input" 
                type="text" 
                placeholder="enter to do item here" 
                onChange={this.onTextChange}>
                </input>
                <button className="btn btn-sm btn-info btn-todo" onClick={this.addToDo}>
                    Add Item
                </button>
            </div>
            <div>
                <h6>Pending items</h6>
                <p>you have {this.state.todoArray.length} pending tasks</p>
                {this.state.todoArray.map( item =>  
                <PendingToDos key={item.id} data = {item}></PendingToDos>)}
            </div>
        </div>
    );

  };
  onTextChange = (event) =>{
      this.setState({todoText: event.target.value});
  };
  addToDo = () => {
    var tdArray = this.state.todoArray;
    console.log(tdArray);
    tdArray.push(this.state.todoText);
    this.setState({todoArray: tdArray, todoText: ''});
};
}

export default ToDo;
