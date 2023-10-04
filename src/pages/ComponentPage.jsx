import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { getComponentById } from "../apis/components.api";
import { getUserData } from ".././apis/user.api";
import { getCookie } from "../context/AuthContextProviders";
import { Button } from "../components/common";
import CodeEditor from "../components/ShowCode/CodeEditor";
import dummyImage from "../assets/dummyImage.jpg";
import { DarkLogo } from "../assets/logos/Logo";
import { Link } from "react-router-dom";
import { auth } from "../firebase/auth";
import { useNavigate } from "react-router-dom";

const ComponentPage = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [component, setComponent] = useState(null);
  const getComponentData = async () => {
    const fetchedComponent = await getComponentById(id);
    setComponent(fetchedComponent);
  };
  const { photoURL } = auth?.currentUser || false;

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
      // if (userData.isAdmin) {
      //   setIsAdmin(true);
      // } else {
      //   navigate("/dashboard");
      // }
    };
    fetchData();
    getComponentData();
  }, [id]);
  console.log(userData);
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full  h-[100vh]">
        <div className="relative w-full py-2 px-12">
          <div className="flex items-center justify-between">
            <Link to="/">
              <DarkLogo width="120px" />
            </Link>
            <div className="flex items-center justify-between gap-2">
              {/* <Button label="New" onClick={() => handleOpenPopup()} /> */}
              {/* <button
                className="bg-[#292929] p-[10px] my-[10px]"
                onClick={handleOpenPopup}
              >
                Create New
              </button> */}
              {/* <Button label="Create" onClick={handleSave} /> */}

              {/* <Button label="Update" onClick={handleUpdate} /> */}
              {userData?.isAdmin && !component.verified && (
                <Button label="Verify" onClick={() => {}} />
              )}
            </div>
            <Link className="w-12 h-12" to="/dashboard">
              <img
                src={photoURL || dummyImage}
                className="w-full h-full rounded-full"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div
          className="w-full h-full flex justify-between items-center px-12"
          style={{ height: "calc(100vh - 64px)" }}
        >
          <CodeEditor data={component} />
        </div>
      </div>
    </>
  );
};

export default ComponentPage;
