import React, { useState, useEffect, useRef } from "react";
import { AiFillEye, AiFillLike } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";

const ComponentCard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Add a click event listener to close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-start">
        <iframe
          // src="https://codesandbox.io/embed/empty-blueprint-forked-2qj2p?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "300px",
            height: "270px",
            border: "0",
            borderRadius: "4px",
            overflow: "hidden",
            background: "black",
          }}
          title="empty-blueprint-forked-2qj2p"
        ></iframe>
        <div className="w-full flex justify-between items-center ">
          <h3 className="">username</h3>
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <AiFillEye className="text-xl text-[#c6c6c6]" />
              123
            </div>
            <div className="flex justify-center items-center gap-2">
              <AiFillLike className="text-xl text-[#c6c6c6]" />
              123
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center">tags</div>
          <div
            ref={dropdownRef}
            onClick={toggleDropdown}
            className="relative cursor-pointer"
          >
            <BiDotsVerticalRounded />

            {/* Dropdown content */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black border rounded-lg shadow-lg z-10">
                <ul>
                  <li className="px-4 py-2">Like</li>
                  <li className="px-4 py-2">Show Code</li>
                  <li className="px-4 py-2">Download Code</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentCard;
