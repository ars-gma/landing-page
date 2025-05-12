import React from "react";
import { classNames } from "../utils/helpers";

export const PricingCard = ({ data, index }) => {
  return (
    <div
      key={data.id}
      className={classNames(
        data.featured
          ? "relative bg-gray-900 shadow-2xl"
          : "bg-white/60 sm:mx-8 lg:mx-0",
        data.featured
          ? ""
          : index === 0
          ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
          : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
        "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
      )}
    >
      <h3
        id={data.id}
        className={classNames(
          data.featured ? "text-blue-400" : "text-blue-600",
          "text-base/7 font-semibold"
        )}
      >
        {data.name}
      </h3>
      {/* <p className="mt-4 flex items-baseline gap-x-2">
        <span
          className={classNames(
            data.featured ? "text-white" : "text-gray-900",
            "text-5xl font-semibold tracking-tight"
          )}
        >
          {data.priceMonthly}
        </span>
        <span
          className={classNames(
            data.featured ? "text-gray-400" : "text-gray-500",
            "text-base"
          )}
        >
          /mes
        </span>
      </p> */}
      <p
        className={classNames(
          data.featured ? "text-gray-300" : "text-gray-600",
          "mt-6 text-base/7"
        )}
      >
        {data.description}
      </p>
      <ul
        className={classNames(
          data.featured ? "text-gray-300" : "text-gray-600",
          "mt-8 space-y-3 text-sm/6 sm:mt-10"
        )}
      >
        {data.features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            {feature}
          </li>
        ))}
      </ul>
      <a
        href={data.href}
        aria-describedby={data.id}
        className={classNames(
          data.featured
            ? "bg-blue-500 text-white shadow-xs hover:bg-blue-400 focus-visible:outline-blue-500"
            : "text-blue-600 ring-1 ring-blue-200 ring-inset hover:ring-blue-300 focus-visible:outline-blue-600",
          "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
        )}
      >
        Me interesa
      </a>
    </div>
  );
};
