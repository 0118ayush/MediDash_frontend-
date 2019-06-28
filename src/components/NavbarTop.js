import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";

// Components

class NavbarTop extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand >
        <Link to="/"><img src={'https://banner2.kisspng.com/20180501/qtq/kisspng-registered-nurse-nursing-nurse-practitioner-logo-c-golden-medical-symbol-5ae8e7df270aa1.7072635815252131511599.jpg'} alt="logo" height="75px" /></Link> 
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>Account</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default NavbarTop;
