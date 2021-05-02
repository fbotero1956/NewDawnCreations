import React, {Component} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Product from './product';
import ProductService from "../services/productService";

class Catalog extends Component {
  state = {
    catalog: [],
    categories: [],
    selectedCat: ""
  };
  handleClick = (cat) => {      
      if(cat === "See All") 
      {this.setState({selectedCat:  ""})}
      else 
      {this.setState({selectedCat: cat});};
    };
  render() {
      let itemsToDisplay = this.state.catalog;
      if (this.state.selectedCat !== "") {
        itemsToDisplay = itemsToDisplay.filter(n => n.category === this.state.selectedCat)};   
    return (
        <div>
            <div className="product-area">
                <h1>NewDawnCreations Catalog</h1>
               <div>currently there are {this.state.catalog.length} products in the catalog</div> 
               <div>
                {this.state.categories.map( (cat, index) =>
                    <button className="btn btn-sm btn-info btn-cat" key={index}
                    onClick={() => {this.handleClick(cat) }} value={cat}>{cat}</button>)}
                </div>
                  { itemsToDisplay.map(item =>  
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
        var categories =  service.getCategories();
        this.setState({categories: categories});
        console.log('from catalog ' + categories);
        // for loop to see if the category already exists
        //if not add it 
    }
}
export default Catalog;
