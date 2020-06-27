import React, { Component } from 'react';

import { 
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalBody, ModalHeader, FormGroup, Label, Input, Form
} from "reactstrap";

import {  NavLink } from 'react-router-dom';

class Header extends Component{
    
    constructor(props){
        super(props);

        this.state={
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();    
    }

    render(){
        return(
            // react fragment
            // <>
            // </>
            <React.Fragment>

                <Navbar dark expand="md">                   
                    <div className="container">

                        <NavbarToggler onClick={this.toggleNav} />

                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg" ></span>Home
                                    </NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg" ></span>About Us
                                    </NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg" ></span>Menu
                                    </NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg" ></span>Contact Us
                                    </NavLink>
                                </NavItem>

                            </Nav> 

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>                       
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1> Ristorante Con Fusion </h1>
                                <p> 
                                    We take inspiration from te World's best cuisines, and create a unique 
                                    fusion experience. Our lipsmacking creations 
                                    will ti ckle your culinary senses!
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                {/* login Modal */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}> Login </ModalHeader>
                    <ModalBody>
                        {/* uncontrol form */}
                        <Form onSubmit={this.handleLogin} > 
                            {/* username */}
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input)=> this.username = input }
                                />
                            </FormGroup>
                            
                            {/* pass */}
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}

                                />
                            </FormGroup>
                            
                            {/* checkbox */}
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input}

                                    />
                                    Remember me
                                </Label>
                            </FormGroup>

                            <FormGroup>
                                <Button type="submit" value="submit" color="primary">
                                    login
                                </Button>
                            </FormGroup>
                            
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;