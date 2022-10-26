import React from "react";

const headerImg = require("../assets/edit/lg.jpg");
const img = require("../assets/gallery/assoc2.jpg");
const img2 = require("../assets/gallery/assoc.jpg");

const Header = () => {
  return (
    <div className="px-md-5 justify-content-center">
      <div className="text-center mb-3">
        <div className="display-5 text-primary">
          DonMcmath Foundation EX-Students Association
        </div>
        <div>#Motto "We aspire to inspire"</div>
      </div>
      <img
        className="img-fluid headerImg rounded-1 hover-shadow d-none d-sm-block"
        src={img}
        alt="Picture of DMF EX-Students Association"
        style={{ width: 1500 }}
      />
      <img
        className="img-fluid headerImg rounded-1 hover-shadow d-block d-sm-none"
        src={img2}
        alt="Picture of DMF EX-Students Association"
        style={{ width: 1500 }}
      />
    </div>
  );
};

export default Header;
