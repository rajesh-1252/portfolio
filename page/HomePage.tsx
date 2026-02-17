import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrappers from "../assets/css/Home.Wrappers";
import { socials } from "../utils/data/data";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <Wrappers>
      <div id="home"></div>
      <div className="bg-mesh"></div>
      <motion.section
        className="intro"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="name text-gradient">Madhan Rajesh</h1>
        <h3 className="profession">Senior Full Stack MERN Engineer</h3>
        <p className="description">
          Building scalable, production-ready web applications with a focus on product strategy,
          system reliability, and measurable business outcomes.
        </p>
        <div className="social-links">
          {socials.map((item) => {
            const { href, id, path } = item;
            return (
              <Link key={id} href={href} target={"_blank"} className="social-link">
                <Image src={path} width={40} height={40} alt={"socials"} />
              </Link>
            );
          })}
        </div>
      </motion.section>
    </Wrappers>
  );
};

export default HomePage;
