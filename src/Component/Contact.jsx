import React from 'react';
import '../index.css'; // make sure this path is correct

function Contact() {
  return (
    <div className="Contact" id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Your Name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="you@example.com" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="5" placeholder="Your message..."></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
