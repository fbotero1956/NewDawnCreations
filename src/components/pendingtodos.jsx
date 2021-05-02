import React, { Component } from "react";
import "./pendingtodos.css";



class PendingToDos extends Component {
  state = {
    quantity: 1
  };

  render(props) {
    return (
      <div className="pendingTodos" key={this.props.index}>   
        <p className="title todo-task" >{this.props.data}</p>
        <button className="todo-btn" onClick= {this.deleteToDo}><i class="fa fa-trash"></i></button>
      </div>
    );
  }
  deleteToDo = () => {
    this.props.deleteToDo(this.props.index)
  }

}

export default PendingToDos;