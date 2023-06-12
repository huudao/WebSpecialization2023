import {protectedRequest} from "../API/axios";

export const getAllProduct =async () => {
    const res = await protectedRequest().get("/admin/product");
    // console.log(res.data)
    return res.data;
}
export const getAllProductById =async (id) => {
    const res = await protectedRequest().get(`/admin/product/${id}`);
    console.log(res.data)
    return res.data;
}
export const addProduct =async (name,brand,genderType,description,shippingPolicy,productVariantList) => {
    const res = await protectedRequest().post("/admin/product",{brandId:brand,name:name,genderType:genderType,description:description,shippingPolicy:shippingPolicy,productVariantList:productVariantList});
    console.log(res.data,"data")
    return res.data;
}
export const deleteProductByVariant =async (idProduct,idVariant) => {
    const res = await protectedRequest().delete(`/admin/product/${idProduct}/${idVariant}`);
    console.log(res,"delete")
    return res.data;
}
export const deleteProduct =async (id) => {
    const res = await protectedRequest().delete(`/admin/product/${id}`);
    console.log(res,"delete")
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
    // console.log(res.data,"sdfsdf")
    return res.data;
}
export const getOrderByName =async (name) => {
    const res = await protectedRequest().get(`/admin/order/user/${name}`);
    console.log(res.data,"sdfsdfsdfsdfsdfsdfsd")
    return res.data;
}
export const getDetailOrder =async (id) => {
    const res = await protectedRequest().get(`admin/order/${id}`);
    console.log(res.data,"sdfsdfsdfsdfsdfsdfsd")
    return res.data;
}


// brand
export  const getAllBrand= async ()=>{
    const res = await  protectedRequest().get("/admin/brand")
    console.log(res.data)
    return res.data
}
export const deleteBrand =async (idBrand) => {
    const res = await protectedRequest().delete(`/admin/brand/${idBrand}`);
    console.log(res.data)
    return res.data;
}