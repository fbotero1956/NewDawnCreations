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
      <div>
        <div className="todo-div">
                <h5 className="title">To Do List</h5>
                <input 
                value = {this.state.toDoText} 
                className="input" 
                type="text" 
                placeholder="enter todo here" 
                onChange={this.onTextChange}>
                </input>
                <button className="btn btn-sm btn-info" onClick={this.addToDo}>
                    Add To Do
                </button>
            </div>
            <div>
                <h5>Pending items</h5>
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
    this.setState({todoArray: tdArray, todoText: ""});
};
}

export default ToDo;
