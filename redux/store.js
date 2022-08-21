import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./features/menuSlice"
import authReducer from "./features/authSlice"
import themeReducer from "./features/themeSlice"
import projectReducer from "./features/projectSlice"
import skillReducer from "./features/skillSlice"

const store = configureStore({
    reducer : {
        menu    : menuReducer,
        auth    : authReducer,
        theme   : themeReducer,
        project : projectReducer,
        skill : skillReducer
    }
})

export default store