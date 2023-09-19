import React, { useState, useEffect, useRef } from "react";
import {
  dropdownItemsLeftSidebar,
  dropdownColumnsLeftSidebar,
} from "./constants";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function LeftSidebar({ isLeftSidebarOpen, setIsLeftSidebarOpen }) {
  // const [isParentOpen, setIsParentOpen] = useState(isLeftSidebarOpen);
  const [nestedDropdowns, setNestedDropdowns] = useState([
    false,
    false,
    false,
    false,
  ]);
  const dropdownRef = useRef(null);

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
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleParentDropdown}
        className=" flex flex-col gap-[0.3rem]"
      >
        <div className="bg-[#FFA31A] w-6 rounded h-[0.15rem]"></div>
        <div className="bg-[#FFA31A] w-6 rounded h-[0.15rem]"></div>
        <div className="bg-[#FFA31A] w-6 rounded h-[0.15rem]"></div>
      </button>
      {isLeftSidebarOpen && (
        <div
          className="absolute top-[45px] left-[30px] w-[17rem] bg-[#0e0e0e] p-4 rounded-lg shadow-lg overflow-y-auto"
          style={parentDropdownStyle}
        >
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
                      {item.icon && <item.icon className="text-2xl" />}
                      {item.title}
                      {item.subItems && (
                        <span className="ml-auto">
                          {nestedDropdowns[index] ? (
                            <IoMdArrowDropup className="text-2xl" />
                          ) : (
                            <IoMdArrowDropdown className="text-2xl" />
                          )}
                        </span>
                      )}
                    </button>
                    {nestedDropdowns[index] && (
                      <ul className="w-full flex flex-col justify-center px-4 py-0 items-center">
                        {item.subItems.map((subItem, index) => (
                          <li
                            key={index}
                            className="w-full hover:bg-[#2b2b2b] rounded-xl flex justify-start items-center gap-6 p-4 hover:bg-gray-100"
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
                    } p-4 rounded-xl flex justify-start items-center gap-6 text-left focus:outline-none`}
                  >
                    {item.icon && <item.icon className="text-2xl" />}
                    {item.title}
                  </button>
                )}
              </li>
            ))}
            <div className="flex flex-wrap justify-center items-center gap-2">
              {dropdownColumnsLeftSidebar.map((column, index) => (
                <li
                  key={index}
                  className="bg-[#151515] hover:bg-[#2b2b2b] font-bold flex flex-col justify-start items-center gap-2 px-3 py-0 relative rounded-xl"
                >
                  <button
                    className={`w-full p-4 rounded-xl flex flex-col justify-start items-start gap-2 text-left focus:outline-none`}
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
