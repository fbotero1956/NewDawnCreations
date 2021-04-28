import React, {Component} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Product from './product';
import ProductService from "../services/productService";

class Catalog extends Component {
  state = {
    catalog: [],
  };

  render() {
    return (
        <div>
            <div className="product-area">
                <h1>NewDawnCreations Catalog</h1>
               <div>there are: {this.state.catalog.length} products in the catalog</div>
                {this.state.catalog.map( item =>  
                <Product key={item.id} data = {item}></Product>)}
            </div>
        </div>
    );
    }

    componentDidMount() {
        //get data from productService
        var service = new ProductService();
        var catalog = service.getCatalog();
        this.setState({ catalog: catalog});

        //get the unique categories
        var categories =  [];
        // for loop to see if the category already exists
        //if not add it 
    }
}
export default Catalog;
