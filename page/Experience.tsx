import React from "react";
import Wrappers from "../assets/css/Experience.Wrappers";

const works = [
{
    name: "Lotuscrew technology",
    description:
      "Worked as a full stack developer and built a Shopify app for customer service, integrating Facebook, WhatsApp, Email, Instagram, and custom chatbots to streamline communication for store owners. Developed a React Native mobile app designed to improve English accents, similar to Duolingo.",
    timeline: "2022 - 2024",
  },
  {
    name: "Brand Image Tech Solutions",
    description:
      "Worked at a small startup company as a Full Stack Developer, where my role was to develop reusable and scalable applications and deploy them on an unmanaged VPS server (Linux).",
    timeline: "2021 - 2022",
  },
  {
    name: "SSLC",
    description:
      "Studied at St. Marys Matriculation Higher Secondary School, Redhills, Chennai, Tamil Nadu.",
    timeline: "2015 - 2016",
  },
  {
    name: "Higher Secondary School",
    description:
      "Studied at St. Marys Matriculation Higher Secondary School, Redhills, Chennai, Tamil Nadu.",
    timeline: "2016 - 2017",
  },
  {
    name: "B.E Mechanical Engineering",
    description:
      "Studied B.E Mechanical Engineering at Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College, Chennai, Tamil Nadu.",
    timeline: "2017 - 2021",
  },
];

const Experience = () => {
  return (
    <Wrappers>
      <div id="experience"></div>
      <div className="timeline">
        {works.map((work, index) => (
          <div className="container" key={index}>
            <div className="circle"></div>
            <div className="text-box">
              <h2>{work.name}</h2>
              <small>{work.timeline}</small>
              <p>{work.description}</p>
              <span className={index % 2 === 0 ? "right-arrow" : "left-arrow"}></span>
            </div>
          </div>
        ))}
      </div>
    </Wrappers>
  );
};

export default Experience;
