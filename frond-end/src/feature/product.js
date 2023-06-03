import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {publicRequest} from "../API/axios";

let initialState = {
    product: "",
    token: "",
    loading: false
};
export const getFormen = createAsyncThunk('product/for-men', async (body) => {
    const res = await publicRequest().post("/products/for-men", body);
    return res.data;
})


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem("user")
        },
    },
    extraReducers: (b) => {
        b.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload;
            localStorage.setItem("token", action.payload);
        })


    }
})
export const {addToken, addUser} = userSlice.actions;
export default userSlice.reducer;