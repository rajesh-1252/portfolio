import React from "react";
import Wrappers from "../assets/css/About.Wrappers";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Wrappers>
      <div id="about"></div>
      <div className="container">
        <motion.div
          className="left"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        ></motion.div>
        <motion.div
          className="right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Product-Focused Engineering</h3>
          <p>
            I am a <span className="highlight">Senior Full-Stack MERN Engineer</span> with a deep specialization in building scalable, production-ready web applications. My approach goes beyond code — I bridge the gap between frontend UX and backend infrastructure.
          </p>
          <p>
            I specialize in designing <span className="highlight">secure authentication systems, analytics pipelines, and conversion tracking systems</span>. I don’t just implement features; I think about system reliability, revenue tracking, and user flows to connect product behavior with measurable business outcomes.
          </p>
        </motion.div>
      </div>
    </Wrappers>
  );
};

export default About;
