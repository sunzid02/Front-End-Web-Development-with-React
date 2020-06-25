import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';

class App extends Component{

  render(){

    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
              <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
          </div>
        </Navbar>
      </div>
    );

  }

}

export default App;
