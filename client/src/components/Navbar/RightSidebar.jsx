import React, { useState, useEffect, useRef } from "react";
import { FaCircleUser } from "react-icons/fa6";

const RightSidebar = ({ isRightSidebarOpen, setIsRightSidebarOpen }) => {
  //   const [isOpen, setIsOpen] = useState(isRightSidebarOpen);
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
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {/* Dropdown content goes here */}
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              Item 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              Item 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
            >
              Item 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
