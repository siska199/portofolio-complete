import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../lib/api";

const initialState = {
  value: {
    modalComment: false,
    projects: [],
    dataComments: {
      _id: "",
      title: "",
      comments: [],
    },
    loadingAddComment: false,
  },
};

const handleGetProjects = createAsyncThunk("project/get-projects", async () => {
  try {
    const res = await API.get("/projects");
    return {
      projects: res.data,
    };
  } catch (error) {
    throw error;
  }
});

const handleGetComments = createAsyncThunk(
  "project/get-comments",
  async (idProject) => {
    try {
      const res = await API.get(`/projects/${idProject}/comments`);
      return {
        dataComments: res.data,
      };
    } catch (error) {
      throw error;
    }
  }
);
const handleAddComment = createAsyncThunk(
  "",
  async (form, { getState, dispatch }) => {
    try {
      const state = getState();
      console.log(state);
      const idProject = state.project.value.dataComments._id;
      console.log("_id project: ", idProject);
      console.log("form: ", form);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(form);
      const res = await API.post(
        `/projects/${idProject}/comments`,
        body,
        config
      );
      dispatch(handleGetComments(idProject));
    } catch (error) {
      throw error;
    }
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    handleModalComments: (state, action) => {
      state.value.modalComment = action.payload;
      if (!action.payload) {
        state.value.dataComments = {
          _id: "",
          title: "",
          comments: [],
        };
      }
    },
  },
  extraReducers: {
    [handleGetProjects.pending]: (state, action) => {},
    [handleGetProjects.fulfilled]: (state, action) => {
      state.value.projects = action.payload.projects;
    },
    [handleGetProjects.rejected]: (state, action) => {
      state.value.loadingAuth = false;
    },
    [handleGetComments.pending]: (state, action) => {},
    [handleGetComments.fulfilled]: (state, action) => {
      state.value.dataComments = action.payload.dataComments;
    },
    [handleGetComments.rejected]: (state, action) => {},

    [handleAddComment.pending]: (state, action) => {
      state.value.loadingAddComment = true;
    },
    [handleAddComment.fulfilled]: (state, action) => {
      state.value.loadingAddComment = false;
    },
    [handleAddComment.rejected]: (state, action) => {
      state.value.loadingAddComment = false;
    },
  },
});

export default projectSlice.reducer;
export const { handleModalComments } = projectSlice.actions;
export { handleGetProjects, handleGetComments, handleAddComment };
