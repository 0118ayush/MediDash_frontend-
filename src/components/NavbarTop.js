import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";


// Components

class NavbarTop extends Component {

  render() {
    return (
      <div>
        {
          this.props.currentUser ?
            (
              <Navbar bg="light" variant="light">
                {/* <Navbar.Brand >
                  <Link to="/home"><img src={'https://banner2.kisspng.com/20180501/qtq/kisspng-registered-nurse-nursing-nurse-practitioner-logo-c-golden-medical-symbol-5ae8e7df270aa1.7072635815252131511599.jpg'} alt="logo" height="75px" /></Link>
                </Navbar.Brand> */}
                <Nav className="mr-auto">
                  <Nav.Link></Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                  <Navbar.Brand >
                    <Link to="/home"><img src={require("../assets/Images/logo-2724481_1280.png")} alt="logo" height="80px" /></Link>
                  </Navbar.Brand>
                </Nav>
                <Nav >
                  <Nav.Link onClick={this.props.signout}>Logout</Nav.Link>
                </Nav>
              </Navbar>
            )
            : (<Navbar bg="light" variant="light">
              <Navbar.Brand >
                <Link to="/home"><img src={'https://banner2.kisspng.com/20180501/qtq/kisspng-registered-nurse-nursing-nurse-practitioner-logo-c-golden-medical-symbol-5ae8e7df270aa1.7072635815252131511599.jpg'} alt="logo" height="75px" /></Link>
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link></Nav.Link>
              </Nav>
            </Navbar>
            )
        }
      </div>
    );
  }
}

export default NavbarTop;
