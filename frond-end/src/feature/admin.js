import {protectedRequest} from "../API/axios";

export const getAllProduct =async () => {
    const res = await protectedRequest().get("/admin/product");
    // console.log(res.data)
    return res.data;
}


// user
export const getAllUser =async () => {
    const res = await protectedRequest().get("/admin/user");
    // console.log(res.data)
    return res.data;
}
export const deleteUser =async (idUser) => {
    const res = await protectedRequest().delete(`/admin/user/${idUser}`);
    console.log(res.data)
    return res.data;
}
export const modifyActivi =async (idUser) => {
    const res = await protectedRequest().put(`/admin/user/set-active/${idUser}`);
    console.log(res.data)
    return res.data;
}




// order
export const getAllOrder =async () => {
    const res = await protectedRequest().get("/admin/order");
    console.log(res.data,"sdfsdf")
    return res.data;
}
export const getOrderByName =async (name) => {
    const res = await protectedRequest().get(`/admin/order/user/${name}`);
    console.log(res.data,"sdfsdf")
    return res.data;
}