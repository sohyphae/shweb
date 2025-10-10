import React from 'react';
import cge1 from '../assets/cge1.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="section section-light">
      <div className="about-container">
        <div className="info">
          <h2 className="section-header text-mid-dark">About</h2>
          <p className="body-text text-dark">Sophie Hyphae weaves glimmering synth and piano improvisations with ethereal vocal loops, to create dreamlike, nature-entangled songs. Synth chef for The Mixed Dips</p>
        </div>
        <img src={cge1} className="about-img" alt="Sophie Hyphae on a sunlit treetop stage" />
      </div>
    </section>
  );
};

export default About;