import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section section-dark">
      <div className="info">
        <h2 className="section-header text-light">Contact</h2>
        <p className="body-text text-light">
        <a href="https://www.instagram.com/sophiehyphae" target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>
      <p className="body-text text-light">
        <a href="mailto:hello@sophiehyphae.com">Email</a>
      </p>
      </div>
    </section>
  );
};

export default Contact;