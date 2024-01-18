import React from 'react';

function Button({
  disabled = false,
  onClick = null,
  href = null,
  className = '',
  children,
}) {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      className={`button ${className}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </Tag>
  );
}

export default Button;
