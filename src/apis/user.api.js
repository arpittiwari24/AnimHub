import { axiosDefaults } from "../api";
export async function getUserByEmail(data) {
  const response = await axiosDefaults.post("api/v1/user/getUserByEmail", {
    email: "onkarwaghmode58@gmail.com",
  });
  return response.data.user._id;
}


export async function getUserData(email) {
  // console.log("userId", email);
  const response = await axiosDefaults.post("api/v1/user/getProfileData", {email})
  // console.log("resUser", response.data.profileData);
  return response.data.profileData;
}

export async function getProfileData(username){
  console.log("username",username);
  const response = await axiosDefaults.post("api/v1/user/getProfileDataByUsername",{username});
  console.log("fetched",response.data.profileData);
  return response.data.profileData;
}
export async function followUser(email, toBeFollowedEmail){
  console.log("Other Person Email", email, toBeFollowedEmail);
  const response = await axiosDefaults.post("api/v1/user/followUser",{email, toBeFollowedEmail});
  console.log("fetched",response.data);
  return response.data;
}

export async function unFollowUser(email, toBeUnFollowedEmail){
  console.log("Other Person Email", email, toBeUnFollowedEmail);
  const response = await axiosDefaults.post("api/v1/user/unFollowUser",{email, toBeUnFollowedEmail});
  console.log("fetched",response.data);
  return response.data;
}