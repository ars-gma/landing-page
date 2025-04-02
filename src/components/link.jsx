import React from "react";

export const Link = ({ href = "#", onClick, target, children, className }) => {
  return (
    <a href={href} onClick={onClick} target={target} className={className}>
      {children}
    </a>
  );
};
