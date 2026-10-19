import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

export interface LargeVideoProps {
  src: string;  
  title?: string;  
}

const LargeVideo: React.FC<LargeVideoProps> = ({ src, title }) => (
  <div className="large-video-wrapper">
    <YouTubeEmbed className="video-large" src={src} title={title} />
  </div>
);

export default LargeVideo;
