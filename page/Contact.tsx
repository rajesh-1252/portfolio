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
          <form action="" onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="name">Full Name</label>
              <input type="text" name="name" id="name" placeholder="John Doe" />
            </div>
            <div className="row">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" placeholder="john@example.com" />
            </div>
            <div className="row">
              <label htmlFor="message">Project Brief</label>
              <textarea name="message" id="message" rows={4} placeholder="Describe your project goals..." />
            </div>
            <button className="submit-btn" type="submit">Send Message</button>
          </form>
        </motion.div>
      </div>
    </Wrappers>
  );
};

export default Contact;
