import React from 'react';

import { Link as ReactRouterLink } from 'react-router-dom'

function Link({
  href,
  children,
  to,
  target = null,
  rel = null,
  className = '',
  download,
  downloadFileName
}) {
  return (to ? (
    <ReactRouterLink className={className} to={to}>{children}</ReactRouterLink>
  ): download ? (
    <a
      href={download}
      className={className}
      download={downloadFileName}
    >
      {children}
    </a>
  ): (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  ));
}

export default Link;
