import { axiosDefaults } from "../api";

export async function topUsersWithComponents() {
  const response = await axiosDefaults.get("api/v1/stats/topUsersWithComponents");
  return response.data.topUsers;
}

export async function topUsersWithFollowers() {
  const response = await axiosDefaults.get("api/v1/stats/topUsersWithFollowers");
  return response.data.topUsers;
}

export async function topUsersWithLikes() {
  const response = await axiosDefaults.get("api/v1/stats/topUsersWithLikes");
  return response.data.topUsers;
}
