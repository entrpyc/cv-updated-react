import React from 'react'

function Title({
  tag: Tag = 'h2',
  className = '',
  children,
}) {
  return (
    <Tag className={`title ${className}`}>
      {children}
    </Tag>
  );
};

export default Title