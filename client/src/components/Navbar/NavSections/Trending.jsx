import React from "react";

const Trending = () => {
  return (
    <>
      <div className="w-full h-full flex justify-between items-center py-6 px-10">
        <div className="w-[33.33%] h-full flex flex-col justify-start items-center">
          <h1 className="flex justify-center items-center gap-2 text-2xl font-bold">
            Component of the Day
          </h1>
        </div>
        <div className="w-[33.33%] h-full flex flex-col justify-start items-center">
          <h1 className="flex justify-center items-center gap-2 text-2xl font-bold">
            Component of the Week
          </h1>
        </div>
        <div className="w-[33.33%] h-full flex flex-col justify-start items-center">
          <h1 className="flex justify-center items-center gap-2 text-2xl font-bold">
            Component of the Month
          </h1>
        </div>
      </div>
    </>
  );
};

export default Trending;
