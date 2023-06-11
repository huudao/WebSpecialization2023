import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {protectedRequest} from "../API/axios";
import {useContext} from "react";
import {ProductProvider} from "../context/productContext";

export const addCart = async (variantId, amount) => {
    const res = await protectedRequest().post("/cart", {productVariantId: variantId, amount});
    return res;
}

export const getCart = async () => {
    const res = await protectedRequest().get("/cart");
    // console.log(res.data);
    return res.data

}
export const deleteCart = async (id) => {
    const res = await protectedRequest().delete(`/cart/remove/${id}`,);
    // console.log(res.data,"delete")
    return res.data;
}
export const increment = async (cartItemId,amount) => {
    const res = await protectedRequest().post("/cart/increment",{cartItemId,amount:1});
    console.log(res.data,"incre")
    return res.data;
}
export const decrement = async (cartItemId,amount) => {
    const res = await protectedRequest().post("/cart/decrement",{cartItemId,amount:1});
    console.log(res.data,"decre")
    return res.data;
}


export const order = async (addressId) => {
    const res = await protectedRequest().post("/order",{addressId});
    console.log(res.data,"decre")
    return res.data;
}
