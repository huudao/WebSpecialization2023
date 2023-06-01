import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

let initialState = {
    user: "",
    token: "",
    loading: false
};
export const loginUser = createAsyncThunk('user', async (body) => {
    let res = await fetch("http://localhost:8080/login", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(body)
    })

    return await res.json();
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
        extraReducers: {
            [loginUser.pending]: (state, action) => {
                state.loading = true
            },
            [loginUser.fulfilled]: (state, {payload: {user, token}}) => {
                state.loading = false
                state.token = token;
                state.user = user
                localStorage.setItem("token", JSON.stringify(token))
                localStorage.setItem("user", JSON.stringify(token))
            },
            [loginUser.rejected]: (state, action) => {
                state.loading = true
            }
        }

    }
})
export  const{addToken,addUser} =userSlice.actions;
export default userSlice.reducer;