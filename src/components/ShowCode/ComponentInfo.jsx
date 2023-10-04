import React, { useState, useContext, useEffect } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa";
import { auth } from "../../firebase/auth";
import { AiFillGithub } from "react-icons/ai";
import dummyProfileImg from "../../assets/dummyImage.jpg";

import { formatDateMongoDB } from "../../utils/formatDateMongoDB";
import { FaScaleBalanced } from "react-icons/fa6";
import { getCookie } from "../../context/AuthContextProviders";
import { getUserData } from "../../apis/user.api";
import { Link } from "react-router-dom";

const ComponentInfo = ({ data }) => {
  const [userData, setUserData] = useState(data);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  const { name, profilePicUrl, username } = userData?.userId || {};
  const { category, tags, langauage } = userData || {};

  return (
    <div className="w-full full flex flex-col rounded-t-[15px] overflow-scroll">
      {/* <div className="h-[40px] bg-[#292929] rounded-t-[15px] flex flex-row justify-end items-center px-[20px]">
        <AiFillInfoCircle
          className="text-[#FFF500] hover:cursor-pointer"
          title="UserInfo"
        />
      </div> */}
      <div className="flex flex-col flex-grow gap-[20px] items-center p-[40px] rounded-t-[15px] bg-[#151515]">
        <div className="w-full flex border-[#f00] gap-[20px] items-center">
          <div className="rounded-full w-[50px]">
            <Link
              to={`/profile/${username}`}
              className="font-[400] text-[14px] text-[#FFA31A]"
            >
              <img
                src={profilePicUrl || dummyProfileImg}
                alt="ProfileImg"
                className="w-full rounded-full"
              />
            </Link>
          </div>
          <div className="flex-grow">
            <Link
              to={`/profile/${username}`}
              className="font-[400] text-[14px] text-[#FFA31A]"
            >
              <h1 className="font-[600] text-[20px] text-[#ffffff]">{name}</h1>

              <h2>{username}</h2>
            </Link>
          </div>
          <AiFillGithub
            className="w-auto scale-150 hover:cursor-pointer"
            onClick={() => window.open(`${userData.socialLinks[0]}`, "_blank")}
          />
        </div>
        <hr className="w-[90%] border border-[#555]" />
        <div className="w-full flex justify-between items-center gap-[10px]">
          <h1 className="text-[25px] font-[700] leading-none">
            {category}
            <br />
            {tags?.map((tag) => (
              <span className="text-[15px] font-[400] text-[#aaa] ">
                #{tag},{" "}
              </span>
            ))}

            {/* <input
              id="tag-input"
              type="text"
              className="w-[100px] h-[30px] bg-[#151515] border border-[#555] rounded-[5px] text-[#aaa] font-[400] text-[15px] px-[10px]"
              placeholder="Add Tags"
              onKeyDown={addTags}
            /> */}
          </h1>
          <h2>
            <span className="flex items-center gap-[10px] text-[#786666] font-[700]">
              <FaRegCalendarCheck />
              {formatDateMongoDB(data?.createdAt)}
            </span>
          </h2>
        </div>
        <div className="flex flex-col justify-center items-start text-[#C6C6C6] gap-2 font-medium">
          <div className="flex justify-center items-start gap-2 px-8">
            <FaScaleBalanced className="text-2xl " />
            MIT License
          </div>
          <div className="bg-[#292929] px-6 py-4 rounded-md h-[300px] min-h-[200px] overflow-scroll ">
            <p>
              Copyright - {new Date(Date.now()).getFullYear()} {username} (
              {name}){" "}
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
