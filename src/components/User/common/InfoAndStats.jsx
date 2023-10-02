import React, { useState } from "react";
import ComponentChart from "./ComponentChart";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { usePopupContext } from "../../../context/PopupContextProvider";
import { SharePopup } from "../../Popups";

const InfoAndStats = ({userInfo}) => {
  console.log("fbdjfdf",userInfo);
  const [info,setInfo]= useState(userInfo)
  const [activeTab, setActiveTab] = useState("home");
  const { isOpen, popupContent, openPopup, closePopup } = usePopupContext();
  const openSharePopup = () => {
    const content = (
      <div className="fixed flex justify-center items-center top-0 left-0 h-screen w-screen bg-[#00000070] z-20 p-6">
        <div className="relative flex justify-center items-center bg-[#151515]  h-auto w-auto flex-col gap-4 rounded-md">
          <SharePopup closePopup={closePopup} />
        </div>
      </div>
    )
    openPopup(content);
  }
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between py-2 ">
          <ul className="flex justify-center items-center gap-2">
            <li
              className={`p-[10px] flex justify-center items-center cursor-pointer font-[600] ${activeTab === "home" ? "border-b-4 border-primary" : ""}`}
              onClick={() => setActiveTab("home")}
            >
              Home
            </li>
            <li
              className={`p-[10px] flex justify-center items-center cursor-pointer font-[600] ${activeTab === "stats" ? "border-b-4 border-primary" : ""}`}
              onClick={() => setActiveTab("stats")}
            >
              Stats
            </li>
            <li
              className={`p-[10px] flex justify-center items-center cursor-pointer font-[600] ${activeTab === "else" ? "border-b-4 border-primary" : ""}`}
              onClick={() => setActiveTab("else")}
            >
              Anything Else
            </li>
          </ul>
          <ul className="flex justify-center items-center gap-2">
            {/* <li className="flex justify-center items-center">idk</li> */}
            <li className="flex justify-center items-center">
              <button
                className="bg-secondary border border-6 py-[10px] px-[20px] m-[0px] rounded-[5px] font-[600]"
                onClick={openSharePopup}
              >
                Share
              </button>
            </li>
            {/* <li className="flex justify-center items-center">
              <button
                className="bg-secondary border border-6 py-[10px] px-[20px] m-[0px] rounded-[5px] font-[600]"
              >
                Follow
              </button>
            </li> */}
          </ul>
        </div>
        <div className="w-full flex items-start justify-between px-6">
          {activeTab === "home" &&
            <div className="w-full flex flex-col items-start justify-center">
              <h2 className="font-[700] mt-5 text-[20px]">About {userInfo?.name}</h2>
              <p className="font-[400] my-2 text-opacity-50">
                {userInfo?.bio}
              </p>
            </div>
          }
          {activeTab === "stats" &&
            <div className="w-full flex flex-col items-start justify-center">
              <h2 className="font-[700] mt-5 text-[20px]">This is Stats Component</h2>
              <p className="font-[400] my-2 text-opacity-50">
                {/* My bio My bio My bio My bio My bio My bio My bio My bio */}
              </p>
            </div>
          }
          {activeTab === "else" &&
            <div className="w-full flex flex-col items-start justify-center">
              <h2 className="font-[700] mt-5 text-[20px]">This is Something else</h2>
              <p className="font-[400] my-2 text-opacity-50">
                {/* My bio My bio My bio My bio My bio My bio My bio My bio */}
              </p>
            </div>
          }

          <div className="flex justify-center items-start">
            <ul className="flex flex-col justify-center items-start mx-20 gap-[20px]">
              {/* <li className="flex justify-center items-center gap-[10px]">
                <FaTwitterSquare />
                <a href={userInfo.socialLinks[]} className="text-opacity-100">Twitter</a>
              </li> */}
              {/* {info.socialLinks.map((link,idx)=>{
                  return (
                    <li key={idx}>
                      {link}
                    </li>
                  )
            
              })} */}
              
            </ul>
            <div>
              <ComponentChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoAndStats;
