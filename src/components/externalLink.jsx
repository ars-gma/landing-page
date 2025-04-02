import React from "react";
import { classNames } from "../utils/helpers";

export const ExternalLink = ({
  href,
  onClick,
  target = "_blank",
  children,
  className,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      className={classNames("cursor-pointer text-blue-500 hover:text-blue-700 hover:underline decoration-blue-600", className)}
      rel="noopener noreferrer"
    >
      <span className="flex flex-row items-center">
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </span>
    </a>
  );
};
