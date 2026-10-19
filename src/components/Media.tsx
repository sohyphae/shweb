import React from 'react';
import shamb1 from '../assets/shambala.jpg';
import shamb2 from '../assets/shambala2.jpg';
import shamb3 from '../assets/shambala3.jpg';
import physic from '../assets/physic-garden.jpg';
import cgeS from '../assets/cge-sp-synth.jpeg';
import pianoJungle from '../assets/pianojungle.jpg';
import pride from '../assets/wepride26-sophie.jpg';
import insieme from '../assets/hyphae-insiemme-pic.jpeg';
import nac from '../assets/hyphae-not-a-cult-sqr.jpeg';
import smoky from '../assets/smokytentacles.jpg';
import zb from '../assets/zbdy-w.jpeg';
import may4th from '../assets/may4th.jpeg';
import synthLights from '../assets/synth-lights-shamb26.jpeg';
import sophTomShamb from '../assets/soph-tom-shamb26.jpeg';
import cafe5 from '../assets/cafe5-4-sqr.jpeg';
import LargeVideo from './media/LargeVideo';
import CaptionedImage, { type CaptionedImageProps } from './media/CaptionedImage';
import VerticalVideo from './media/VerticalVideo';
import YouTubeEmbed from './media/YouTubeEmbed';

const largeVideos: string[] = [
  'https://www.youtube.com/embed/qdsArDVSolA?si=gkoH97vDpEvzy6af',
  'https://www.youtube.com/embed/QsmDTuXdVh0?si=GFfCFdZPp1rSYImz',
  'https://www.youtube.com/embed/Dh5fNdeWS-w?si=jvJJ4ynPsJWFuX0S',
  'https://www.youtube.com/embed/ZVbNfwFSl_w?si=BCeX1C1gQbNfGDbi',
];

const images: CaptionedImageProps[] = [
  { src: insieme, alt: 'Sophie Hyphae, playing synth at Insieme Festival', caption: 'Insieme Festival 2026' },
  { src: nac, alt: 'Sophie Hyphae, singing at Not a Cult Festival', caption: 'Not a Cult Festival 2026' },
  { src: synthLights, alt: "Sophie Hyphae's Mycelial Futurism at Shambala", caption: "Sophie Hyphae's Mycelial Futurism" },
  { src: sophTomShamb, alt: 'Sophie Hyphae and Tom Trumpet at Shambala', caption: 'Sophie and Tom Trumpet at Shambala' },
  { src: pride, alt: 'Sophie Hyphae, singing at Windsor and Eton Pride 2026', caption: 'Windsor and Eton Pride 2026' },
  { src: cafe5, alt: 'Sophie Hyphae at Cafe 5, Bristol', caption: 'Cafe 5, Bristol' },
  { src: shamb2, alt: 'Sophie Hyphae, live loops artist, at Shambala Festival, as part of the Mixed Dips', caption: 'Shambala Festival 2025, photo: Jana Rumley' },
  { src: physic, alt: 'Sophie Hyphae at the Chelsea Physic Garden Summer Lates, playing piano improvisations and nature-entangled songs', caption: 'Chelsea Physic Garden Summer Lates' },
  { src: pianoJungle, alt: "Sophie Hyphae's nature-entangled piano!", caption: 'Nature-entagled piano music in progress...' },
  { src: cgeS, alt: 'Sophie Hyphae, playing synthesizer music at a summer street party in Bristol', caption: 'A Bristol summer street party' },
  { src: zb, alt: 'Sophie Hyphae, playing synthesizer at Bridge Farm, Bristol', caption: 'Celebration at Bridge Farm' },
  { src: shamb3, alt: 'Sophie Hyphae, singing and playing synth at Shambala Festival, as part of the Mixed Dips', caption: 'Shambala Festival 2025' },
  { src: shamb1, alt: 'Sophie Hyphae, playing synth at Shambala Festival, as part of the Mixed Dips', caption: 'Shambala Festival 2025, photo: Jana Rumley' },
  { src: smoky, alt: 'Sophie Hyphae live loops artist playing music at a party in the Smoky Tentacles festival tent', caption: 'Celebration in the Smoky Tentacles' },
  { src: may4th, alt: 'Sophie Hyphae live loops artist piano improvisations at May the Fourth Fest', caption: 'May the Fourth Fest', isOdd: true },
];

const verticalVideos: string[] = [
  'https://www.youtube.com/embed/uGb6IIn17BE',
  'https://www.youtube.com/embed/_saSVDwrL78',
  'https://www.youtube.com/embed/5LDwZCKOhYA',
  'https://www.youtube.com/embed/b_kp38jqi8Q',
  'https://www.youtube.com/embed/zRQJjN4cHiM?start=20&',
  'https://www.youtube.com/embed/QXM9njrUV_g',
];

const horizontalVideos: string[] = [
  'https://www.youtube.com/embed/NReyLj_dGN8?si=RoSzeOBOyxSQ4x-s',
  'https://www.youtube.com/embed/gpwFDJ-2zmA?si=ibig8rQd3lQXG4db',
];

const Media: React.FC = () => {
  return (
    <section id="media" className="section section-dark">
      <h2 className="section-header text-mid-light margin-top-20vh padding-bottom-10vh">Media</h2>
      {largeVideos.map((src) => (
        <LargeVideo key={src} src={src} />
      ))}
      <div className="image-container">
        {images.map((image) => (
          <CaptionedImage key={image.src} {...image} />
        ))}
      </div>
      <div className="video-wrapper">
        {verticalVideos.map((src) => (
          <VerticalVideo key={src} src={src} />
        ))}
      </div>
      <div className="video-wrapper">
        {horizontalVideos.map((src) => (
          <YouTubeEmbed key={src} className="horizontal-video" src={src} />
        ))}
      </div>
    </section>
  );
};

export default Media;
