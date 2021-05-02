
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import ToDo from './components/todo';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

import Catalog from './components/catalog';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/homepage';
import About from './components/about';
import AtWork from './components/atwork';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/catalog" exact component={Catalog}></Route>
          <Route path="/todo" exact component={ToDo}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/atwork" exact component={AtWork}></Route>
        </Switch>
        <Footer></Footer>
      </div>

    </BrowserRouter>
  );
}

export default App;
