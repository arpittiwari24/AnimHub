/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import ComponentChart from "./ComponentChart";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { usePopupContext } from "../../../context/PopupContextProvider";
import { SharePopup } from "../../Popups";
import { auth } from "../../../firebase/auth";
import { useUserContext } from "../../../context/UserContextProvider";
import { followUser, unFollowUser } from "../../../apis/user.api";
import { AiOutlineShareAlt } from "react-icons/ai";

const InfoAndStats = ({ userInfo }) => {
  console.log("fbdjfdf", userInfo);
  const [success, setSuccess] = useState(false)
  const [info, setInfo] = useState(userInfo);
  const [activeTab, setActiveTab] = useState("home");
  const { isOpen, popupContent, openPopup, closePopup } = usePopupContext();
  const {userData} = useUserContext()
  const openSharePopup = () => {
    const content = (
      <div className="fixed flex justify-center items-center top-0 left-0 h-screen w-screen bg-[#00000070] z-20 p-6">
        <div className="relative flex justify-center items-center bg-[#151515]  h-auto w-auto flex-col gap-4 rounded-md">
          <SharePopup closePopup={closePopup} />
        </div>
      </div>
    );
    openPopup(content);
  };

  useEffect(() => {
    setInfo(userInfo);
  }, [info, userInfo, success]);

  const followUserName = async () => {
    console.log("follow");
    // eslint-disable-next-line react/prop-types
    const followRequest = await followUser(userData.email, userInfo?.email);

    if(followRequest.success === true) {
      setSuccess(true)
    } else {
      setSuccess(false)
    }
  }

  const unFollowUserName = async () => {
    console.log("unFollow")

    const unFollowRequest = await unFollowUser(userData.email, userInfo?.email)

    console.log(unFollowRequest);

    if(unFollowRequest.success === true) {
      setSuccess(false)
    } else {
      setSuccess(true)
    }
  }

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between max-sm:justify-center py-2">
          <ul className="flex justify-center items-center gap-2">
            <li
              className={`p-[10px] flex justify-center items-center cursor-pointer max-sm:text-md max-sm:font-[400] font-[600] ${activeTab === "home" ? "border-b-4 border-primary" : ""
                }`}
              onClick={() => setActiveTab("home")}
            >
              Home
            </li>
            <li
              className={`p-[10px] flex justify-center items-center cursor-pointer max-sm:text-md max-sm:font-[400] font-[600] ${activeTab === "stats" ? "border-b-4 border-primary" : ""
                }`}
              onClick={() => setActiveTab("stats")}
            >
              Stats
            </li>
            <li
              className={`p-[10px] flex justify-center items-center cursor-pointer max-sm:text-md max-sm:font-[400] font-[600] ${activeTab === "else" ? "border-b-4 border-primary" : ""
                }`}
              onClick={() => setActiveTab("else")}
            >
              Else
            </li>
          </ul>
          <ul className="flex justify-center items-center gap-2">
            {/* <li className="flex justify-center items-center">idk</li> */}
            <li className="flex justify-center items-center max-sm:hidden">
              <button
                className="bg-secondary border border-6 py-[10px] max-sm:py-[6px] px-[20px] max-sm:px-[15px] m-[0px] rounded-[5px] font-[600] max-sm:text-sm max-sm:font-[400]"
                onClick={openSharePopup}
              >
                {/* <AiOutlineShareAlt /> */}Share
              </button>
            </li>
            {auth?.currentUser?.email !== userInfo?.email ? (
              <li className="flex justify-center items-center">
                {userData !== undefined && userData?.following.includes(userInfo?.id) || success === true ? (
                <button onClick={unFollowUserName} className="bg-secondary border border-6 py-[10px] max-sm:py-[6px] px-[20px] max-sm:px-[15px] m-[0px] rounded-[5px] max-sm:text-sm font-[600] max-sm:font-[400]">
                  Following
                </button>
                ) : (
                <button onClick={followUserName} className="bg-secondary border border-6 py-[10px] max-sm:py-[6px] px-[20px] max-sm:px-[15px] m-[0px] rounded-[5px] font-[600] max-sm:text-sm max-sm:font-[400]">
                  Follow
                </button>
                )}
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="w-full flex items-start max-sm:items-center  justify-between px-6">
          {activeTab === "home" && (
            <div className="w-full flex flex-col items-start justify-center">
              {/* <h2 className="font-[700] text-center max-sm:font-[400] mt-5 text-[20px] max-sm:text-[15px]">
                About
              </h2> */}
              <p className="font-[400] lg:font-[600] lg:text-lg my-2 text-opacity-50">{userInfo?.bio !== "" ? ( 
                <span>{userInfo?.bio}</span> )
              : (
                <span>Writing ( default bio )</span>
              )}</p>
            </div>
          )}
          {activeTab === "stats" && (
            <div className="w-full flex flex-col items-start max-sm:items-center justify-center">
              <h2 className="font-[700] mt-5 text-[20px]">
              <ComponentChart />
              </h2>
              <p className="font-[400] my-2 text-opacity-50">
                {/* My bio My bio My bio My bio My bio My bio My bio My bio */}
              </p>
            </div>
          )}
          {activeTab === "else" && (
            <div className="w-full flex flex-col items-start justify-center">
              <h2 className="font-[700] mt-5 text-[20px]">
                This is Something else
              </h2>
              <p className="font-[400] my-2 text-opacity-50">
                {/* My bio My bio My bio My bio My bio My bio My bio My bio */}
              </p>
            </div>
          )}

          <div className="flex justify-center items-start">
            {info &&
              <ul className="flex flex-col justify-center items-start mx-20 gap-[20px]">
                {/* <li className="flex justify-center items-center gap-[10px]">
                <FaTwitterSquare />
                <a href={userInfo.socialLinks[]} className="text-opacity-100">Twitter</a>
              </li> */}
              {/* <Link target="_blank" to={userInfo.socialLinks[0]} className="flex justify-center items-center gap-[10px]">
                <FaGithubSquare /> Github
              </Link>
              <Link target="_blank" to={userInfo.socialLinks[1]} className="flex justify-center items-center gap-[10px]">
                <FaLinkedin /> LinkedIn
              </Link>
              <Link target="_blank" to={userInfo.socialLinks[2]} className="flex justify-center items-center gap-[10px]">
                <FaInstagramSquare /> Instagram
              </Link> */}
              </ul>
            }
            {/* <div>
              <ComponentChart />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoAndStats;
