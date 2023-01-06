import React from "react";
import Wrappers from "../assets/css/Experience.Wrappers";

const Experience = () => {
  return (
    <Wrappers>
      <div id="experience"></div>
      <div className="timeline">
        <div className="container">
          <div className="circle"></div>
          <div className="text-box">
            <h2>Brand Image Tech Solutions</h2>
            <small>2021 - 2022</small>
            <p>
              Worked at a small startup company as a Full Stack developer ,
              Where my role will be to develop the develop the application that
              is reusable and scalabe, and deploying it on the unmanaged vps
              server(Linux)
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>

        <div className="container">
          <div className="circle"></div>
          <div className="text-box">
            <h2>SSLC</h2>
            <small>2015 - 2016</small>
            <p>
              Stuided at St. Marys Matriculation Higher Secondary School,
              Redhills, chennai ,Tamil Nadu
            </p>
            <span className="left-arrow"></span>
          </div>
        </div>
        <div className="container">
          <div className="circle"></div>
          <div className="text-box">
            <h2>Higher Secondary School</h2>
            <small>2016 - 2017</small>
            <p>
              Stuided at St. Marys Matriculation Higher Secondary School,
              Redhills, chennai ,Tamil Nadu
            </p>
            <span className="right-arrow"></span>
          </div>
        </div>
        <div className="container">
          <div className="circle"></div>
          <div className="text-box">
            <h2>Be.Mechnaical Engineering</h2>
            <small>2017 - 2021</small>
            <p>
              Studied Be.Mechanical engineering at Vel Tech High Tech
              Dr.Rangarajan Dr.Sakunthala Engineering College, Chennai, Tamil
              Nadu.
            </p>
            <span className="left-arrow"></span>
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default Experience;
