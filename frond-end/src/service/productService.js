import {publicRequest} from "../API/axios";

export function getForMen() {
    return publicRequest().get("/products/for-men").then(res=>res.data)

}
export function getForWomen() {
    return publicRequest().get("/products/for-women").then(res=>res.data)

}