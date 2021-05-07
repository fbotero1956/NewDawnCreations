import React, { Component } from "react";


class ProdInCart extends Component {
  state = {
    quantity: 1
  };

  render(props) {
    return (
    <div className="product-container" key={this.props.altindex}> 
        <h5 className="title">{this.props.data.title}</h5>
        <img src={"/images/products/" + this.props.data.image} alt="product"/>
        <p>Quantity: {this.props.data.quantity}</p>
        <p>Price $ {this.props.data.price}  </p>
        <p>Total $ {this.getTotal(this.props.data)} </p>
        <button className="todo-btn del-btn-view" onClick= {() => {this.handleDelete()}}><i className="fa fa-trash del-btn"></i></button>
    </div>
    );
  }
  handleDelete = () => {
    this.props.handleDelete(this.props.data);
  }
  getTotal = (item) => {
    var total = item.price * item.quantity;
    return total.toFixed(2);
  };

}

export default ProdInCart;