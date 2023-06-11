import axios from "axios";
import {getCookie} from "./getToken";
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
    // function getCookie(cname) {
    //     var name = cname + '=';
    //     var decodedCookie = decodeURIComponent(document.cookie);
    //     var ca = decodedCookie.split(';');
    //     for(var i = 0; i <ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return '';
    // }
    const token = getCookie("token");
    // console.log(token,"test")
    return axios.create({
        baseURL: baseURL,
        headers: {Authorization: `Bearer ${token}`},
    });
}