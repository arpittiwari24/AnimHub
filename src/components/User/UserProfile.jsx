import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Banner, InfoAndStats, Components } from "./common";
import { getProfileData } from "../../apis/user.api";

const UserProfile = ({profile}) => {
  // Empty dependency array to run once on mount
  return (
    <>
      <div className="flex justify-center items-center flex-col px-12">
        <Banner userInfo={profile} />
        <InfoAndStats userInfo={profile} />
        {/* <Components userInfo={profile} /> */}
      </div>
    </>
  );
};

export default UserProfile;
