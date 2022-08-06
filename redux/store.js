import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./features/menuSlice"
import authReducer from "./features/authSlice"
import themeReducer from "./features/themeSlice"

const store = configureStore({
    reducer : {
        menu : menuReducer,
        auth : authReducer,
        theme : themeReducer
    }
})

export default store