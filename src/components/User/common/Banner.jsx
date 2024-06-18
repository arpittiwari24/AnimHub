import React, { useState,useEffect } from "react";
import dummyImage from "../../../assets/dummyImage.jpg";

const Banner = ({userInfo}) => {
  console.log(userInfo);
  const [info,setInfo] = useState(userInfo)
  useEffect(() => {
    setInfo(userInfo);
  }, [info, userInfo]);
  return (
    <>
      <div
        className="flex max-sm:justify-center max-sm:items-center max-sm:gap-4 max-sm:flex-col justify-between items-end w-full lg:p-12 py-2 px-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(17,43,8,1) 0%, rgba(19,32,45,1) 44%, rgba(46,8,42,1) 100%)",
        }}        
      >
        <div className="flex justify-center items-end max-sm:items-center gap-4 max-sm:gap-1 max-sm:px-2">
          <div className="w-40 h-40 ">
            <img className="w-full h-full max-sm:w-3/4 max-sm:h-3/4 rounded-full" src={dummyImage} alt="user_image" />
          </div>
          <h1 className="text-2xl max-sm:text-xl max-sm:font-medium font-extrabold">{info?.name}</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center flex-col ">
            <h2 className="text-2xl max-sm:text-xl max-sm:font-medium font-bold text-white">123</h2>
            <h3 className="text-sm max-sm:font-medium font-semibold text-white">Rank</h3>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <h2 className="text-2xl max-sm:text-xl max-sm:font-medium font-bold text-white">{userInfo !== undefined && userInfo?.followers !== undefined ? (
              <p>{userInfo.points}</p>
            ) : (
              <p>0</p>
            )}</h2>
            <h3 className="text-sm max-sm:font-medium font-semibold text-white">Points</h3>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <h2 className="text-2xl max-sm:text-xl max-sm:font-normal font-bold text-white">{userInfo !== undefined && userInfo?.followers !== undefined ? (
              <span>{userInfo.followers.length}</span>
            ): (
             <span>1</span>
            )}</h2>
            <h3 className="text-sm max-sm:font-medium font-semibold text-white">Followers</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
