import React from 'react';
import sh from '../assets/sophie-hyphae-pic-26.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="section section-light">
      <div className="about-container">
        <div className="about-img-container">
          <img src={sh} className="about-img" alt="Sophie Hyphae, organic electronica & live loops artist, singing and playing a synthesizer outdoors amongst an ivy covered backdrop" />
        </div>
        <div className="about-text">
          <h2 className="section-header text-mid-dark margin-top-10vh">About</h2>
          <p className="sub-header-text text-dark">
            Bristol-based organic electronica & live loops artist, making nature-entangled music
          </p>
          <p className="body-text text-dark">
            Classical pianist turned electronic musician, Sophie uses shimmering synths and soaring vocals to weave an impressionistic story of how connection with nature, embracing sensitivity, and finding kindred good souls on the dancefloor will win over disconnection and accelerationism.
          </p>
          <p className="body-text text-dark">
            Sophie creates her improvisational organic electronica live by programming multiple synthesised sounds to follow and respond to her piano melody, while also controlling a loopstation with her feet, generating rich, evolving textures that bloom outwards in real time. With the tactile intimacy of the piano, together with ethereal vocal loops, curious earthy lyrics, and sounds sampled from nature, she invites listeners into a world where electronics and ecology intertwine.
          </p>
          <p className="body-text text-dark">
            Sophie is also synth chef and vocalist for <a href="https://www.themixeddips.com/" target="_blank" rel="noopener noreferrer" >The Mixed Dips</a>, a live band that reimagines rave classics, fronted by drag queen DJ <a href="https://www.instagram.com/gaba_ghanoush/" target="_blank" rel="noopener noreferrer" >Gaba Ghanoush</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;