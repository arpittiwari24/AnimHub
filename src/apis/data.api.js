import { axiosDefaults } from "../api";
export async function viewersData(data) {
  const response = await axiosDefaults.post("api/v1/data/viewersData", data);
  return response;
}
