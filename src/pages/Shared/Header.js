import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/logo/logo.jpg";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ width: "50%" }} src={logo} alt="" />
          </Navbar.Brand>
          <Nav style={{ marginRight: 5 }}>
            <Nav.Link as={HashLink} to="#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#service">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/medicine">
              Medicines
            </Nav.Link>
            <Nav.Link href="#pricing">Owner </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
