import React from "react";

export const Tabs = ({ data, activeTabIndex, onClick }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-fit border-b mt-[2rem] mx-auto">
        {data.map((tab) => {
          return (
            <button
              key={tab.key}
              className={`py-2 border-b-4 transition-colors duration-300 mx-[1rem] md:mx-[2rem] ${
                tab.key === activeTabIndex
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent hover:border-blue-200"
              }`}
              onClick={() => onClick(tab.key)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="py-4">{data[activeTabIndex].content}</div>
    </div>
  );
};
