import { useState, useEffect } from "react";
import { BsFillChatHeartFill } from "react-icons/bs";
import { RiUserFollowFill } from "react-icons/ri";
import { MdAutoGraph } from "react-icons/md";
import {
  topUsersWithComponents,
  topUsersWithFollowers,
  topUsersWithLikes,
} from "../../../apis/statistics.api";

const TopUser = () => {
  const [mostComponents, setMostComponents] = useState([]);
  const [mostFollowers, setMostFollowers] = useState([]);
  const [mostLikes, setMostLikes] = useState([]);

  useEffect(() => {
    const topThings = async () => {
      const response1 = await topUsersWithComponents();
      setMostComponents(response1);
      const response2 = await topUsersWithFollowers();
      setMostFollowers(response2);
      const response3 = await topUsersWithLikes();
      setMostLikes(response3);
      console.log(response3);
    };
    return () => {
      topThings();
    };
  }, []);

  return (
    <>
      <div className="w-full h-full flex justify-between items-center py-6 px-10">
        <div className="w-[33.33%] h-full flex flex-col justify-start items-center">
          <div className="flex flex-col justify-start items-start">
            <h1 className="flex justify-center items-center gap-2 text-2xl font-bold">
              Most Components Added
              <MdAutoGraph />
            </h1>
            <ul className="flex flex-col justify-start items-start gap-4 mt-4">
              {mostComponents.map((user) => (
                <li key={user._id} className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                  <div className="w-full flex gap-4 items-center">
                    <div className="rounded-full w-10 h-10 border-2 border-primary">
                      <img src={user.profilePicUrl} alt="user" className="rounded-full" />
                    </div>
                    <p>
                      <a href={`/profile/${user.username}`} className="text-white decoration-0">
                        {user.username}
                      </a>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[33.33%] h-full flex flex-col justify-start items-center">
          <div className="flex flex-col justify-start items-start">
            <h1 className="flex justify-center items-center gap-2 text-2xl font-bold">
              Highest Followers
              <RiUserFollowFill />
            </h1>
            <ul className="flex flex-col justify-start items-start gap-4 mt-4">
              {mostFollowers.map((user) => (
                <li key={user._id} className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                  <div className="w-full flex gap-4 items-center">
                    <div className="rounded-full w-10 h-10 border-2 border-primary">
                      <img src={user.profilePicUrl} alt="user" className="rounded-full" />
                    </div>
                    <p>
                      <a href={`/profile/${user.username}`} className="text-white decoration-0">
                        {user.username}
                      </a>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[33.33%] h-full flex flex-col justify-start items-center">
          <div className="flex flex-col justify-start items-start">
            <h1 className="flex justify-center items-center gap-2 text-2xl font-bold">
              Most Liked Users
              <BsFillChatHeartFill />
            </h1>
            <ul className="flex flex-col justify-start items-start gap-4 mt-4">
              {mostLikes.map((user) => (
                <li key={user._id} className="bg-[#151515] min-w-full w-64 hover:bg-[#2b2b2b] font-bold  px-5 py-3 relative rounded-lg">
                  <div className="w-full flex gap-4 items-center">
                    <div className="rounded-full w-10 h-10 border-2 border-primary">
                      <img src={user.profilePicUrl} alt="user" className="rounded-full" />
                    </div>
                    <p>
                      <a href={`/profile/${user.username}`} className="text-white decoration-0">
                        {user.username}
                      </a>
                    </p>
                    <p>{user.likeCounter}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopUser;
