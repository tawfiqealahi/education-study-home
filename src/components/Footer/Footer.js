import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faPhoneVolume,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        
        <div className="container">
          
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Tawfiq's <span className="text-danger">STUDY HOME</span></h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    *Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.
                  </small>
                </p>

                <p className="mt-5">
                  <small>Tawfiq © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
              <Nav className="ms-auto items">
      <Nav.Link className="menu-item" href="/home">Home</Nav.Link>
      <Nav.Link className="menu-item" href="/membership">Membership</Nav.Link>
      <Nav.Link className="menu-item" href="/all-course">All Course</Nav.Link>
      <Nav.Link className="menu-item" href="/about-us">About </Nav.Link>
      <Nav.Link className="menu-item" href="/contact-us">Contact</Nav.Link>
    </Nav>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+1 8 800 555 35 35</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                      160 Broadway, New York, NY 10038,
                      <br /> 102 1st Avenue, New York, NY 100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
