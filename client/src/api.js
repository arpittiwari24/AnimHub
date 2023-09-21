import axios from "axios";

export const axiosDefaults = axios.create({
    baseURL: "http://localhost:8000/"
})


export async function sendData(url, data) {
    axiosDefaults
        .post(url, data)
        .then((res) => {
            console.log("Success", res);
            return res
        })
        .catch((err) => {
            console.log("Error", err);
            return err
        });
}




axiosDefaults.interceptors.request.use(
    (request) => {
        console.log("request interceptor", request);
        return request
    },
    (error) => {
        console.log("request interceptor error", error);
    }
)

axiosDefaults.interceptors.response.use(
    (response) => {
        console.log(response);
        return response
    },
    (error) => {
        console.log(error);
    }
)