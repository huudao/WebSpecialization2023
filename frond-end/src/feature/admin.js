import {protectedRequest, publicRequest} from "../API/axios";

export const getAllProduct =async () => {
    const res = await protectedRequest().get("/admin/product");
    console.log(res.data)
    return res.data;
}
export const getAllUser =async () => {
    const res = await protectedRequest().get("/admin/user");
    console.log(res.data)
    return res.data;
}
export const getAllOrder =async () => {
    const res = await protectedRequest().get("/admin/order");
    console.log(res.data)
    return res.data;
}