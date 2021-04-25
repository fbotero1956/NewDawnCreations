import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";

class Product extends Component {
  state = {
    title: "Wood and Resin",
    price: 5,
    total:  0, 
  };

  render() {
    return (
      <div className="product-container">
        <img src="https://picsum.photos/id/237/180/300" alt="product"/>
        <h5>{this.state.title}</h5>
        <p>Price $ {this.state.price}  </p>
        <p>Total $ {this.state.total} </p>
        <div className="qp-button">
            <QuantityPicker></QuantityPicker>
            <button className="btn btn-sm btn-info" onClick={this.addToCart}>
            <i class="fa fa-cart-plus" aria-hidden="true"></i> Add
        </button>
        </div>
      </div>
    );
  }
  addToCart = () => {
    // add to cart logic
  };
}

export default Product;


// <img src="https://picsum.photos/id/237/180/300" alt="product"/>