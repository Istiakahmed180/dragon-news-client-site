import React, { useContext } from "react";
import { Button, ButtonGroup, Carousel, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider";

const RightSide = () => {
  const { googleLogInUser } = useContext(AuthContext);

  const handleGoogleLogInUser = () => {
    googleLogInUser()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{ position: "fixed", width: "20rem" }} className="">
      <ButtonGroup className="d-flex" vertical>
        <Button
          onClick={handleGoogleLogInUser}
          className="mb-3"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login via Google
        </Button>
        <Button className="mb-3" variant="outline-dark">
          <FaGithub></FaGithub> Login via Github
        </Button>
      </ButtonGroup>

      <div>
        <span>Find Us On</span>
        <ListGroup>
          <ListGroup.Item className="mt-3">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mt-3">
            <FaYoutube></FaYoutube> YouTube
          </ListGroup.Item>
          <ListGroup.Item className="mt-3">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mt-3">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>

      <Carousel className="mt-3">
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2"
            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2"
            src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2"
            src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2"
            src="https://images.unsplash.com/photo-1636751364472-12bfad09b451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2"
            src="https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default RightSide;
