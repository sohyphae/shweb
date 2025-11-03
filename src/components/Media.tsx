import React from 'react';
import shamb1 from '../assets/shambala.jpg';

const Media: React.FC = () => {
  return (
    <section id="media" className="section section-dark">
      <h2 className="section-header text-light margin-top-20vh">Media</h2>
      <div className="video-container">
        <iframe 
          className="vertical-video" 
          src="https://www.youtube.com/embed/b_kp38jqi8Q" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
        <div className="horizontal-video-wrapper">
          <iframe className="horizontal-video" src="https://www.youtube.com/embed/NReyLj_dGN8?si=RoSzeOBOyxSQ4x-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className="horizontal-video" src="https://www.youtube.com/embed/gpwFDJ-2zmA?si=ibig8rQd3lQXG4db" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div className="image-container">
        <img src={shamb1} alt="" />
        <img src={shamb1} alt="" />
        <img src={shamb1} alt="" />
        <img src={shamb1} alt="" />
        <img src={shamb1} alt="" />
        <img src={shamb1} alt="" />
      </div>
    </section>
  );
};

export default Media;