import React from "react";

const logo = require("../assets/logo/dmfLogo.png");

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div class="bd-footer mx-md-5 py-4 py-md-5 mt-5 bg-light">
      <div class="container py-4 py-md-5 px-4 px-md-3">
        <div class="row">
          <div class="col-lg-3 mb-3">
            <div className="text-center">
              <img src={logo} alt="DMF_LOGO" />
              <div className="lead text-muted text-sm">
                <i class="bi bi-c-circle fw-bold"></i> {year} DMF EX-Students
                Association
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-md-4 col-lg-3 mb-3">
            <h5 style={{ color: "hotpink" }}>Quick Links</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="/">home</a>
              </li>
              <li class="mb-2">
                <a href="#about">about</a>
              </li>
              <li class="mb-2">
                <a href="#news">news</a>
              </li>
              <li class="mb-2">
                <a href="#mission/vision">mission/vision</a>
              </li>
              <li class="mb-2">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  href="#"
                >
                  notice board
                </a>
              </li>
            </ul>
          </div>
          <div class="col-sm-3 col-md-4 col-lg-3 mb-3">
            <h5 style={{ color: "hotpink" }}>Get in touch</h5>
            <ul class="list-unstyled text-primary">
              <li
                class="mb-2"
                style={{ cursor: "pointer" }}
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                data-bs-title="contact us"
                data-bs-content="Phone: +220 1224568 Email: dmf@gmail.com"
              >
                dmf_ex-students support
              </li>
              <li class="mb-2" style={{ cursor: "pointer" }}>
                developer
              </li>
              <a
                tabindex="0"
                class="btn btn-lg btn-outline-success"
                role="button"
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                data-bs-title="contact us"
                data-bs-content="Phone: +220 1224568 Email: dmf@gmail.com"
              >
                Register
              </a>
            </ul>
          </div>
          <div class="col-sm-3 col-md-4 col-lg-3 mb-3">
            <h5 style={{ color: "hotpink" }}>Social</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#whatsapp">whatsapp</a>
              </li>
              <li class="mb-2">
                <a href="#facebook">facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-success text-center" style={{ fontSize: 15 }}></div>
    </div>
  );
};

export default Footer;
