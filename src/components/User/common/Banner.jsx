import React from "react";
import dummyImage from "../../../assets/dummyImage.jpg";

const Banner = ({userInfo}) => {
  console.log(userInfo);
  return (
    <>
      <div
        className="flex justify-between items-end w-full p-12"
        style={{
          background:
            "linear-gradient(90deg, rgba(195,247,82,1) 0%, rgba(146,190,219,1) 44%, rgba(217,35,199,1) 100%)",
        }}
      >
        <div className="flex justify-center items-end gap-4">
          <div className="w-40 h-40">
            <img className="w-full h-full" src={dummyImage} alt="user_image" />
          </div>
          <h1 className="text-2xl font-extrabold">{userInfo.name}</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center flex-col ">
            <h2 className="text-2xl font-bold text-white">123</h2>
            <h3 className="text-sm font-semibold text-white">User Rank</h3>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <h2 className="text-2xl font-bold text-white">230</h2>
            <h3 className="text-sm font-semibold text-white">Exp. Points</h3>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <h2 className="text-2xl font-bold text-white">100</h2>
            <h3 className="text-sm font-semibold text-white">Followers</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
