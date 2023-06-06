import {protectedRequest} from "../API/axios";

export const getAddress = async () => {
    const res = await protectedRequest().get("/user/address");
    console.log(res.data)
    return res.data

}