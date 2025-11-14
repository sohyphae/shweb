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
          Contact me in the usual way!
        </p>
      </div>
      <div className="logo logo-clip-40000 ia-outer">
        <h1>
            <span>I</span>
        </h1>    
        <h1 className="a1">
            <span>A</span>
        </h1>
        <h1 className="a2">
            <span >A</span>
        </h1>
        <h1 className="a3l">
            <span>A</span>
        </h1>
        <h1 className="a3">
            <span>A</span>
        </h1>
        <h1 className="a3r">
            <span>A</span>
        </h1>
        <h1 className="a4l">
            <span>A</span>
        </h1>
        <h1 className="a4">
            <span>A</span>
        </h1>
        <h1 className="a4r">
            <span>A</span>
        </h1>
      </div>
      <div className="info margin-top-10vh">  
        <p className="body-text text-light">
          But if you're not on the micelial network, here are some other ways to reach me :-)
        </p>
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
      <p 
        className="animation-attr">Home section animation based on cluster growth code by <a href="https://github.com/kirupa/kirupa/tree/master" target="_blank" rel="noopener noreferrer" >kirupa</a>. 
        Refresh to restart the animation.
      </p>
    </section>
  );
};

export default Contact;