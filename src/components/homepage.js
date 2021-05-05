import React, { Component } from "react";
import "./todo.css";
import {clearTodos} from '../store/actions';
import {connect} from 'react-redux';

class HomePage extends Component {


  render() {
    return (
    <div className="welcome-area">
   <div>

         <h1> Welcome to NewDawnCreations</h1>
         <img className="welcome-img" src="/images/products/tableandrocker.jpg" alt="product"/>      
    </div>
    <button 
    className="btn btn-warning"
    onClick ={() => this.props.clearTodos()}
    >
    Clear the To Do List
    </button>
    </div>
    );
  };

}

export default connect(null, {clearTodos}) (HomePage);