import React, { useContext } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {
  FaPlus,
  FaRegUser,
  FaRegUserCircle,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import LeftSide from "../LeftSide/LeftSide";

const Header = () => {
  const { user, LogOutUser } = useContext(AuthContext);

  const handleLogOutUser = () => {
    LogOutUser()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="mb-3 sticky-top"
      bg="light"
      variant="light"
    >
      <Container>
        <Link to={"/"}>
          <Button as="input" type="button" value="News Portal" />{" "}
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="d-lg-block ">
            {user?.uid ? (
              <div className="d-flex">
                {user?.photoURL ? (
                  <Image
                    src={user.photoURL}
                    className="ms-3"
                    style={{ width: "43px" }}
                    roundedCircle
                  ></Image>
                ) : (
                  <FaUserCircle className="ms-3  fs-1 text-success"></FaUserCircle>
                )}
                <Button
                  onClick={handleLogOutUser}
                  variant="danger"
                  className="d-flex ms-3 justify-content-center align-items-center"
                >
                  Logout
                </Button>{" "}
              </div>
            ) : (
              <>
                <Link to={"/login"}>
                  <Button variant="success">Login</Button>
                </Link>
                <FaUserCircle className="ms-3  fs-1 text-info"></FaUserCircle>
              </>
            )}
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
