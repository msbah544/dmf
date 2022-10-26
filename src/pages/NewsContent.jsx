import React from "react";
import { useLocation } from "react-router-dom";

const img = require("../assets/gallery/assoc2.jpg");
const img2 = require("../assets/gallery/assoc.jpg");

const NewsContent = () => {
  const location = useLocation();
  const data = location.state;
  const { newsItem } = data;
  //console.log(data);
  return (
    <div className="container text-center">
      <div className="text-center my-3">
        <div className="display-5">
          DonMcmath Foundation EX-Students Association
        </div>
        <div>#Motto "We aspire to inspire"</div>
      </div>
      <div class="gallery-img border-0 rounded my-5">
        <img
          class="image img-fluid d-none d-sm-block"
          src={img}
          alt="PICTURE OF DMF ASSOC."
        />
        <img
          class="image img-fluid d-sm-none d-block"
          src={img2}
          alt="PICTURE OF DMF ASSOC."
        />
        <div class="middle">
          <div class="fw-bold display-4 text-primary">{newsItem.title}</div>
        </div>
      </div>
      <div className="my-5 fw-bold lead text-muted">{newsItem.text}</div>
    </div>
  );
};

export default NewsContent;
