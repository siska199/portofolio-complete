import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value : {
        activeMenuId : "#introduction"
    }
}
const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers : {
        handleChangeMenu : (state,action)=>{

        }
    }
})

export const {handleChangeMenu} = menuSlice.actions
export default menuSlice.reducer