import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftSide from "../Pages/Shared/LeftSide/LeftSide";
import RightSide from "../Pages/Shared/RightSide/RightSide";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSide></LeftSide>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSide></RightSide>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
      {/* <div className="d-flex justify-content-center align-items-center">
          <Button as="input" type="button" value="News" />{" "}
          <Navbar.Brand href="#home" className="text-primary ms-2">
            Portal
          </Navbar.Brand>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Button
            variant="danger"
            className="d-flex justify-content-center align-items-center"
          >
            <FaPlus className="me-2"></FaPlus> Advertise
          </Button>{" "}
          <FaUserCircle className="ms-3  fs-3"></FaUserCircle>
        </div> */}
    </div>
  );
};

export default Main;
