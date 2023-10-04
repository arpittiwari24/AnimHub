import React, {useEffect, useState} from "react";
import UserProfile from "../components/User/UserProfile";
import { useParams } from "react-router-dom";
import { getProfileData } from "../apis/user.api";


const Profile = () => {
  const { username } = useParams();
  console.log(username);
  const [profile, setProfile] = useState({});
  
  useEffect(() => {
    // console.log(username);
    console.log("afes12", username);
    const fetchData = async () => {
      try {
        const response = await getProfileData(username);
        // console.log("afes", response);
        if (response) {
          setProfile(response);
        } else {
          console.log("No data fetched");
        }
      } catch (error) {
        console.log("Could not fetch user profile.", error);
      }
    };

    fetchData(); // Call the async function directly
  }, []); 
  return (
    <>
      <UserProfile profile={profile} />
    </>
  );
};

export default Profile;
