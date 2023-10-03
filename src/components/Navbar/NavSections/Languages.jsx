import React from "react";

const Languages = () => {
  return (
    <>
      <div className="w-full h-full flex justify-between items-center py-6 px-10">
        <div className="w-full h-full flex flex-col justify-start items-start">
          <h1 className="text-2xl font-bold">Languages</h1>
          <ul className="flex flex-wrap justify-start items-center gap-4 mt-4 cursor-pointer">
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
              HTML+CSS
            </li>
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
              HTML+CSS+JS
            </li>
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
              HTML+Tailwind
            </li>
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
              HTML+Tailwind+JS
            </li>
            <li className="bg-[#151515] hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg cursor-not-allowed">
              More coming soon...
            </li>
          </ul>
        </div>
        <div className="w-[60%] h-full flex flex-col justify-center items-center " style={{ display: "none" }}>
          Hello
        </div>
        <div className="w-[15%] h-full flex flex-col justify-center items-center " style={{ display: "none" }}>
          Hello
        </div>
      </div>
    </>
  );
};

export default Languages;
