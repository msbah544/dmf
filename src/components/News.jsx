import React from "react";
import { Link } from "react-router-dom";

const News = ({ newsItem }) => {
  return (
    <div
      className="row shadow align-items-center border-bottom my-5 py-3"
      style={{ cursor: "pointer" }}
    >
      <div className="col-md-5">
        <h4 className="fw-bold">{newsItem.title}</h4>
        <h6>{newsItem.createdAt}</h6>
      </div>
      <div className="col-md-5">{newsItem.headline}</div>
      <Link to={`/news/${newsItem.id}`} state={{ newsItem: newsItem }}>
        view news
      </Link>
    </div>
  );
};

export default News;
