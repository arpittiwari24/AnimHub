import { axiosDefaults } from "../api";
export async function createCategory(data) {
  const response = await axiosDefaults.post(
    "api/v1/category/createCategory",
    data
  );
  return response;
}
export async function updateCategory(data) {
  const response = await axiosDefaults.post(
    "api/v1/category/updateCategory",
    data
  );
  return response;
}
export async function getAllCategories(data) {
  const response = await axiosDefaults.post(
    "api/v1/category/getAllCategories",
    data
  );
  return response;
}
