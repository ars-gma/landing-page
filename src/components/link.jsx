import React from "react";

export const Link = ({ href = "#", onClick, children, className }) => {
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
};
