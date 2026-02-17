import React, { FormEvent } from "react";
import Wrappers from "../assets/css/Contact.Wrappers";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Wrappers>
      <div id="contact"></div>
      <div className="container">
        <motion.div
          className="left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1>Let's build something scalable.</h1>
          <p>Whether you're looking to architect a new system or optimize an existing one, I'm here to help you achieve measurable business outcomes.</p>
        </motion.div>

        <motion.div
          className="right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-card">
            <p style={{ marginBottom: "2rem", lineHeight: "1.6" }}>
              I'm currently open to new opportunities, specialized consultations, and collaborative ventures.
              The most efficient way to initiate a conversation is via email.
            </p>
            <a href="mailto:madhanrajesh1252@gmail.com" className="submit-btn" style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
              Send Message
            </a>
          </div>
        </motion.div>
      </div>
    </Wrappers>
  );
};

export default Contact;
