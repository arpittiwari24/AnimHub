import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="flex justify-center items-center text-3xl text-white font-black">
          Not<span className="text-black bg-primary">Found</span>
        </h1>
        <p className="text-[#c6c6c6] ">
          The page you are looking for is not available.
        </p>
        <button className="">Back to Homepage</button>
      </div>
    </>
  );
};

export default NotFound;
