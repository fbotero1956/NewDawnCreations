import React, { Component } from "react";
import "./product.css";

import {connect} from 'react-redux';
import {removeFromCart} from '../store/actions';
import ProdInCart from '../components/prodInCart'


class Cart extends Component {
  state = {
    quantity: 1,
    total: 0
  };
 
  handleDelete = (item, index) => {      
    this.props.removeFromCart(item);
  };

  render() {
    return (
      <div className="cart-view product-area">
        <h2>Items in your cart:</h2>
        {this.props.prodItems.map( (item, index) => 
            <ProdInCart key={index} data= {item} index={index} handleDelete={this.handleDelete}></ProdInCart>
        )}
        <h5>Your total for this order is $ {this.calcTotal(this.props.prodItems)} </h5>
        <button className="btn btn-sm btn-warning">Checkout</button>
     </div>
    );
  };
getTotal = (item) => {
    var total = item.price * item.quantity;
    return total.toFixed(2);
};
calcTotal = (items) => {
    var total = 0;
    for (var i = 0; i < items.length; i++){
        total += items[i].price * items[i].quantity;
    };
    return total.toFixed(2);
};
};
const mapStateToProps = (state) => {
    return{
      prodItems: state.cart
    };
  };
export default connect(mapStateToProps,{removeFromCart})(Cart);