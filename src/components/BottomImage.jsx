import React from "react";

const picture1 = require("../assets/gallery/girls.jpg");
const picture2 = require("../assets/gallery/group.jpg");
const picture3 = require("../assets/gallery/group3.jpg");
const pictureTwo = require("../assets/gallery/group2.jpg");

const BottomImage = () => {
  return (
    <div className="row mx-lg-5">
      <div className="text-center my-2 d-lg-none">
        <div className="fw-bold text-muted">
          "Coming together is the beginning. Keeping together is progress.
          Working together is success.”
        </div>
        <cite>__Henry Ford</cite>
      </div>
      <div className="col-md-4">
        <div className="card mb-2">
          <img className="hover-shadow" src={picture1} alt="PICTURE_1" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-2">
          <img className="hover-shadow" src={pictureTwo} alt="PICTURE_2" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-2">
          <img className="hover-shadow" src={picture3} alt="PICTURE_3" />
        </div>
      </div>
    </div>
  );
};

export default BottomImage;
