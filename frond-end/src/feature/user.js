import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {protectedRequest, publicRequest} from "../API/axios";

let initialState = {
    user: "",
    token: "",
    loading: false
};

export const loginUser = createAsyncThunk('user/login', async (body) => {
    const res = await publicRequest().post("/api/auth/login", body);
    console.log(res)
    return res.data;
})
export const registerUser = createAsyncThunk('user/register', async (body) => {
    const res = await publicRequest().post("/api/auth/register", body)
    return res;

})
export const forgotPass = createAsyncThunk('user/forgot', async (body) => {
    const res = await publicRequest().post("/api/auth/forgot-password", body)
    return res;

})
export const resetPass = createAsyncThunk('user/reset', async (body) => {
    const res = await publicRequest().post("/api/auth/reset-password", body)
    return res;

})
export const logout = async () => {
    return localStorage.removeItem("token");
};
export const getAddressList = createAsyncThunk('user/address', async (body) => {
    const res = await protectedRequest().get("/user/address", body)
    return res.data;

})
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem("user")
        },
        // removeToken:(state,action)=>{
        //     state.token=localStorage.removeItem("token")
        // }
    },
    extraReducers: (b) => {
        b.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload;

            document.cookie = (`token= ${action.payload}; max-age=9000`);

        })
    }
})
export const {addToken, addUser} = userSlice.actions;
export default userSlice.reducer;