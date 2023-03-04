import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaPlus, FaUserCircle } from "react-icons/fa";
import LeftSide from "../LeftSide/LeftSide";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="mb-3"
      bg="light"
      variant="light"
    >
      <Container>
        <Button as="input" type="button" value="News Portal" />{" "}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Categories</Nav.Link>
          </Nav>
          <Nav className="d-lg-block d-none d-lg-flex justify-content-center align-items-center">
            <Button
              variant="danger"
              className="d-flex justify-content-center align-items-center"
            >
              <FaPlus className="me-2"></FaPlus> Advertise
            </Button>{" "}
            <FaUserCircle className="ms-3  fs-3"></FaUserCircle>
          </Nav>
          <div className="d-lg-none text-center">
            <LeftSide></LeftSide>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;