import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrappers from "../assets/css/Project.Wrappers";
import project1Img from "../public/project1.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Job Tracker SaaS",
    tag: "Revenue-Driven Platform",
    description: "A full-scale job tracking ecosystem featuring secure JWT authentication, role-based access, and a data-driven dashboard. Focused on high conversion rates and user retention through refined UX and backend reliability.",
    tech: ["React", "Node.js", "MongoDB", "Auth0"],
    link: "https://job-tracker1.onrender.com/all-jobs",
    image: project1Img
  }
];

const Project = () => {
  return (
    <Wrappers>
      <div id="projects"></div>
      <div className="container">
        <div className="title-section">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Engineering Showcase
          </motion.h1>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`project-card ${idx % 2 !== 0 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <div className="image-box">
                <Image src={project.image} layout="fill" objectFit="cover" alt={project.title} />
              </div>
              <div className="content-box">
                <span className="tag">{project.tag}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-item">{t} {tIdx < project.tech.length - 1 ? "•" : ""}</span>
                  ))}
                </div>
                <Link href={project.link} target="_blank" className="live-link">
                  View Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Wrappers>
  );
};

export default Project;
