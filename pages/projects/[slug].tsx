import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Wrappers from "../../assets/css/CaseStudy.Wrappers";
import { projectsData, ProjectData } from "../../utils/data/projects";
import { FiArrowLeft, FiDatabase, FiLayout, FiServer, FiCpu, FiCode, FiLayers } from "react-icons/fi";

interface ProjectPageProps {
    project: ProjectData;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
    if (!project) return null;

    return (
        <Wrappers>
            <header className="hero">
                <div className="bg-mesh"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/#projects" className="back-link">
                            <FiArrowLeft /> Back to Showcase
                        </Link>
                        <span className="tag">{project.tag}</span>
                        <h1 className="text-gradient">{project.title}</h1>
                        <p className="tagline">{project.tagLine}</p>
                    </motion.div>

                    <motion.div
                        className="feature-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image src={project.image} layout="fill" objectFit="cover" alt={project.title} priority />
                    </motion.div>
                </div>
            </header>

            <div className="container">
                <section className="content-section">
                    <h2>Project Overview</h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {project.overview}
                    </motion.p>
                </section>

                <section className="content-section">
                    <h2>Technical Architecture</h2>
                    <motion.div
                        className="tech-matrix"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="tech-group">
                            <h4><FiLayout /> Framework</h4>
                            <p>{project.techStackDetailed.framework}</p>
                        </div>
                        <div className="tech-group">
                            <h4><FiCpu /> Backend</h4>
                            <p>{project.techStackDetailed.backend}</p>
                        </div>
                        <div className="tech-group">
                            <h4><FiDatabase /> Data Layer</h4>
                            <p>{project.techStackDetailed.database}</p>
                        </div>
                        <div className="tech-group">
                            <h4><FiCode /> API Architecture</h4>
                            <p>{project.techStackDetailed.api}</p>
                        </div>
                    </motion.div>
                </section>

                <section className="content-section">
                    <h2>Key Engineering Features</h2>
                    <div className="features-grid">
                        {project.features.map((feature, idx) => {
                            const [title, desc] = feature.split(": ");
                            return (
                                <motion.div
                                    key={idx}
                                    className="feature-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                <section className="content-section">
                    <h2>The Problem Solved</h2>
                    <motion.div
                        className="feature-card"
                        style={{ borderLeft: "4px solid var(--primary)" }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>{project.problemSolved}</p>
                    </motion.div>
                </section>
            </div>
        </Wrappers>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = projectsData.map((project) => ({
        params: { slug: project.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const project = projectsData.find((p) => p.slug === params?.slug);

    return {
        props: {
            project,
        },
    };
};

export default ProjectPage;
