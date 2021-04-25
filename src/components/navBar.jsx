import React, { Component } from 'react';

class NavBar extends Component {

    render() { 
        return ( <div>
    <nav className="navbar navbar-dark bg-primary">
  <a className="navbar-brand" href="#">NewDawnCreations</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/#">Products</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/#">About us</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/#">Contact us</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
        </div> );
    }
}
 
export default NavBar;