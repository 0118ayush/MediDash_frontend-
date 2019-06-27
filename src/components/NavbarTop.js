import React, { Component } from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";

// Components


class NavbarTop extends Component {

  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">MEDIDASH</Navbar.Brand>
          
          {
              this.props.currentUser
              ?  <div>
                    <Form inline >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">My Account</Nav.Link>
                        <Nav.Link href="#features">Logout</Nav.Link>
                    </Nav>
                </div>
            : null
          }
        </Navbar>
      </div>
    );
  }
}

export default NavbarTop;
