import React, { useState, useEffect } from "react";
import { Banner, InfoAndStats, Components } from "./common";
import { getUserData } from "../../apis/user.api";
import { getCookie } from "../../context/AuthContextProviders";
// import { getData } from "../../api";

const UserDashboard = () => {
  const [userData, setUserData] = useState({});

  // async function getData() {
  //   const userCookie = getCookie("user");
  //   const userEmail = JSON.parse(userCookie).email;
  //   // const userEmail = "omgawandeofficial9834899149@gmail.com"
  //   const fetchedUserInfo = await getUserData(userEmail);
  //   setUserData(fetchedUserInfo);
  //   console.log(fetchedUserInfo, userData);
  //   return;
  // }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userCookie = getCookie("user");
        const userEmail = JSON.parse(userCookie).email;
        const response = await getUserData(userEmail);
        
        if (response) {
          setUserData(response);
        } else {
          console.log("No data fetched");
        }
      } catch (error) {
        console.log("Could not fetch user profile.", error);
      }
    };

    fetchData();  // Call the async function directly
  }, []);  // Empty dependency array to run once on mount
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
