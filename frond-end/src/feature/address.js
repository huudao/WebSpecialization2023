import {protectedRequest} from "../API/axios";

export const getAddress = async () => {
    const res = await protectedRequest().get("/user/address");
    console.log(res.data)
    return res.data

}
export const addAddress = async (username,phone,city,district,ward,specificAddress) => {
    const res = await protectedRequest().post("/user/address",{username,phone,city,district:district,ward,specificAddress});
    console.log(res.data)
    return res.data

}