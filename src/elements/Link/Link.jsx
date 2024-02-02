import React from 'react';

import { Link as ReactRouterLink } from 'react-router-dom'

function Link({
  href,
  children,
  to,
  target = null,
  rel = null,
  className = '',
}) {
  return (to ? (
    <ReactRouterLink className={className} to={to}>{children}</ReactRouterLink>
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
