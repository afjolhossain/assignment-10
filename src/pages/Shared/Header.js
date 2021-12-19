import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#service">Services</Nav.Link>
            <Nav.Link href="#pricing">Medicines</Nav.Link>
            <Nav.Link href="#pricing">Owner </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
