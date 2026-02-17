import React from "react";
import Wrappers from "../assets/css/Experience.Wrappers";
import { motion } from "framer-motion";

const works = [
  {
    company: "Lotuscrew Technology",
    role: "Full Stack Engineer",
    timeline: "2022 - 2024",
    impact: "Architected a Shopify ecosystem integration for centralized customer service, unifying Facebook, WhatsApp, and Instagram messaging. Developed custom AI chatbots to streamline merchant workflows and built a high-performance React Native mobile app for immersive language learning."
  },
  {
    company: "Brand Image Tech Solutions",
    role: "Full Stack Developer",
    timeline: "2021 - 2022",
    impact: "Engineered scalable web applications and managed production deployments on Linux VPS systems. Focused on building reusable architecture and implementing secure API endpoints for startup-scale products."
  }
];

const Experience = () => {
  return (
    <Wrappers>
      <div id="experience"></div>
      <div className="container">
        <div className="timeline-track"></div>
        {works.map((work, index) => (
          <motion.div
            className="experience-item"
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="dot"></div>
            <div className="content">
              <h2>{work.company}</h2>
              <span className="role-title">{work.role}</span>
              <span className="timeline">{work.timeline}</span>
              <p>{work.impact}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Wrappers>
  );
};

export default Experience;
