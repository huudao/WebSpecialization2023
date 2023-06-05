import axios from "axios";
const baseURL='http://localhost:8080/';

// export const httpRequest=  axios.create({
//     baseURL:'http://localhost:8080/'
// })
//tra ra method
export const publicRequest = () => {
    return axios.create({
        baseURL: baseURL,
    });
}

export const protectedRequest = () => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    return axios.create({
        baseURL: baseURL,
        headers: {Authorization: `Bearer ${token}`},
    });
}