import { axiosDefaults } from "../api";
export async function getUserByEmail(data) {
  const response = await axiosDefaults.post("api/v1/user/getUserByEmail", {
    email: "onkarwaghmode58@gmail.com",
  });
  return response.data.user._id;
}
