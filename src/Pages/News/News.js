import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const categoryNews = useLoaderData();
  const {
    _id,
    title,
    image_url,
    details,
    thumbnail_url,
    total_view,
    author,
    rating,
    category_id,
  } = categoryNews;

  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <div className="d-flex justify-content-around align-items-center">
          <h6>
            Author: <small>{author.name}</small>
          </h6>
          <h6>
            Published Date: <small>{author.published_date}</small>
          </h6>
          <div className="d-flex justify-content-center align-items-center">
            <FaStar className="text-warning me-2"></FaStar>
            <small>{rating.number}</small>
          </div>
        </div>
        <Card.Text>{details}</Card.Text>
        <Link
          className="d-flex justify-content-center "
          to={`/category/${category_id}`}
        >
          <Button variant="primary">Go Previous News</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
