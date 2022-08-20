import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API, setAuthToken } from "../../lib/api";

const initialState = {
  value: {
    modal: false,
    type: "login",
    loadingAuth: false,
    token: "",
    userData: {},
  },
};

const handleRegister = createAsyncThunk("auth/register", async (form) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ ...form });
    const res = await API.post("/users/register", body, config);
    setAuthToken(res.data.token);
    localStorage.setItem("token", res.data.token);
    return {
      token: res.data.token,
      userData: {
        ...res.data,
      },
    };
  } catch (error) {
    throw error;
  }
});

const handleRefresh = createAsyncThunk("auth/refresh-token", async () => {
  try {
    setAuthToken(localStorage.getItem("token"));
    const res = await API.get("/users/refresh-token");
    setAuthToken(res.data.token);
    localStorage.setItem("token", res.data.token);
    return {
      token: res.data.token,
      userData: {
        ...res.data,
      },
    };
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleModalAuth: (state, action) => {
      state.value.modal = !state.value.modal;
      state.value.type = action.payload;
    },
  },
  extraReducers: {
    [handleRegister.pending]: (state, action) => {
      state.value.loadingAuth = true;
    },
    [handleRegister.fulfilled]: (state, action) => {
      state.value.loadingAuth = false;
      state.value.token = action.payload.token;
      state.value.userData = action.payload.userData;
    },
    [handleRegister.rejected]: (state, action) => {
      state.value.loadingAuth = false;
    },

    [handleRefresh.pending]: () => {},
    [handleRefresh.fulfilled]: () => {},
    [handleRefresh.rejected]: () => {},
  },
});

export const { handleModalAuth } = authSlice.actions;

export default authSlice.reducer;

export { handleRegister, handleRefresh };
