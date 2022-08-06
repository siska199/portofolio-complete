import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : {
        modal : false,
        type  : "login"
    }
}
const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        handleModalAuth : (state,action)=>{
            console.log("action: ", action.payload)
            state.value.modal = !state.value.modal
            state.value.type = action.payload
        }
    }
})

export const {handleModalAuth} = authSlice.actions

export default authSlice.reducer