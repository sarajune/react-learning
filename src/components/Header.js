import React from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i>
                <FontAwesomeIcon icon={faUser} />
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
