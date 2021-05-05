import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';


class NavBar extends Component {

    render() { 
        return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">NewDawnCreations</Link>
    <div  id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">Catalog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Artist</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/atwork">At Work</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/todo">To Do List</Link>
        </li>
      </ul>
    </div>
    <div className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-info my-2 my-sm-0" to="/cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"  ></i>
               View Cart
              <span className="badge badge-primary cart-badge">
              {this.props.cart.length}
              </span>
            </Link>
          </div>
    </div>
</nav>
          );
    }
  }
  const mapStateToProps = (state) => {
    return{
      cart: state.cart
    };
  };
  
  export default connect(mapStateToProps,null)(NavBar);