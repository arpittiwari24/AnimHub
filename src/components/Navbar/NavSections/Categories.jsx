import React from "react";

const Categories = () => {
  return (
    <>
      <div className="w-full h-full flex justify-between items-center py-6 px-10">
        <div className="w-[25%] h-full flex flex-col justify-start items-start">
          <h1 className="text-2xl font-bold">Categories</h1>
          <ul className="flex flex-wrap justify-start items-center gap-4 mt-4">
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
              Buttons
            </li>
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
              Inputs
            </li>
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
              Loaders
            </li>
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
              Checkboxes
            </li>
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
              Cards
            </li>
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
              Toggles
            </li>
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
              Forms
            </li>
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
              More coming soon...
            </li>
          </ul>
        </div>
        <div className="w-[60%] h-full flex flex-col justify-center items-center">
          Hello
        </div>
        <div className="w-[15%] h-full flex flex-col justify-center items-center">
          Hello
        </div>
      </div>
    </>
  );
};

export default Categories;
