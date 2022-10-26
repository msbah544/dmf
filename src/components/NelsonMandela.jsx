import React from "react";

const madiba = require("../assets/gallery/madiba.jpg");
const ford = require("../assets/gallery/ford2.jpeg");

const NelsonMandela = () => {
  return (
    <div className="row my-5 mx-md-5 d-none d-lg-flex justify-content-space">
      <div className="col-md-5 my-2 d-flex">
        <div>
          <img
            src={madiba}
            alt="PICTURE OF MADIBA"
            className="rounded-pill"
            /*style={{ width: 50, height: 50 }}*/
          />
        </div>
        <div className="ms-1 lead text-muted">
          "What counts in life is not the mere fact that we have lived. It is
          what difference we have made to the lives of others that will
          determine the significance of the life we lead"{" "}
          <cite>__Nelson Mandela</cite>
        </div>
      </div>
      <div className="col-md-5 my-2 d-flex">
        <div>
          <img
            src={ford}
            alt="PICTURE OF MADIBA"
            className="rounded-pill"
            style={{ width: 92, height: 92 }}
          />
        </div>
        <div className="ms-1 lead text-muted">
          "Coming together is the beginning. Keeping together is progress.
          Working together is success." <cite>__Henry Ford</cite>
        </div>
      </div>
    </div>
  );
};

export default NelsonMandela;
