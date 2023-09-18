import React, { useState, useEffect, useRef } from "react";

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
          className="absolute w-56 bg-blue-500 border border-gray-300 rounded-md shadow-lg overflow-y-auto"
          style={parentDropdownStyle}
        >
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100">Item 1</li>
            <li className="px-4 py-2 hover:bg-gray-100">Item 2</li>
            <li className="relative px-4 py-2 hover:bg-gray-100">
              <button
                onClick={() => toggleNestedDropdown(0)}
                className="w-full text-left focus:outline-none"
              >
                Nested Dropdown 0
              </button>
              {nestedDropdowns[0] && (
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100">Subitem 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Subitem 2</li>
                </ul>
              )}
            </li>
            <li className="relative px-4 py-2 hover:bg-gray-100">
              <button
                onClick={() => toggleNestedDropdown(1)}
                className="w-full text-left focus:outline-none"
              >
                Nested Dropdown 1
              </button>
              {nestedDropdowns[1] && (
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100">Subitem 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Subitem 2</li>
                </ul>
              )}
            </li>
            <li className="relative px-4 py-2 hover:bg-gray-100">
              <button
                onClick={() => toggleNestedDropdown(2)}
                className="w-full text-left focus:outline-none"
              >
                Nested Dropdown 2
              </button>
              {nestedDropdowns[2] && (
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100">Subitem 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Subitem 2</li>
                </ul>
              )}
            </li>
            <li className="relative px-4 py-2 hover:bg-gray-100">
              <button
                onClick={() => toggleNestedDropdown(3)}
                className="w-full text-left focus:outline-none"
              >
                Nested Dropdown 3
              </button>
              {nestedDropdowns[3] && (
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100">Subitem 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Subitem 2</li>
                </ul>
              )}
            </li>
            {/* Add more nested dropdowns here */}
            {/* ... */}
            <li className="px-4 py-2 hover-bg-gray-100">Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LeftSidebar;
