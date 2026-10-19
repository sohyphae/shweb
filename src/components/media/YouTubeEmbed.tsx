import React from 'react';

export interface YouTubeEmbedProps {
  src: string;
  className: string;
  title?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ src, className, title = 'YouTube video player' }) => (
  <iframe
    className={className}
    src={src}
    title={title}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
);

export default YouTubeEmbed;
