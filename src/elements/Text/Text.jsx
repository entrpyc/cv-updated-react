import React from 'react'

function Text({
  tag: Tag = 'p',
  className = '',
  children,
}) {
  return (
    <Tag className={`text ${className}`}>
      {children}
    </Tag>
  );
}

export default Text