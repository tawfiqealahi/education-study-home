import React from "react";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";


const Banner = () => {
  return (
    <div className="banner">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <MenuBar></MenuBar>
          <div className="col-md-6">
           
          </div>
          <div className="col-md-6">

          <h1 className="title">
              BE THE BEST <br /> NOTHING IS <span className="text-danger">IMPOSSIBLE</span>
            </h1>
            <p className="text-white text-center mt-3">
            Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.
            </p>
            <button className="mt-3 about-btn">ENROLL NOW</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
