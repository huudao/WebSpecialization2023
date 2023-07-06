import axios from "axios";
import {getCookie} from "./getToken";
const baseURL='http://localhost:8080/';

export const publicRequest = () => {
    return axios.create({
        baseURL: baseURL,

    });
}
export const protectedRequest = () => {
    const token = getCookie("token");
    return axios.create({
        baseURL: baseURL,
        headers: {Authorization: `Bearer ${token}`},
    });
}