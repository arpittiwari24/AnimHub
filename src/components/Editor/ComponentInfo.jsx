import React, { useContext } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa";
import { auth } from "../../firebase/auth";
import { AiFillGithub } from "react-icons/ai";
import dummyProfileImg from "../../assets/dummyImage.jpg";
import { EditorContext } from "../../context/EditorContextProvider";

import { formatCustomDate } from "../../utils/formatCustomDate";
import { FaScaleBalanced } from "react-icons/fa6";

const ComponentInfo = () => {
  const { email, photoURL, displayName } = auth.currentUser;
  const { tags, setTags, langCategory } = useContext(EditorContext);

  const addTags = (e) => {
    if (e.key === "Enter") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div className="w-full h-1/2 flex flex-col rounded-t-[15px]">
      {/* <div className="h-[40px] bg-[#292929] rounded-t-[15px] flex flex-row justify-end items-center px-[20px]">
        <AiFillInfoCircle
          className="text-[#FFF500] hover:cursor-pointer"
          title="UserInfo"
        />
      </div> */}
      <div className="flex flex-col flex-grow gap-[20px] items-center p-[40px] rounded-t-[15px] bg-[#151515]">
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
            <span className="text-[15px] font-[400] text-[#aaa] ">
              #{langCategory.category},
            </span>
            {tags.map((tag) => (
              <span className="text-[15px] font-[400] text-[#aaa] ">
                #{tag},{" "}
              </span>
            ))}

            <input
              type="text"
              className="w-[100px] h-[30px] bg-[#151515] border border-[#555] rounded-[5px] text-[#aaa] font-[400] text-[15px] px-[10px]"
              placeholder="Add Tags"
              onKeyDown={addTags}
            />
          </h1>
          <h2>
            <span className="flex items-center gap-[10px] text-[#786666] font-[700]">
              <FaRegCalendarCheck />
              {formatCustomDate(Date.now())}
            </span>
          </h2>
        </div>
        <div className="flex flex-col justify-center items-start text-[#C6C6C6] gap-2 font-medium">
          <div className="flex justify-center items-start gap-2 px-8">
            <FaScaleBalanced className="text-2xl " />
            MIT License
          </div>
          <div className="bg-[#292929] px-6 py-4 rounded-md h-[100px] overflow-scroll ">
            <p>
              Copyright - {new Date(Date.now()).getFullYear()} username (
              {displayName}){" "}
            </p>

            <p>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the “Software”), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>

            <p>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>

            <p>
              THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="h-[40px] bg-[#292929] rounded-b-[15px]"></div> */}
    </div>
  );
};

export default ComponentInfo;
