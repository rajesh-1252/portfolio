import React, { FormEvent, FormEventHandler } from "react";
import Wrappers from "../assets/css/Contact.Wrappers";

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Wrappers>
      <div id="contact"></div>
      <div className="container">
        <div className="left">
          <h1>Drop me a message, I would love to hear from you!</h1>
        </div>
        <div className="right">
          <form action="" onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="row">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="row">
              <label htmlFor="message">Message</label>
              <input type="text" name="message" id="message" placeholder="" />
            </div>
            <button className="btn submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </Wrappers>
  );
};

export default Contact;
