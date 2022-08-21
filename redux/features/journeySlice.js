import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../lib/api";

const initialState = {
  value: {
    journeys: [],
  },
};

const handleGetJourneys = createAsyncThunk("journey/get-journeys", async () => {
  try {
    const res = await API.get("/journeys");
    return {
      journeys: res.data,
    };
  } catch (error) {
    throw error;
  }
});

const journeySlice = createSlice({
  name: "journey",
  initialState,
  extraReducers: {
    [handleGetJourneys.pending]: (state, action) => {},
    [handleGetJourneys.fulfilled]: (state, action) => {
      state.value.journeys = action.payload.journeys;
    },
    [handleGetJourneys.rejected]: (state, action) => {},
  },
});

export default journeySlice.reducer;
export { handleGetJourneys };
