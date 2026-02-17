import React, { FormEvent, useState } from "react";
import Wrappers from "../assets/css/Contact.Wrappers";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:madhanrajesh1252@gmail.com?subject=${subject}&body=${body}`;
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
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="message">Project Brief</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Describe your project goals..."
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button className="submit-btn" type="submit">Send Message</button>
          </form>
        </motion.div>
      </div>
    </Wrappers>
  );
};

export default Contact;
