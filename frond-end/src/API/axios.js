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
    const token = localStorage.getItem("token");
    // console.log(token,"test")
    return axios.create({
        baseURL: baseURL,
        headers: {Authorization: `Bearer ${token}`},
    });
}