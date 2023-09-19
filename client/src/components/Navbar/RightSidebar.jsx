import React, { useState, useEffect, useRef } from "react";
import { FaCircleUser } from "react-icons/fa6";
import {
  dropdownItemsRightSidebar,
  dropdownColumnsRightSidebar,
} from "./constants";

const RightSidebar = ({ isRightSidebarOpen, setIsRightSidebarOpen }) => {
  //   const [isOpen, setIsOpen] = useState(isRightSidebarOpen);
  const auth = true;
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsRightSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isRightSidebarOpen) {
      document.addEventListener("mousedown", closeDropdown);
    } else {
      document.removeEventListener("mousedown", closeDropdown);
    }

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isRightSidebarOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="">
        <FaCircleUser className="text-[#c6c6c6] text-4xl" />
      </button>

      {isRightSidebarOpen && (
        <>
          <div
            className={`bg-[#151515] origin-top-right absolute right-0 mt-2 ${
              auth ? "w-[17.5rem]" : "w-24"
            } rounded-md shadow-lg border-[#151515] border-2 `}
          >
            {auth ? (
              <>
                <div className="px-4 py-2 flex flex-col items-left justify-start ">
                  <h1 className="text-white text-xl font-bold">Username</h1>
                  <h3 className="text-white text-sm font-bold">
                    See your profile
                  </h3>
                  {/* <hr className="border-[#c6c6c6] border-1" /> */}

                  <ul className="py-2 px-0 flex flex-col items-right justify-center ">
                    {dropdownItemsRightSidebar.map((item, index) => (
                      <li
                        key={index}
                        className={`bg-[#151515] pb-2 font-bold flex flex-col justify-start items-center gap-2 relative rounded-xl `}
                      >
                        <button
                          className={`w-full ${
                            item.special
                              ? "hover:bg-[#5a93ee]"
                              : "hover:bg-[#2b2b2b]"
                          } p-4 rounded-xl flex justify-start items-center gap-6 text-left focus:outline-none`}
                        >
                          {item.icon && <item.icon className="text-2xl" />}
                          {item.title}
                        </button>
                      </li>
                    ))}
                    <div className="flex flex-wrap justify-between items-center mt-2 gap-1">
                      {dropdownColumnsRightSidebar.map((column, index) => (
                        <li
                          key={index}
                          className="bg-[#151515] hover:bg-[#2b2b2b] font-bold flex flex-col justify-start items-center gap-1 px-3 py-0 relative rounded-xl"
                        >
                          <button
                            className={`w-full p-4 rounded-xl flex flex-col justify-start items-start gap-1 text-left focus:outline-none`}
                          >
                            {column.icon && (
                              <column.icon className="text-2xl" />
                            )}
                            {column.title}
                          </button>
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              </>
            ) : (
              <div className="py-2 flex flex-col items-right justify-center ">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                >
                  Signup
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RightSidebar;
