import React, { Component } from "react";
import "./quantitypicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: this.props.minimum,
    value: false
  };
 
  render() {
    return (
      <div className="qp-page">
        <button className="btn btn-sm btn-info" onClick={this.increase}>
          +
        </button>
        <label>{this.state.quantity}</label>
        <button className="btn btn-sm btn-info" onClick={this.decrease} disabled={this.state.quantity === this.props.minimum}>
          -
        </button>
      </div>
    );
  }
  increase = () => {
    var newQuantity = this.state.quantity + 1;
    this.setState({ quantity: newQuantity });

    this.props.onValueChange(newQuantity);
    this.setState({value: false});
  };
  decrease = () => {
    var newQuantity = this.state.quantity - 1;
    if (this.state.quantity > this.props.minimum) {
      this.setState({ quantity: newQuantity});
      this.props.onValueChange(newQuantity);
    } 
    if(this.state.quantity === this.props.minimum) {
      this.setState({value: true});
    }

  };
  componentDidMount() {
    this.setState ({quantity: this.props.minimum});
    this.setState({value: true});

}
}

export default QuantityPicker;
