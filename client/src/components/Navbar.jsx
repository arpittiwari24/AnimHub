import React from "react";
import { DarkLogo } from "../assets/logos/Logo";
import { BiSearch } from "react-icons/bi";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiWarningCircleFill } from "react-icons/pi";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
];
const subNavLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Home",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="w-full flex flex-col ">
        <div className="flex justify-center items-center">
          <ul className=" w-full flex justify-center items-center gap-4 py-1 bg-black">
            {subNavLinks.map((link) => (
              <li className=" text-[#969696]">{link.name}</li>
            ))}
          </ul>
        </div>

        <div className="px-12 py-1 flex justify-between items-center bg-[#0e0e0e]">
          <div className=" w-[70%] flex justify-center items-center ">
            <div className="flex justify-center items-center gap-4">
              <button className=" flex flex-col gap-[0.3rem]">
                <div className="bg-primary w-6 rounded h-[0.15rem]"></div>
                <div className="bg-primary w-6 rounded h-[0.15rem]"></div>
                <div className="bg-primary w-6 rounded h-[0.15rem]"></div>
              </button>
              <div className="">
                <DarkLogo width="180px" />
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-2">
              <div className=" w-[70%] flex justify-center items-center bg-[#252525] px-4 py-[0.4rem] rounded-full">
                <BiSearch className="text-[#fff] text-2xl" />
                <input
                  className="appearance-none all-none w-full bg-[#252525] text-[#fff] text-sm h-8 px-2 py-1  "
                  type="text"
                  placeholder="Search Animated Components"
                />
              </div>
              <button className="">
                <BsPlusCircleFill className="text-[#c6c6c6] text-3xl" />
              </button>
              <button className="">
                <BsPlusCircleFill className="text-[#c6c6c6] text-3xl" />
              </button>
            </div>
          </div>
          <div className="">
            <button className="">
              <FaCircleUser className="text-[#c6c6c6] text-4xl" />
            </button>
          </div>
        </div>

        <div className="px-12 py-1 flex justify-between items-center  bg-[#0e0e0e]">
          <ul className="grid grid-cols-8 justify-items-center w-full h-full items-center mx-auto">
            {navLinks.map((link) => (
              <li className="group grid w-full h-auto text-[#fff] font-bold ">
                <a>
                  <span className="flex flex-col justify-center items-center">
                    <span className="inline-block text-center align-top">
                      {link.name}
                    </span>
                    <span className="w-full h-[1.5px] mx-auto bg-yellow-600 group-hover:block group-hover:opacity-100 opacity-0 relative top-0"></span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-1 py-1 justify-center items-center bg-secondary">
          <PiWarningCircleFill className="text-[#c6c6c6] text-2xl" />
          <p className="">
            If you have anything for us or want to join us visit here
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
