import { axiosDefaults } from "../api";
export async function verifyComponent(componentId, email, score) {
  const response = await axiosDefaults.post("api/v1/admin/verifyComponent", {
    componentId,
    email,
    score,
  });
  return response;
}
