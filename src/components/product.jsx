import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
var quantity = 1;

class Product extends Component {
  state = {
    title: "Wood and Resin",
    price: 5,
    total:  0, 
  };

  render() {
    return (
      <div className="product-container">
        <img src={"/images/products/" + this.props.data.image} alt="product"/>
        <h5 className="title">{this.props.data.title}</h5>
        <p>Price $ {this.props.data.price}  </p>
        <p>Total $ {this.props.data.price * quantity} </p>
        <div className="qp-button">
            <QuantityPicker props={quantity}></QuantityPicker>
            <button className="btn btn-sm btn-info" onClick={this.addToCart}>
            <i className="fa fa-cart-plus" aria-hidden="true"></i> Add
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