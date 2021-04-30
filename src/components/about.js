import React, { Component } from "react";
import "./todo.css";


class About extends Component {
    state={
        showeMail: false,
        eMail: "Show eMail here"
    }
   
geteMail = () => {
    if (this.state.showeMail === false) {
        this.setState({showeMail: true});
        this.setState({eMail: "Kelly.Gustafson@gmail.com"});
    }else{
        this.setState({showeMail: false});
        this.setState({eMail: "Show eMail here"});
    };
};
render() {
    var showeMailBtn = "";
    if (this.state.showeMail === false ? showeMailBtn = "Show eMail" : showeMailBtn = "Hide eMail");

    return (
    <div className="about-container">
        <h1>About me</h1>
        <h6>Please send us an email with any questions that you might have</h6>
        <p>{this.state.eMail}</p>
        <button className="btn btn-lg btn-info btn-eMail" onClick={this.geteMail}>{showeMailBtn}</button>
    </div>
    );
  };
};

export default About;