import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

export interface VerticalVideoProps {
  src: string;
  title?: string;
}

const VerticalVideo: React.FC<VerticalVideoProps> = ({ src, title }) => (
  <YouTubeEmbed className="vertical-video" src={src} title={title} />
);

export default VerticalVideo;
