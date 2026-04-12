import React from 'react';
import cge1 from '../assets/cge1.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="section section-light">
      <div className="about-container">
        <div className="about-text">
          <h2 className="section-header text-mid-dark margin-top-10vh">About</h2>
          <p className="body-text text-dark">Sophie Hyphae weaves glimmering piano improvisations with ethereal vocal loops, ambient soundscapes, and curious earthy lyrics, to create dreamlike, nature-entangled, organic electronica.</p>
          <p className="body-text text-dark">Shimmering synths and soaring vocals weave an impressionistic story of how connection with nature, embracing sensitivity, and finding kindred good souls will win over disconnection and accelerationism.</p>  
          <p className="body-text text-dark">
          Sophie sculpts and layers up the majority of her sounds live when she performs. She does this by programming multiple synthesised sounds to follow and respond to the piano melody, generating rich, evolving textures on the fly. With her feet, she controls a loopstation, which allows her to further build, switch and activate different aspects of the music. These responsive layers bloom outward in real time, and with the tactile intimacy of the piano, together with sampled sounds from nature, she invites listeners into a world where electronics and ecology intertwine.  
          </p>
          <p className="body-text text-dark">
            Sophie is also synth chef and vocalist for <a href="https://www.themixeddips.com/" target="_blank" rel="noopener noreferrer" >The Mixed Dips</a>, a live band that reimagines rave classics, fronted by drag queen DJ <a href="https://www.instagram.com/gaba_ghanoush/" target="_blank" rel="noopener noreferrer" >Gaba Ghanoush</a>.
          </p>
        </div>
        <div className="about-img-container">
          <img src={cge1} className="about-img" alt="Sophie Hyphae, live loops musician and vocalist, playing synthesizer on a sunlit treetop stage at a summer street party in Bristol" />
        </div>
      </div>
    </section>
  );
};

export default About;