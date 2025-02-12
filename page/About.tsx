import React from "react";
import Wrappers from "../assets/css/About.Wrappers";

const About = () => {
  return (
    <Wrappers>
      <div id="about"></div>
      <div className="container">
        <div className="left"></div>
        <div className="right">
          <h3>About Me</h3>
          <p>
            A Mechanical engineer who is very much intrested to learn new things
            but fortunatly i didnt get a chance to work in mechanical field. Now
            working as a full stack developer and love solving complex problem.
            And mesmerized by how entire stack works.
          </p>
        </div>
      </div>
    </Wrappers>
  );
};

export default About;
