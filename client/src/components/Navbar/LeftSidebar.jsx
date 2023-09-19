import React, { useState, useEffect, useRef } from "react";
import { dropdownItems } from "./constants";

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
            {dropdownItems.map((item, index) => (
              <li
                key={index}
                className="bg-[#151515] font-bold flex flex-col justify-start items-center gap-2 relative  p-4 hover:bg-gray-100 rounded-xl"
              >
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleNestedDropdown(index)}
                      className="w-full flex justify-start items-center gap-2 text-left focus:outline-none"
                    >
                      {item.icon && item.icon}
                      {item.title}
                    </button>
                    {nestedDropdowns[index] && (
                      <ul className="w-full flex flex-col justify-center items-center">
                        {item.subItems.map((subItem, index) => (
                          <li
                            key={index}
                            className="w-full flex justify-start items-center gap-2 p-4 hover:bg-gray-100"
                          >
                            {subItem.icon && subItem.icon}
                            {subItem.title}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <button className="w-full flex justify-start items-center gap-2 text-left focus:outline-none">
                    {item.icon && item.icon}
                    {item.title}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LeftSidebar;
