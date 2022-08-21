import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../lib/api";

const initialState = {
  value: {
    skills: {
      frontend: [],
      backend: [],
    },
  },
};

const handleGetSkills = createAsyncThunk("skill/get-skills", async () => {
  try {
    const res = await API.get("/skills");
    return {
      skills: res.data,
    };
  } catch (error) {
    throw error;
  }
});

const skillSlice = createSlice({
  name: "skill",
  initialState,
  extraReducers: {
    [handleGetSkills.pending]: (state, action) => {},
    [handleGetSkills.fulfilled]: (state, action) => {
      state.value.skills = action.payload.skills;
    },
    [handleGetSkills.rejected]: (state, action) => {},
  },
});

export default skillSlice.reducer;
export { handleGetSkills };
