import React, { useContext } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa";
const tags = ["button", "cool", "neon"];
import { auth } from "../../firebase/auth";
import { AiFillGithub } from "react-icons/ai";
import dummyProfileImg from "../../assets/dummyImage.jpg";
import { EditorContext } from "../../context/EditorContextProvider";

const ComponentInfo = () => {
  const { email, photoURL, displayName } = auth.currentUser;
  const { langCategory } = useContext(EditorContext);

  return (
    <div className="w-full h-1/2 flex flex-col">
      <div className="h-[40px] bg-[#292929] rounded-t-[15px] flex flex-row justify-end items-center px-[20px]">
        <AiFillInfoCircle
          className="text-[#FFF500] hover:cursor-pointer"
          title="UserInfo"
        />
      </div>
      <div className="flex flex-col flex-grow gap-[20px] items-center p-[40px] bg-[#151515]">
        <div className="w-full flex border-[#f00] gap-[20px] items-center">
          <div className="rounded-full w-[50px]">
            <img
              src={photoURL || dummyProfileImg}
              alt="ProfileImg"
              className="w-full rounded-full"
            />
          </div>
          <div className="flex-grow">
            <h1 className="font-[600] text-[20px]">{displayName}</h1>
            <a href="#" className="font-[400] text-[14px] text-[#FFA31A]">
              <h2>{email}</h2>
            </a>
          </div>
          <AiFillGithub
            className="w-auto scale-150 hover:cursor-pointer"
            onClick={() =>
              window.open("https://www.github.com/onkar58", "_blank")
            }
          />
        </div>
        <hr className="w-[90%] border border-[#555]" />
        <div className="w-full flex justify-between items-center gap-[10px]">
          <h1 className="text-[25px] font-[700] leading-none">
            {langCategory.category}
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
