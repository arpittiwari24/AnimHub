import React, { useContext, useState } from "react";
import { MdOutlinePreview } from "react-icons/md";
// import AuthContext from '../../context/AuthContextProviders';

const CodeOutput = ({ sourceCode }) => {
  // console.log(sourceCode);
  return (
    <div className="w-full flex flex-col resize-y overflow-auto">
      <div className="h-[40px] bg-[#292929] flex flex-row justify-end items-center rounded-t-[15px] px-[20px] text-[600] text-[20px]">
        <MdOutlinePreview
          className="text-[#00E0FF] hover:cursor-pointer"
          title="Preview"
        />
      </div>
      <iframe
        id="iframe"
        className="w-full flex-grow px-[1px]"
        srcDoc={sourceCode}
      />
      <div className="h-[40px] bg-[#292929] rounded-b-[15px]"></div>
    </div>
  );
};

export default CodeOutput;
