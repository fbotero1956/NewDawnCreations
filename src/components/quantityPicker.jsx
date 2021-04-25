import React, { Component } from "react";
import "./quantitypicker.css";

class QuantityPicker extends Component {
  state = {
    name: "Felipe",
    quantity: 1,
  };
  render() {
    return (
      <div className="qp-page">
        <button className="btn btn-sm btn-info" onClick={this.increase}>
          +
        </button>
        <label>{this.state.quantity}</label>
        <button className="btn btn-sm btn-info" onClick={this.decrease}>
          -
        </button>
      </div>
    );
  }
  increase = () => {
    this.setState({ quantity: this.state.quantity + 1 });
    console.log("add 1 to quantity");
  };
  decrease = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
    console.log("subtract 1 from quantity");
  };
}

export default QuantityPicker;
