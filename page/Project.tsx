import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrappers from "../assets/css/Project.Wrappers";
import { motion } from "framer-motion";
import { projectsData, ProjectData } from "../utils/data/projects";

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
          {projectsData.map((project, idx) => (
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
                {project.link !== "#" && (
                  <Link
                    href={project.link}
                    className="live-link"
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                  >
                    View Case Study →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Wrappers>
  );
};

export default Project;
