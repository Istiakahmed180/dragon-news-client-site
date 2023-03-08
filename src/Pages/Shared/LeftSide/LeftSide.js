import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dragon-news-server-site-nine.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="" style={{ position: "fixed" }}>
      <h5 className="">News Category</h5>
      {categories.map((category) => (
        <Link key={category.id} to={`/category/${category.id}`}>
          <p>{category.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default LeftSide;
