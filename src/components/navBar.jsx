import React, { Component } from 'react';
import {Link} from 'react-router-dom';


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
  </div>
</nav>
          );
    }
  }
 
export default NavBar;