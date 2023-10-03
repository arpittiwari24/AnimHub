import React, { useState, useEffect, useContext } from "react";
import { Banner, InfoAndStats, Components } from "./common";
import { getUserData } from "../../apis/user.api";
import { getCookie } from "../../context/AuthContextProviders";
import { UserContext, useUserContext } from "../../context/UserContextProvider";
// import { getData } from "../../api";

const UserDashboard = () => {
  const {userData} = useUserContext();
  console.log(userData);
  return (
    <>
      <div className="flex justify-center items-center flex-col px-12">
          <Banner userInfo={userData} />
           <InfoAndStats userInfo={userData} />
          <Components userInfo={userData} /> 
      </div>
    </>
  );
};

export default UserDashboard;
