import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {publicRequest} from "../API/axios";

let initialState = {
    cart: "",
    token: "",
    loading: false
};
export const addCart =async () => {
    const res = await publicRequest().get("/cart");
    return res.data;
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // addToken: (state, action) => {
        //     state.token = localStorage.getItem("token")
        // },
        // addUser: (state, action) => {
        //     state.user = localStorage.getItem("user")
        // },
    },
    extraReducers: (b) => {
        // b.addCase(loginUser.fulfilled, (state, action) => {
        //     state.token = action.payload;
        //     localStorage.setItem("token", action.payload);
        // })


    }
})
export const {addToken, addUser} = cartSlice.actions;
export default cartSlice.reducer;