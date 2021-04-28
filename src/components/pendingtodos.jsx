import React, { Component } from "react";
import "./pendingtodos.css";



class PendingToDos extends Component {
  state = {
    quantity: 1
  };

  render() {
    return (
      <div className="pendingTodos">   
        <p className="title">{this.props.data}</p>
      </div>
    );
  }

}

export default PendingToDos;