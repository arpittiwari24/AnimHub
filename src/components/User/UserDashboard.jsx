import React, { useState, useEffect } from "react";
import { Banner, InfoAndStats, Components } from "./common";
import { getUserData } from "../../apis/user.api";
import { getCookie } from "../../context/AuthContextProviders";
// import { getData } from "../../api";

const UserDashboard = () => {
  const [userData, setUserData] = useState({});

  async function getData() {
    // const userCookie = getCookie("user")
    // const userEmail = JSON.parse(userCookie).email;
    const userEmail = "omgawandeofficial9834899149@gmail.com"
    const fetchedUserInfo = await getUserData(userEmail)
    setUserData(fetchedUserInfo);
    console.log(fetchedUserInfo,userData);
    return
  }
  useEffect(() => {
    console.log("useEffect");
    getData();
  }, [])
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
