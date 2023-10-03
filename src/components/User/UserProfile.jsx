import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Banner, InfoAndStats, Components } from "./common";
import { getProfileData } from "../../apis/user.api";

const UserProfile = () => {
  const { username } = useParams();
  console.log(username);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfileData(username);

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
  }, []); // Empty dependency array to run once on mount
  return (
    <>
      <div className="flex justify-center items-center flex-col px-12">
        <Banner userInfo={profile} />
        <InfoAndStats userInfo={profile} />
        <Components userInfo={profile} />
      </div>
    </>
  );
};

export default UserProfile;
