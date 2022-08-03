import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : {

    }
}
const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        handleModalAuth : (state,action)=>{

        }
    }
})

export const {handleModalAuth} = authSlice.actions

export default authSlice.reducer