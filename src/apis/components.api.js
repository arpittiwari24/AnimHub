import { axiosDefaults } from "../api";
export async function createComponent(data) {
  const { code, langCategory, email, tags } = data;
  console.log(langCategory);
  console.log("codecomponwnt apoi", code);
  let language = langCategory.language.split("+");
  console.log("dkjhbfadjh", language);
  const response = await axiosDefaults.post(
    "api/v1/component/createComponent",
    {
      email,
      code,
      // html: code.html,
      // css: code.css,
      // js: code.js,
      // react: code.tailwind,
      category: langCategory.category,
      language: language,
      tags,
      // tags: [],
    }
  );
  return response;
}
export async function getComponentById(id) {
  console.log(id);
  const response = await axiosDefaults.post(
    "api/v1/component/getComponentById",
    { componentId: id }
  );
  console.log(response);
  return response;
}
export async function getAllComponents(data) {
  const response = await axiosDefaults.get(
    "api/v1/component/getAllComponents",
    data
  );
  return response.data.componentArray;
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
