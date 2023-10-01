import React from "react";
import { Banner } from "./common";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { username } = useParams();
  console.log(username);

  return (
    <>
      <h1>{username} Profile</h1>
      <Banner />
    </>
  );
};

export default UserProfile;
