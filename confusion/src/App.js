import React, { Component } from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from './components/MenuComponent';
import './App.css';

class App extends Component{

  render(){

    return(
      <div>
        <Navbar dark color="primary">
          <div className="container">
              <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
          </div>
        </Navbar>
        <Menu></Menu>
      </div>
    );

  }

}

export default App;
