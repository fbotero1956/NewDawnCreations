import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import {connect} from 'react-redux';
import {addToCart} from '../store/actions';


class Product extends Component {
  state = {
    quantity: 1
  };

  render() {
    return (
      <div className="product-container">
        <img src={"/images/products/" + this.props.data.image} alt="product"/>
        <h5 className="title">{this.props.data.title}</h5>
        <p>Price $ {this.props.data.price}  </p>
        <p>Total $ {this.getTotal()} </p>
        <div className="qp-button">
            <QuantityPicker 
            minimum={this.props.data.minimum || 1}
            onValueChange={this.calcTotal}
            ></QuantityPicker>
            <button className="btn btn-sm btn-info" onClick={this.addToCart}>
            <i className="fa fa-cart-plus" aria-hidden="true"></i> Add
          </button>
        </div>
      </div>
    );
  }
  getTotal = () => {
    var total = this.props.data.price * this.state.quantity;
    return total.toFixed(2);
  }
  calcTotal = (newQuantity) => {
    this.setState({quantity: newQuantity})
  }
  addToCart = () => {
    // add to cart logic
    var item = {...this.props.data};
    item.quantity = this.state.quantity;

    this.props.addToCart(item);
  };
}

export default connect(null,{addToCart})(Product);
