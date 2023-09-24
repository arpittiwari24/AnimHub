import React from "react";
import { Button } from "../components/common";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const ComingSoon = () => {
  return (
    <div className="relative h-[70vh]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[70vh] w-5/6 flex flex-col justify-around items-center 
    bg-[#151515] rounded-lg">
        <h1 className="font-[800] text-[40px]">Coming <span className="px-[10px] py-[5px] text-black bg-primary rounded-sm">Soon</span></h1>
        <h3 className="text-center font-[500] text-[18px] text-[#a1a1a1]">{"Blogs"} page is under construction we will notify you <br /> on our socials once it is active </h3>
        <Button label={"Back To Homepage"} padx={"35px"} pady={"15px"} fontSize={"20px"}/>
        <h3 className="-mb-[30px]">Stay connected with us for quick updates</h3>
        <div className="flex gap-x-[20px] scale-[2]">
          <AiFillInstagram />
          <FaSquareXTwitter />
          <BsLinkedin />
          <AiFillYoutube className="scale-[1.5]" />
        </div>
      </div>
    </div>
  )
};

export default ComingSoon;
