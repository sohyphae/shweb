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
            src="https://www.youtube.com/embed/zRQJjN4cHiM" 
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
          <img src={shamb2} alt="" />
          <p className="caption text-light">Shambala Festival 2025, photo: Jana Rumley</p>
        </div>
        <div className="caption-container">
          <img src={physic} alt="" />
          <p className="caption text-light">Chelsea Physic Garden Summer Lates</p>
        </div>
        <img src={pianoJungle} alt="" />
        <img src={cgeS} alt="" />
        <img src={zb} alt="" />
        <img src={shamb3} alt="" />
        <div className="caption-container">
          <img src={shamb1} alt="" />
          <p className="caption text-light">Shambala Festival 2025, photo: Jana Rumley</p>
        </div>
        <img src={smoky} alt="" />
        <img src={may4th} className="odd-img" alt="" />
      </div>
    </section>
  );
};

export default Media;