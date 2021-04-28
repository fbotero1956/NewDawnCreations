
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import ToDo from './components/todo';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

import Catalog from './components/catalog';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Catalog></Catalog>
      <hr/>
      <ToDo></ToDo>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
