import React from "react";
import ComponentChart from "./ComponentChart";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const InfoAndStats = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between py-2 ">
          <ul className="flex justify-center items-center gap-2">
            <li className="flex justify-center items-center">Home</li>
            <li className="flex justify-center items-center">Stats</li>
            <li className="flex justify-center items-center">Anything Else</li>
          </ul>
          <ul className="flex justify-center items-center gap-2">
            <li className="flex justify-center items-center">idk</li>
            <li className="flex justify-center items-center">Share</li>
            <li className="flex justify-center items-center">Follow</li>
          </ul>
        </div>
        <div className="w-full flex items-start justify-between px-6">
          <div className="w-full flex flex-col items-start justify-center">
            <h2 className="">About Om Gawande</h2>
            <p className="">
              My bio My bio My bio My bio My bio My bio My bio My bio
            </p>
          </div>

          <div className="flex justify-center items-start">
            <ul className="flex flex-col justify-center items-start">
              <li className="flex justify-center items-center">
                <FaTwitterSquare />
                <a href="">@abcded</a>
              </li>
              <li className="flex justify-center items-center">
                <FaInstagramSquare />
                <a href="">@abcde</a>
              </li>
              <li className="flex justify-center items-center">
                <FaLinkedin />
                <a href="">@abcde</a>
              </li>
              <li className="flex justify-center items-center">
                <FaGithubSquare />
                <a href="">@abcde</a>
              </li>
            </ul>
            <div>
              <ComponentChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoAndStats;
