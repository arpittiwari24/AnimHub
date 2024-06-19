import axios from "axios";

export const axiosDefaults = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_PROD_API_URL
    // baseURL : import.meta.env.VITE_REACT_APP_API_URL
})


export async function sendData(url, data) {
    // const data1 = await axiosDefaults.post(url, data)
    const response1 = await axiosDefaults.post(url, data)
    // console.log("response1", response1);
    return response1
}


export async function getData(url) {
    const response = await axiosDefaults.get(url)
    console.log("response", response);
    return response
}



axiosDefaults.interceptors.request.use(
    (request) => {
        // console.log("request interceptor", request);
        return request
    },
    (error) => {
        // console.log("request interceptor error", error);
        return error;
    }
)

axiosDefaults.interceptors.response.use(
    // (response) => {
    //     console.log("response interceptor", response);
    //     return response
    // },
    // (error) => {
    //     console.log("response interceptor error", error);
    //     return error
    // }
)