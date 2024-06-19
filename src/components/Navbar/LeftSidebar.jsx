import React, { useState, useEffect, useRef } from "react";
import {
  dropdownItemsLeftSidebar,
  dropdownColumnsLeftSidebar,
} from "./constants";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { BsPlusCircleFill } from "react-icons/bs";
import { useAuthContext } from "../../context/AuthContextProviders";
import LanguagePopup from "../Popups/LanguagePopup";
import { usePopupContext } from "../../context/PopupContextProvider";
import toast from "react-hot-toast";
import InstallButton from "./InstallButton";

function LeftSidebar({ isLeftSidebarOpen, setIsLeftSidebarOpen }) {
  // const [isParentOpen, setIsParentOpen] = useState(isLeftSidebarOpen);
  const [nestedDropdowns, setNestedDropdowns] = useState([
    false,
    false,
    false,
    false,
  ]);
  const dropdownRef = useRef(null);
  const { user } = useAuthContext();
  const {  openPopup, closePopup } = usePopupContext();

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

  useEffect(() => {
    const closeDropdownsOnClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsLeftSidebarOpen(false);
        setNestedDropdowns([false, false, false]);
      }
    };

    document.addEventListener("click", closeDropdownsOnClickOutside);

    return () => {
      document.removeEventListener("click", closeDropdownsOnClickOutside);
    };
  }, []);

  const toggleParentDropdown = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
  };

  const toggleNestedDropdown = (index) => {
    const updatedNestedDropdowns = [...nestedDropdowns];
    updatedNestedDropdowns[index] = !updatedNestedDropdowns[index];
    setNestedDropdowns(updatedNestedDropdowns);
  };

  // Calculate the height of the parent dropdown based on the number of open nested dropdowns
  const parentDropdownStyle = {
    maxHeight: isLeftSidebarOpen
      ? `${90 - nestedDropdowns.filter(Boolean).length * 10}vh`
      : "auto",
  };

  return (
    <div className="relative inline-block text-left max-sm:text-sm" ref={dropdownRef}>
      <button
        onClick={toggleParentDropdown}
        className=" flex flex-col gap-[0.3rem]"
      >
        <div className="bg-[#FFA31A] w-6 max-sm:w-4 rounded h-[0.15rem]"></div>
        <div className="bg-[#FFA31A] w-6 max-sm:w-4 rounded h-[0.15rem]"></div>
        <div className="bg-[#FFA31A] w-6 max-sm:w-4 rounded h-[0.15rem]"></div>
      </button>
      {isLeftSidebarOpen && (
        <div
          className="absolute z-10 top-[43px] max-sm:top-6 left-[30px] max-sm:left-5 w-[17.1rem] no-scrollbar bg-[#0e0e0e] max-sm:border  p-4 rounded-lg shadow-lg overflow-y-auto"
          style={parentDropdownStyle}
        >
           <div className="flex flex-row items-center justify-center gap-10 pb-2 lg:hidden">
           <button className="">
                <PiYoutubeLogoFill className="text-[#c4302b] text-4xl" />
              </button>
              <button className="null ">
                <BsPlusCircleFill
                  className="text-[#c6c6c6] text-3xl"
                  onClick={handleOpenPopup}
                />
              </button>
              <div className="">
              <InstallButton />
              </div>
           </div>
          <ul className="flex flex-col gap-2">
            {dropdownItemsLeftSidebar.map((item, index) => (
              <li
                key={index}
                className={`${
                  item.special ? "bg-[#4285F4]" : "bg-[#151515]"
                } font-bold flex flex-col justify-start items-center gap-2 relative rounded-xl ${
                  nestedDropdowns[index] ? "pb-2" : ""
                }`}
              >
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleNestedDropdown(index)}
                      className={`w-full ${
                        item.special
                          ? "hover:bg-[#5a93ee]"
                          : "hover:bg-[#2b2b2b]"
                      } p-4 ${
                        nestedDropdowns[index] ? "rounded-t-xl" : "rounded-xl"
                      }  flex justify-start items-center gap-6 text-left focus:outline-none`}
                    >
                      {item.icon && <item.icon className="text-2xl max-sm:text-lg" />}
                      {item.title}
                      {item.subItems && (
                        <span className="ml-auto">
                          {nestedDropdowns[index] ? (
                            <IoMdArrowDropup className="text-2xl max-sm:text-sm" />
                          ) : (
                            <IoMdArrowDropdown className="text-2xl max-sm:text-lg" />
                          )}
                        </span>
                      )}
                    </button>
                    {nestedDropdowns[index] && (
                      <ul className="w-full flex flex-col justify-center px-4 py-0 items-center">
                        {item.subItems.map((subItem, index) => (
                          <li
                            key={index}
                            className="w-full hover:bg-[#2b2b2b] rounded-xl flex justify-start items-center gap-6 p-4 "
                          >
                            {subItem.icon && (
                              <subItem.icon className="text-2xl" />
                            )}
                            {subItem.title}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <button
                    className={`w-full ${
                      item.special ? "hover:bg-[#5a93ee]" : "hover:bg-[#2b2b2b]"
                    } p-4 rounded-xl  flex justify-start items-center gap-6 text-left focus:outline-none`}
                  >
                    {item.icon && <item.icon className="text-2xl max-sm:text-lg" />}
                    {item.title}
                  </button>
                )}
              </li>
            ))}
            <div className="flex flex-wrap justify-center items-center gap-1">
              {dropdownColumnsLeftSidebar.map((column, index) => (
                <li
                  key={index}
                  className="bg-[#151515] hover:bg-[#2b2b2b] font-bold flex flex-col justify-start items-center gap-2 px-3 py-0 relative rounded-xl"
                >
                  <button
                    className={`w-full p-4  rounded-xl flex flex-col justify-start items-start gap-2 text-left focus:outline-none`}
                  >
                    {column.icon && <column.icon className="text-2xl" />}
                    {column.title}
                  </button>
                </li>
              ))}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LeftSidebar;
