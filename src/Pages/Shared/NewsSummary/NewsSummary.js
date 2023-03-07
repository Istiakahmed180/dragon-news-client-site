import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaRegBookmark,
  FaRegEye,
  FaRegStar,
  FaShareAlt,
  FaStar,
  IconName,
} from "react-icons/fa";

const NewsSummary = ({ news }) => {
  const {
    _id,
    title,
    image_url,
    details,
    thumbnail_url,
    total_view,
    author,
    rating,
  } = news;

  return (
    <Card className="my-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            src={author.img}
            className="rounded-circle me-3"
            style={{ width: "50px", height: "50px" }}
            alt="Avatar"
          />
          <div>
            <h6 className="">{author.name}</h6>
            <small>{author.published_date}</small>
          </div>
        </div>
        <div>
          <FaRegBookmark className="me-2"></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />

        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 247) + "..."}
              <Link to={`/news/${_id}`} style={{ textDecoration: "none" }}>
                {" "}
                Read More
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <FaStar className="text-warning me-2"></FaStar>
          {rating.number}
        </div>
        <div>
          <FaRegEye className="me-2"></FaRegEye>
          <small>{total_view}</small>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummary;
