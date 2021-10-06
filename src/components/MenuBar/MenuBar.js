import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import "./MenuBar.css";

const MenuBar = () => {
    return (
        <div>
            <Navbar className="menu" bg="" variant="dark">
    <Container>
    <Navbar.Brand href="/home">
      <h3 className=" fw-bolder fa-2x text-danger ">STUDY HOME</h3>
    
    </Navbar.Brand>
    <Nav className="ms-auto items">
      <Nav.Link className="menu-item" href="/home">Home</Nav.Link>
      <Nav.Link className="menu-item" href="/membership">Membership</Nav.Link>
      <Nav.Link className="menu-item" href="/all-course">All Course</Nav.Link>
      <Nav.Link className="menu-item" href="/about-us">About</Nav.Link>
      <Nav.Link className="menu-item" href="/contact-us">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default MenuBar;