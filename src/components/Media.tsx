import React from 'react';
import shamb1 from '../assets/shambala.jpg';
import shamb2 from '../assets/shambala2.jpg';
import shamb3 from '../assets/shambala3.jpg';
import physic from '../assets/physic-garden.jpg';
import cgeS from '../assets/cge-sp-synth.png';
import pianoJungle from '../assets/pianojungle.jpg';
import smoky from '../assets/smokytentacles.jpg';
import zb from '../assets/zbdy-w.jpeg';
import may4th from '../assets/may4th.png';

const Media: React.FC = () => {
  return (
    <section id="media" className="section section-dark">
      <h2 className="section-header text-mid-light margin-top-20vh padding-bottom-10vh">Media</h2>
        <div className="video-wrapper">
          <iframe 
            className="vertical-video" 
            src="https://www.youtube.com/embed/b_kp38jqi8Q" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
          <iframe 
            className="vertical-video" 
            src="https://www.youtube.com/embed/zRQJjN4cHiM?start=20&" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
        <div className="video-wrapper">
          <iframe className="horizontal-video" src="https://www.youtube.com/embed/NReyLj_dGN8?si=RoSzeOBOyxSQ4x-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className="horizontal-video" src="https://www.youtube.com/embed/gpwFDJ-2zmA?si=ibig8rQd3lQXG4db" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      <div className="image-container">
        <div className="caption-container">
          <img src={shamb2} alt="Sophie Hyphae, live loops artist, at Shambala Festival, as part of the Mixed Dips" />
          <p className="caption text-light">Shambala Festival 2025, photo: Jana Rumley</p>
        </div>
        <div className="caption-container">
          <img src={physic} alt="Sophie Hyphae at the Chelsea Physic Garden Summer Lates, playing piano improvisations and nature-entangled songs" />
          <p className="caption text-light">Chelsea Physic Garden Summer Lates</p>
        </div>
        <div className="caption-container">
          <img src={pianoJungle} alt="Sophie Hyphae's nature-entangled piano!" />
          <p className="caption text-light">Nature-entagled piano music in progress...</p>
        </div>
        <div className="caption-container">
          <img src={cgeS} alt="Sophie Hyphae, playing synthesizer music at a summer street party in Bristol" />
          <p className="caption text-light">A Bristol summer street party</p>
        </div>
        <div className="caption-container">
          <img src={zb} alt="Sophie Hyphae, playing synthesizer at Bridge Farm, Bristol" />
          <p className="caption text-light">Celebration at Bridge Farm</p>
        </div>
        <div className="caption-container">
          <img src={shamb3} alt="Sophie Hyphae, singing and playing synth at Shambala Festival, as part of the Mixed Dips" />
          <p className="caption text-light">Shambala Festival 2025</p>
        </div>
        <div className="caption-container">
          <img src={shamb1} alt="Sophie Hyphae, playing synth at Shambala Festival, as part of the Mixed Dips" />
          <p className="caption text-light">Shambala Festival 2025, photo: Jana Rumley</p>
        </div>
        <div className="caption-container">
          <img src={smoky} alt="Sophie Hyphae live loops artist playing music at a party in the Smoky Tentacles festival tent" />
          <p className="caption text-light">Celebration in the Smoky Tentacles</p>
        </div>
        <div className="caption-container">
          <img src={may4th} className="odd-img" alt="Sophie Hyphae live loops artist piano improvisations at May the Fourth Fest" />
          <p className="caption text-light">May the Fourth Fest</p>
        </div>
      </div>
    </section>
  );
};

export default Media;