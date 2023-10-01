import { axiosDefaults } from "../api";
export async function createComponent(data) {
  const response = await axiosDefaults.post(
    "api/v1/component/createComponent",
    data
  );
  return response;
}
export async function getAllComponents(data) {
  const response = await axiosDefaults.post(
    "api/v1/component/getAllComponents",
    data
  );
  return response;
}
export async function updateComponent(data) {
  const response = await axiosDefaults.post(
    "api/v1/component/updateComponent",
    data
  );
  return response;
}
export async function deleteComponent(data) {
  const response = await axiosDefaults.post(
    "api/v1/component/deleteComponent",
    data
  );
  return response;
}
export async function likeComponent(data) {
  const response = await axiosDefaults.post(
    "api/v1/component/likeComponent",
    data
  );
  return response;
}
export async function trendingComponents(data) {
  const response = await axiosDefaults.post(
    "api/v1/component/trendingComponents",
    data
  );
  return response;
}
export async function getCategoryComponents(data) {
  const response = await axiosDefaults.post(
    "api/v1/component/getCategoryComponents",
    data
  );
  return response;
}
export async function getTagsComponents(data) {
  const response = await axiosDefaults.post(
    "api/v1/component/getTagsComponents",
    data
  );
  return response;
}
export async function getLanguageComponents(data) {
  const response = await axiosDefaults.post(
    "api/v1/component/getLanguageComponents",
    data
  );
  return response;
}
