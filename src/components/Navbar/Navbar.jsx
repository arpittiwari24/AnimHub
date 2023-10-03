import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DarkLogo } from "../../assets/logos/Logo";
import { BiSearch } from "react-icons/bi";
import { BsPlusCircleFill } from "react-icons/bs";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiWarningCircleFill } from "react-icons/pi";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { navLinks, subNavLinks } from "./constants";
import PromoStrip from "./PromoStrip";
import LanguagePopup from "../Popups/LanguagePopup";
import { usePopupContext } from "../../context/PopupContextProvider";
import { auth } from "../../firebase/auth";
import { useAuthContext } from "../../context/AuthContextProviders";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const { user } = useAuthContext();
  const { isOpen, popupContent, openPopup, closePopup } = usePopupContext();
  const handleOpenPopup = () => {
    const content = user ? (
      <div className="fixed flex justify-center items-center top-0 left-0 h-screen w-screen bg-[#00000070] z-20 p-6">
        <div className="relative flex justify-center items-center bg-[#151515]  h-auto w-auto flex-col gap-4 rounded-md">
          <LanguagePopup closePopup={closePopup} />
        </div>
      </div>
    ) : (
      toast.error("Login First")
    );
    openPopup(content);
  };

  return (
    <>
      <div className="w-full flex flex-col ">
        <div className="flex justify-center items-center">
          <ul className=" w-full flex justify-center items-center gap-4 py-1 bg-black">
            {subNavLinks.map((link) => (
              <li className=" text-[#969696]">
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-12 py-1 flex justify-between items-center bg-[#0e0e0e]">
          <div className=" w-[70%] flex justify-center items-center ">
            <div className="flex justify-center items-center gap-4">
              <LeftSidebar
                isLeftSidebarOpen={isLeftSidebarOpen}
                setIsLeftSidebarOpen={setIsLeftSidebarOpen}
              />
              <div className="">
                <DarkLogo width="180px" />
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
              <div className=" w-[70%] flex justify-center items-center bg-[#252525] px-4 py-[0.4rem] rounded-full">
                <BiSearch className="text-[#fff] text-2xl" />
                <input
                  className="appearance-none focus:outline-none all-none w-full bg-[#252525] text-[#fff] text-sm h-8 px-2 py-1  "
                  type="text"
                  placeholder="Search Animated Components"
                />
              </div>
              <button className="null">
                <BsPlusCircleFill
                  className="text-[#c6c6c6] text-3xl"
                  onClick={handleOpenPopup}
                />
              </button>
              <button className="">
                <PiYoutubeLogoFill className="text-[#c4302b] text-4xl" />
              </button>
            </div>
          </div>
          <div className="">
            <RightSidebar
              isRightSidebarOpen={isRightSidebarOpen}
              setIsRightSidebarOpen={setIsRightSidebarOpen}
            />
          </div>
        </div>

        <div className="px-12 py-1 pb-0 flex justify-between items-center  bg-[#0e0e0e]">
          <ul className="grid grid-cols-8 justify-items-center w-full h-full items-center mx-auto">
            {navLinks.map((link) => (
              <li className="group grid w-full h-auto  text-[#fff] font-bold cursor-pointer">
                <a className="group-hover:bg-[#333333] group-hover:border-[#363636] border-[1px] border-[transparent]">
                  <span className="flex flex-col justify-center items-center">
                    <span className="inline-block text-center align-top">
                      {link.name}{" "}
                      {link.content && (
                        <IoMdArrowDropdown className="inline-block text-[#fff] text-2xl" />
                      )}
                    </span>
                    <span className="w-full h-[1.5px] mx-auto bg-yellow-600 group-hover:block group-hover:opacity-100 opacity-0 relative top-0"></span>
                  </span>
                </a>
                {link.content && (
                  <div className="absolute top-[126px] left-0 w-full h-auto bg-[#000] text-white hidden group-hover:flex flex-col shadow-md z-50 border-x-0 border-y-[0.05px] border-[#606060] animate-fadeIn">
                    {<link.content />}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-1 py-1 justify-center items-center bg-[#1b1b1b]">
          <PiWarningCircleFill className="text-[#c6c6c6] text-2xl" />
          <p className="">
            If you have anything for us or want to join us visit here
          </p>
        </div>
        <PromoStrip />
      </div>
    </>
  );
};

export default Navbar;
