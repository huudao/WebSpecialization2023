import { createSlice} from "@reduxjs/toolkit"
import {publicRequest} from "../API/axios";


export const for_men =async () => {
    const res = await publicRequest().get("/products/for-men");
    // console.log(res.data,"aaaa")
    return res.data;
}
export const for_women =async () => {
    const res = await publicRequest().get("/products/for-women");
    // console.log(res.data,"aaaa")
    return res.data;
}
export const detailProduct =async (productId,variantId) => {
    const res = await publicRequest().get(`/products/${productId}/${variantId}`);
    return res.data;
}
export const search =async (key) => {
    const res = await publicRequest().get(`/products/search?keyword=${key}`);
    return res.data;
}

export const brands =async (key) => {
    const res = await publicRequest().get("/products/brands");
    return res.data;
}
export const getProductByBrandId =async (id) => {
    const res = await publicRequest().get(`/products/brands/${id}`);
    return res.data;
}
export const latests =async (key) => {
    const res = await publicRequest().get("/products/latest");
    return res.data;
}

