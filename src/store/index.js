import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from './slices/useresSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})
