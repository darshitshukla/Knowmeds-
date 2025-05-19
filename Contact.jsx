import React from "react";
import "../App.css";
import Navbar from "./navbar";

const Contact = () => {
  return (
    <>
    <Navbar />
    
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch with Knowmeds</h1>
      <p className="contact-subtitle">
        Have questions or feedback? We're here to help you stay healthy and informed.
      </p>
      <div className="contact-form-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: support@knowmeds.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Health St., Pharma City, India</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
