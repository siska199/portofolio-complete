import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : {
        main        : "gray",
        secondary   : "white"
    }
}

const themeSlice = createSlice({
    name : "theme",
    initialState,
})

export default themeSlice.reducer