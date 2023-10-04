import React, { useState, useEffect } from "react";
import Dashboard from "../components/Admin/Dashboard";
import { getUserData } from ".././apis/user.api";
import { auth } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../context/AuthContextProviders";

const AdminDashboard = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

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
    fetchData();
  }, []);

  return <>{userData?.isAdmin ? <Dashboard /> : <>Not allowed</>}</>;
};

export default AdminDashboard;
