import React from 'react';

import './Image.scss'

function Image({
  src = '',
  alt = '',
  className = '',
}) {
  return (
    <div className={`image ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
