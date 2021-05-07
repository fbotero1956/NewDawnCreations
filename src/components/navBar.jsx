import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';


class NavBar extends Component {

    render() { 
        return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewDawnCreations</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/catalog">Catalog</Link>
        <Link className="nav-link" to="/about">Artist</Link>
        <Link className="nav-link" to="/atwork">AtWork</Link>
        <Link className="nav-link" to="/cart">Cart</Link>
        <Link className="nav-link" to="/todo">To Do List</Link>
      </div>
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