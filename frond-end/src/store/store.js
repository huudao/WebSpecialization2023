import {configureStore} from "@reduxjs/toolkit";
import userSlice from "../feature/user"

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: {
        user: userSlice


    }
})
