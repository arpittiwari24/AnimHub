import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import UserInfo from "./UserInfo";
import { FaRegCalendarCheck } from "react-icons/fa";
const tags = ["button", "cool", "neon"];

const ComponentInfo = () => {
  return (
    <div className="w-full h-1/2 flex flex-col">
      <div className="h-[40px] bg-[#292929] rounded-t-[15px] flex flex-row justify-end items-center px-[20px]">
        <AiFillInfoCircle
          className="text-[#FFF500] hover:cursor-pointer"
          title="UserInfo"
        />
      </div>
      <div className="flex flex-col flex-grow gap-[20px] items-center p-[40px] bg-[#151515]">
        <UserInfo />
        <hr className="w-[90%] border border-[#555]" />
        <div className="w-full flex justify-between items-center gap-[10px]">
          <h1 className="text-[25px] font-[700] leading-none">
            {"Button"}
            <br />
            {tags.map((tag) => (
              <span className="text-[15px] font-[400] text-[#aaa] ">
                #{tag},{" "}
              </span>
            ))}
          </h1>
          <h2>
            <span className="flex items-center gap-[10px] text-[#786666] font-[700]">
              <FaRegCalendarCheck />
              {"Oct. 22, 23"}
            </span>
          </h2>
        </div>
      </div>
      <div className="h-[40px] bg-[#292929] rounded-b-[15px]"></div>
    </div>
  );
};

export default ComponentInfo;
