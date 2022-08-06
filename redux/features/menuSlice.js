import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value : {
        modal : false
    }
}
const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers : {
        handleModalMenu : (state,action)=>{
            console.log("change State")
            state.value.modal = action.payload
        },
        
    }
})

export const { handleModalMenu } = menuSlice.actions
export default menuSlice.reducer