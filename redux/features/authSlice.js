import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API, setAuthToken } from "../../lib/api";

const initialState = {
  value: {
    modal: false,
    type: "login",
    loadingAuth: false,
    token: false,
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
    return {
      error: error.response.data,
    };
  }
});

const handleLogin = createAsyncThunk("auth/login", async (form) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ ...form });
    const res = await API.post("/users/login", body, config);
    setAuthToken(res.data.token);
    localStorage.setItem("token", res.data.token);
    return {
      token: res.data.token,
      userData: {
        ...res.data,
      },
    };
  } catch (error) {
    return {
      error: error.response.data,
    };
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
    handleLogout: (state, action) => {
      localStorage.removeItem("token");
      state.value.token = null;
      state.value.userData = {};
    },
  },
  extraReducers: {
    [handleRegister.pending]: (state, action) => {
      state.value.loadingAuth = true;
    },
    [handleRegister.fulfilled]: (state, action) => {
      state.value.loadingAuth = false;
      if (action.payload.error) {
        state.value.error = action.payload.error;
      } else {
        state.value.error = null;
        state.value.token = action.payload.token;
        state.value.userData = action.payload.userData;
      }
    },
    [handleRegister.rejected]: (state, action) => {
      state.value.loadingAuth = false;
    },

    [handleLogin.pending]: (state, action) => {
      state.value.loadingAuth = true;
    },
    [handleLogin.fulfilled]: (state, action) => {
      state.value.loadingAuth = false;
      if (action.payload.error) {
        state.value.error = action.payload.error;
      } else {
        state.value.error = null;
        state.value.token = action.payload.token;
        state.value.userData = action.payload.userData;
      }
    },
    [handleLogin.rejected]: (state, action) => {
      state.value.loadingAuth = false;
    },

    [handleRefresh.pending]: () => {},
    [handleRefresh.fulfilled]: (state, action) => {
      state.value.loadingAuth = false;
      state.value.token = action.payload.token;
      state.value.userData = action.payload.userData;
    },
    [handleRefresh.rejected]: () => {},
  },
});

export const { handleModalAuth, handleLogout } = authSlice.actions;

export default authSlice.reducer;

export { handleRegister, handleLogin, handleRefresh };
