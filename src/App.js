
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Product from './components/product';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>NewDawnCreations Catalog</h1>
      <div className="product-area">
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
