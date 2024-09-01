import { createAsyncThunk } from "@reduxjs/toolkit";
import { currentUserInfo } from "../../service/auth-service";
import { matchRandomProject } from "../../service/project-service";
export const displayUser = createAsyncThunk(
  "profile/displayUser",
  async (form, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken") ?? "";
      const response = await currentUserInfo(token);
      console.log("displayuser", response);
      return response;
    } catch (err) {
      return rejectWithValue({ success: false, error: err });
    }
  }
);
export const matchProject = createAsyncThunk(
  "profile/matchProject",
  async (wantedRole, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken") ?? "";

      const response = await matchRandomProject(wantedRole, token);
      console.log("match response", response);
      return response;
    } catch (err) {
      return rejectWithValue({ success: false, error: err });
    }
  }
);

export default displayUser;
