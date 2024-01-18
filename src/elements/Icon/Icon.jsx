import React from 'react';
import InlineSVG from 'react-inlinesvg';

import './Icon.scss'

const DEFAULT_FILE_EXTENSION = 'svg';
const FILE_ROUTE = 'assets/icons/';

const fileExtensionMapping = {
  // pin: 'webp',
};

function Icon({
  name,
  alt,
  focusable = false,
  direction = '',
  className = '',
}) {
  const fileExtension = fileExtensionMapping[name] || DEFAULT_FILE_EXTENSION;
  const fileName = `${name}.${fileExtension}`;

  const iconClasses= `icon ${direction} ${focusable ? 'focusable' : ''} ${className}`;

  const iconElement = fileExtension === 'svg' ? (
    <InlineSVG className="svg" src={`${FILE_ROUTE}${fileName}`} />
  ): (
    <img src={`${FILE_ROUTE}${fileName}`} alt={alt} />
  )

  return (
    <span className={iconClasses}>{iconElement}</span>
  );
};

export default Icon;