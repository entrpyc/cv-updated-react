import React from 'react'

function Badge({
  className = '',
  children,
}) {
  return (
    <div className={`badge ${className}`}>
      {children}
    </div>
  );
}

export default Badge