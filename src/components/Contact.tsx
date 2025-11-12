import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section section-dark">
      <div className="info">
        <h2 className="section-header text-light">Contact</h2>
        <p className="body-text text-light">
          <a href="mailto:hello@sophiehyphae.com"><FaEnvelope /></a>
        </p>
        <p className="body-text text-light">
          <a href="https://www.instagram.com/sophiehyphae" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </p>
        <p className="body-text text-light">
          <a href="https://www.youtube.com/@sohyphae" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </p>
      </div>
    </section>
  );
};

export default Contact;