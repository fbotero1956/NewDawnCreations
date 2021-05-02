import React, { Component } from "react";
import "./todo.css";


class AtWork extends Component {
    state={
placeholder: ''
    }
   
render() {

    return (
    <div className="about-container">
        <h1>This is how the magic happens...</h1>
        <img className="about-img" src="/images/products/tableinprogress.jpg" alt="product"/>
    </div>
    );
  };
};

export default AtWork;