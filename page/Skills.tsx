import React from "react";
import Wrappers from "../assets/css/Skills.Wrappers";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: ["React (Functional)", "TypeScript", "Redux Toolkit", "Styled Components", "Framer Motion", "Responsive Design"]
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js (Async/Await)", "Express API Design", "MongoDB Logic", "JWT Auth Systems", "RESTful Architecture", "Third-party APIs"]
  },
  {
    title: "Infrastructure & Tools",
    skills: ["Docker", "Linux (Ubuntu)", "Vercel Deployment", "Git/GitHub", "LocalStack", "Postman / Insomnia"]
  }
];

const Skills = () => {
  return (
    <Wrappers>
      <div id="skills"></div>
      <div className="container">
        <div className="title-section">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Core Technical Strengths
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Expertise built through building complex, production-ready systems with a focus on
            clean architecture and measurable outcomes.
          </motion.p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3>{cat.title}</h3>
              <div className="tech-list">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-badge">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Wrappers>
  );
};

export default Skills;
