import { createSlice } from "@reduxjs/toolkit";
import { displayUser, matchProject } from "./profile.action";

const initialState = {
  name: "",
  surname: "",
  projects: [],
  level: "",
  title: "",
  matchedProject: "",
  message: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(displayUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.name = action.payload.name;
        state.surname = action.payload.surname;
        state.projects = action.payload.projects;
        state.level = action.payload.level;
        state.title = action.payload.title;
      })
      .addCase(displayUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(displayUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = undefined;
      })
      .addCase(matchProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.matchedProject = action.payload.matchedProject;
      })
      .addCase(matchProject.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(matchProject.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
      });
  },
});

export default profileSlice.reducer;
