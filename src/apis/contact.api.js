import { axiosDefaults } from "../api";
// import { validateEmail } from "../utils/validateEmail";
export async function createContactForm(data) {
  const email = data.email;
  // const isValidEmail = validateEmail(email);
  try {
    // if (isValidEmail) {
    const response = await axiosDefaults.post(
      "api/v1/contact/createContactForm",
      data
    );
    console.log("response1", response);
    return response;
    // } else {
    //   return { error: { message: "Invalid Email" } };
    // }
  } catch (error) {
    console.log(error);
  }
}
