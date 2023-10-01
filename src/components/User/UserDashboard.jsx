import React from "react";
import { Banner, InfoAndStats, Components } from "./common";

const UserDashboard = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col px-12">
        <Banner />
        <InfoAndStats />
        <Components />
      </div>
    </>
  );
};

export default UserDashboard;
