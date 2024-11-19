// FILE: src/components/Contact.jsx

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Contact.css';

export function Contact() {
  useEffect(() => {
    gsap.from('.contact-header', { duration: 1, y: -50, opacity: 0 });
    gsap.from('.contact-form', { duration: 1, y: 50, opacity: 0, delay: 0.5 });
  }, []);

  return (
    <div className="contact">
      <h1 className="contact-header">Contact Us</h1>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}