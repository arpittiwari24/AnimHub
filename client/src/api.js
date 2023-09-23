import axios from "axios";

export const axiosDefaults = axios.create({
    baseURL: "http://localhost:8000/"
})


export async function sendData(url, data) {
    // const data1 = await axiosDefaults.post(url, data)
    const response1 = await axiosDefaults.post(url, data)
    // .then((response) => {
    //     console.log("response", response);
    //     return response
    // })
    // .catch((error) => {
    //     console.log("error", error);
    //     return error
    // })
    // if (response1){
        // console.log("response1", response1);
        // return response1
    // }
    // console.log("Abcd");
    console.log("response1", response1);
    return response1
}




axiosDefaults.interceptors.request.use(
    (request) => {
        console.log("request interceptor", request);
        return request
    },
    (error) => {
        console.log("request interceptor error", error);
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