import React from 'react';

export interface CaptionedImageProps {
  src: string;
  alt: string;
  caption: string;
  isOdd?: boolean;
}

const CaptionedImage: React.FC<CaptionedImageProps> = ({ src, alt, caption, isOdd = false }) => (
  <div className={isOdd ? 'caption-container odd-img' : 'caption-container'}>
    <img src={src} alt={alt} />
    <p className="caption text-light">{caption}</p>
  </div>
);

export default CaptionedImage;
