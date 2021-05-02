import React, { Component } from "react";
import "./todo.css";

class HomePage extends Component {


  render() {
    return (
    <div className="welcome-area">
         <h1> Welcome to NewDawnCreations</h1>
         <img className="welcome-img" src="/images/products/tableandrocker.jpg" alt="product"/>      
    </div>
    );
  };

}

export default HomePage;