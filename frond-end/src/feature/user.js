import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {publicRequest} from "../API/axios";

let initialState = {
    user: "",
    token: "",
    loading: false
};
export const loginUser = createAsyncThunk('user/login', async (body) => {
    const res = await publicRequest().post("/api/auth/login", body);
    return res.data;
})
export const registerUser = createAsyncThunk('user/register', async (body) => {
    // try {
        const res = await publicRequest().post("/api/auth/register", body);
        console.log(res.statusText, "sdfsdfsd");
        return res.data;
    // }catch (error){
    //     return error.res.data.message();
    //
    // }
})
export  const logout = () => {
    localStorage.removeItem("token");
};

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
    },
    extraReducers: (b) => {
        b.addCase(loginUser.fulfilled, (state, action) => {
            state.token=action.payload;
            localStorage.setItem("token",action.payload);
        })



    }
})
export const {addToken, addUser} = userSlice.actions;
export default userSlice.reducer;