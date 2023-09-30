import React from "react";
import { ComponentCard } from "../../common";

const Components = () => {
  return (
    <>
      <h1 className="text-3xl w-full text-left font-bold">Components</h1>
      <div className="w-full flex justify-between items-start">
        <div className="w-[70%] h-auto flex flex-wrap gap-4 my-10 justify-between items-center">
          {/* cards */}
          {Array.from({ length: 12 }, (_, index) => (
            <ComponentCard />
          ))}
        </div>
        <div className="w-[30%] my-10 flex flex-col justify-between items-center">
          <h2>Categories</h2>
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
            <li>Category 4</li>
            <li>Category 5</li>
            <li>Category 6</li>
            <li>Category 7</li>
            <li>Category 8</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Components;
