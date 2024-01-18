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
  return (href ?(
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  ): (
    <ReactRouterLink className={className} to={to}>{children}</ReactRouterLink>
  ));
}

export default Link;
