import React, { Component } from "react";
import "./todo.css";
import PendingToDos from './pendingtodos';
import {connect} from 'react-redux';
import {addTodo, removeTodo} from '../store/actions';


class ToDo extends Component {
  state = {
    todoText: ''
    };
  constructor() {
    super();

    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }
  componentDidUpdate() {
    this.input.current.focus();
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-div">
                <h5>To Do List</h5>
                <h6>Add items</h6>
                <input 
                ref={this.input}
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
                <p>you have {this.props.todoItems.length} pending tasks</p>
                {this.props.todoItems.map( (item, index) =>  
                <PendingToDos key={index} data = {item} index={index} 
                deleteToDo ={this.deleteToDo}></PendingToDos>)}
            </div>
        </div>
    );

  };
  onTextChange = (event) =>{
      this.setState({todoText: event.target.value});
  };
  addToDo = () => {
    //dispatch the action
    this.props.addTodo(this.state.todoText);
    this.setState({todoText: ''});
  };
  deleteToDo = (item) => {
   this.props.removeTodo(item);
  };
}
const mapStateToProps = (state) => {
  return{
    todoItems: state.todo
  };
};

export default connect(mapStateToProps,{addTodo, removeTodo})(ToDo);