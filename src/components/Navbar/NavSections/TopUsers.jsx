import React from "react";
import { BsFillChatHeartFill } from "react-icons/bs";
import { RiUserFollowFill } from "react-icons/ri";
import { MdAutoGraph } from "react-icons/md";

const TopUser = () => {
  return (
    <>
      <div className="w-full h-full flex justify-between items-center py-6 px-10">
        <div className="w-[33.33%] h-full flex flex-col justify-start items-center">
          <div className="flex flex-col justify-start items-start">
            <h1 className="flex justify-center items-center gap-2 text-2xl font-bold">
              Most Components Added
              <MdAutoGraph />
            </h1>
            <ul className="flex flex-col justify-start items-start gap-4 mt-4">
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 1
              </li>
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 2
              </li>
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 3
              </li>
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 4
              </li>
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 5
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[33.33%] h-full flex flex-col justify-start items-center">
          <div className="flex flex-col justify-start items-start">
            <h1 className="flex justify-center items-center gap-2 text-2xl font-bold">
              Highest Followers
              <RiUserFollowFill />
            </h1>
            <ul className="flex flex-col justify-start items-start gap-4 mt-4">
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 1
              </li>
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 2
              </li>
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 3
              </li>
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 4
              </li>
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 5
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[33.33%] h-full flex flex-col justify-start items-center">
          <div className="flex flex-col justify-start items-start">
            <h1 className="flex justify-center items-center gap-2 text-2xl font-bold">
              Most Liked Users
              <BsFillChatHeartFill />
            </h1>
            <ul className="flex flex-col justify-start items-start gap-4 mt-4">
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 1
              </li>
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 2
              </li>
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 3
              </li>
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 4
              </li>
              <li className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                User 5
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopUser;
