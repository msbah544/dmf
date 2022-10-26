import React from "react";
//import { Link } from "react-router-dom";

const Navbar = () => {
  const dmfLogo = require("../assets/logo/dmfLogo.png");
  return (
    <section id="home">
      <nav className="mx-xl-5 navbar navbar-expand-md navbar-light bd-navbar sticky-top pt-5 pb-4">
        <div className="container-xxl">
          {/* navbar brand / title */}
          <div className="text-center" href="#intro">
            <img
              className="text-center d-sm-inline"
              src={dmfLogo}
              alt="DMF_LOGO"
            />
            <span
              className="text-primary d-none d-sm-block fw-bold"
              style={{ fontFamily: "Caveat" }}
            >
              {" "}
              DonMcmath Ex-Students{" "}
            </span>
          </div>
          {/* toggle button for mobile nav */}
          <button
            className="navbar-toggler btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*navbar links */}
          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav fw-bold ">
              <li className="nav-item">
                <a className="nav-link text-primary" href="#home">
                  <i
                    className="bi bi-house me-2"
                    style={{ fontSize: "20px" }}
                  ></i>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="#about">
                  <i
                    className="bi bi-info-circle me-2"
                    style={{ fontSize: "20px" }}
                  ></i>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="#news">
                  <i
                    className="bi bi-newspaper me-2"
                    style={{ fontSize: "20px" }}
                  ></i>
                  News
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  href="#"
                >
                  <i
                    className="bi bi-clipboard-check me-2"
                    style={{ fontSize: "20px" }}
                  ></i>
                  Notice Board
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="#mission/vision">
                  <i
                    class="bi bi-file-text me-2"
                    style={{ fontSize: "20px" }}
                  ></i>
                  Mission/Vision
                </a>
              </li>
              {/**CANVAS BODY #REGISTER */}

              <li className="nav-item ms-2 d-none d-lg-inline">
                <a className="btn btn-lg btn-secondary fw-bold" href="#pricing">
                  <i
                    className="bi bi-person-plus me-2"
                    style={{ fontSize: "20px" }}
                  ></i>
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/**toggle MODAL */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-info" id="staticBackdropLabel">
                Notice Board
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              corporis odit consectetur distinctio cum modi, deserunt a
              reiciendis quidem? Aspernatur provident aperiam blanditiis
              deleniti reiciendis laudantium ducimus tenetur tempora recusandae
              ipsum iste enim, deserunt illum. Voluptates magni, sint nam
              placeat ipsum accusantium necessitatibus officia ipsam eos cum
              fugiat illo autem?
            </div>
            <div className="modal-footer ">
              <button
                type="button"
                className="btn btn-outline-info"
                data-bs-dismiss="modal"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
