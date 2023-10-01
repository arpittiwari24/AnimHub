import { axiosDefaults } from "../api";
export async function createComponent(data) {
  const { code, langCategory } = data;
  function getCookie(cookieName) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${cookieName}=`)) {
        return cookie.substring(cookieName.length + 1);
      }
    }
    return null; // Return null if the cookie is not found
  }
  const userid = getCookie("userId");
  const response = await axiosDefaults.post(
    "api/v1/component/createComponent",
    {
      userid,
      html: code.html,
      css: code.css,
      js: code.js,
      react: code.tailwind,
      categoryId: langCategory.category,
      // tags: [],
    }
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
