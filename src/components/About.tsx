import React from 'react';
import cge1 from '../assets/cge1.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="section section-light">
      <div className="about-container">
        <div className="about-text">
          <h2 className="section-header text-mid-dark margin-top-10vh">About</h2>
          <p className="body-text text-dark">Sophie Hyphae weaves glimmering synth and piano improvisations with ethereal vocal loops and ambient soundscapes, to create dreamlike, nature-entangled songs.</p> 
          <p className="body-text text-dark">
            It's the latest project from Sophie Stammers, multi-instrumentalist and songwriter based in Bristol. A classically trained pianist, for the last decade Sophie had mostly ignored the piano, in favour of instruments she could (just about!) throw on her bike and cycle to the next session. But after taking in a friend's piano that needed a home, keys returned to Sophie's musical life in a big way, and brought with them a rekindled intrest in synthesizers and live looping. Sophie layers up the majority of her sounds live on the Nord Stage 4 and the Boss RC300 loopstation.   
          </p>
          <p className="body-text text-dark">
            Sophie is also the synth chef and vocalist for The Mixed Dips, a live band that reimagines rave classics, fronted by drag queen DJ <a href="https://www.instagram.com/gaba_ghanoush/" target="_blank" rel="noopener noreferrer" >Gaba Ghanoush</a>.
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