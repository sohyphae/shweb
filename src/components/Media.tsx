import React from 'react';
import hhvid from '../assets/hammer-hearted-sqr.mp4';
import cgevid from '../assets/common-garden-energy-short.mp4';
import shamb1 from '../assets/shambala.jpg';

const Media: React.FC = () => {
  return (
    <section id="media" className="section section-dark">
      <h2 className="section-header text-light margin-top-20vh">Media</h2>
      <div className="video-container">
       {/* <video controls width="250"> */}
       <video controls> 
          <source src={cgevid} type="video/webm" />
        </video>
        <video controls> 
          <source src={hhvid} type="video/webm" />
        </video>
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