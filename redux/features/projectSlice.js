import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value : {
        modalComment : false
    }
}

const projectSlice = createSlice({
    name : "project",
    initialState,
    reducers :{
        handleModalComments : (state,action)=>{
            state.value.modalComment = action.payload
        }
    }
})

export default projectSlice.reducer
export const {handleModalComments} = projectSlice.actions 