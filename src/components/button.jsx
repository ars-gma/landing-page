import React from "react";
import { classNames } from "../utils/helpers";

export const Button = ({ href, onClick, children, className }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={classNames(
        "rounded-xl bg-blue-700 px-12 py-4 text-md font-pretty text-white shadow-xs hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950",
        className
      )}
    >
      {children}
    </a>
  );
};
