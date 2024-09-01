// user.actions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  login,
  currentUserCheck,
  currentUserInfo,
  register,
} from "../../service/auth-service";
import { setAccessToken } from "./userSlice"; // Import etmeyi unutmayın

export const loginUser = createAsyncThunk("user/loginUser", async (form) => {
  try {
    const response = await login(form);
    if (response.status === 200) {
      const accessToken = response.data.accessToken;
      const user = response.data.user;

      return { success: true, accessToken, user };
    } else {
      console.error("Login failed:", response.data.message);
      return { success: false, error: response.data.message };
    }
  } catch (error) {
    throw error;
  }
});

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (form) => {
    try {
      const response = await register(form);
      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        const user = response.data.newUser;

        return { success: true, accessToken, user };
      } else {
        console.error("Register failed:", response.data.message);
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      // Handle any exceptions or errors
      throw error;
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentuser",
  async (form, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken") ?? "";

      const response = await currentUserCheck(token);
      return response;
    } catch (err) {
      return rejectWithValue({ success: false, error: err });
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("accessToken");
});

export default loginUser;
