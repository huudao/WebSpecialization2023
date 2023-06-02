import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {publicRequest} from "../API/axios";

let initialState = {
    user: "",
    token: "",
    loading: false
};
export const loginUser = createAsyncThunk('user', async (body) => {
    const res = await publicRequest().post("/api/auth/login", body);
    return res.data;

    // let res = await fetch("http://localhost:8080/api/auth/login", {
    //     method: "post",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }, body: JSON.stringify(body)
    // })
    // return await res.json();
})
export const registerUser = createAsyncThunk('user', async (body) => {
    const res = await publicRequest().post("/api/auth/register", body);
    console.log(res);
    return res;
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
    },
    extraReducers: (b) => {
        b.addCase(loginUser.fulfilled, (state, action) => {
            state.token=action.payload;
            localStorage.setItem("token",action.payload);
        })
        // [loginUser.pending]: (state, action) => {
        //     console.log(state, "33")
        //     state.loading = true
        // },
        // [loginUser.fulfilled]: (state, action) => {
        //     state.loading = false
        //     console.log(action)
        // }
        // ,
        // [loginUser.rejected]: (state, action) => {
        //     state.loading = true
        // }


    }
})
export const {addToken, addUser} = userSlice.actions;
export default userSlice.reducer;