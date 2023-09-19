import React from "react";
import { DarkLogo } from "../../assets/logos/Logo.jsx";

const Confirm = () => {
  return (
    <div className="absolute top-0 h-[100vh] w-[100vw] bg-secondary flex flex-col justify-center items-center">
      <div className=" w-[50%] h-[70%] flex flex-col justify-center items-center gap-6 px-[3vw] shadow-sm  shadow-[white] rounded-md  bg-secondary   ">
        <div className="logo">
          <DarkLogo width="150px" />
        </div>
        <div className="logo">
          <h2 className="text-4xl font-semibold">Age Verification</h2>
        </div>
        <div className="logo">
          <h3 className="text-center ">
            <br />
            This website contains normal person-restricted materials including
            awesome and explicit depictions of developement activity. By
            entering, you affirm that you are at least 0 years of experience in
            the Developement you are accessing the website from and you consent
            to viewing developement explicit content.
          </h3>
        </div>
        <div className="flex justify-center items-center gap-6 w-[100%] ">
          <button className="w-[40%] h-12 bg-primary  rounded-md text-2xl font-semibold text-[black]">
            I want this
          </button>
          <button className="w-[40%] h-12 hover:bg-primary hover:text-[black] bg-[#1F1F1F] rounded-md text-2xl font-semibold">
            I definetly want this
          </button>
        </div>
        <div className="last">
          <h3 className="text-center ">
            Our Developer controls page explains how you can easily F**k your
            mind and how to stay away from distraction
          </h3>
        </div>
        <div className="logo">
          <h4>©️Animhub.com, 2023</h4>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
