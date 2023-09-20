import React, { useState, useEffect, useRef } from "react";
import { AiFillEye, AiFillLike } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { abbreviateNumber } from "../../utils/numberAbbreviation";

const ComponentCard = ({
  username = "usernameusername",
  like = 54325,
  view = 123456,
}) => {
  const [abbreviatedLikesCount, setAbbreviatedLikesCount] = useState("");
  const [abbreviatedViewsCount, setAbbreviatedViewsCount] = useState("");

  useEffect(() => {
    // Set the abbreviated count using the utility function
    setAbbreviatedLikesCount(abbreviateNumber(like));
    setAbbreviatedViewsCount(abbreviateNumber(view));
  }, [like, view]);
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
            borderRadius: "0",
            overflow: "hidden",
            background: "black",
          }}
          title="empty-blueprint-forked-2qj2p"
        ></iframe>
        <div className="w-full flex justify-between items-center mt-[2px]">
          <a
            href="/username"
            className={`text-white font-medium overflow-hidden ${
              username.length > 12
                ? "whitespace-nowrap overflow-ellipsis max-w-[100px]"
                : ""
            }`}
          >
            {username}
          </a>
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center text-md items-center gap-2">
              <AiFillEye className="text-lg text-[#c6c6c6]" />
              {abbreviatedLikesCount}
            </div>
            <div className="flex justify-center text-md items-center gap-2">
              <AiFillLike className="text-lg text-[#c6c6c6]" />
              {abbreviatedViewsCount}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center text-xl">tags</div>
          <div
            ref={dropdownRef}
            onClick={toggleDropdown}
            className="relative cursor-pointer"
          >
            <BiDotsVerticalRounded className="text-2xl" />

            {/* Dropdown content */}
            {isDropdownOpen && (
              <div className="absolute top-4 right-3 mt-2 w-64 px-2 py-1 bg-[#151515] rounded-lg shadow-lg z-10">
                <ul>
                  <li className="px-4 py-2 text-lg font-semibold flex justify-start items-center gap-2">
                    <AiFillEye />
                    Like
                  </li>
                  <li className="px-4 py-2 text-lg font-semibold flex justify-start items-center gap-2">
                    <AiFillEye />
                    Show Code
                  </li>
                  <li className="px-4 py-2 text-lg font-semibold flex justify-start items-center gap-2">
                    <AiFillEye />
                    Download Code
                  </li>
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
