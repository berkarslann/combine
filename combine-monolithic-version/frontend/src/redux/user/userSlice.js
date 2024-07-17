
import { createSlice } from "@reduxjs/toolkit";
import { loginUser, getCurrentUser, displayUser, registerUser } from "./user.action"; // Thunk dosyanızın yolu

const initialState = {
  accessToken: null,
  error: null,
  loggedIn: false,
  currentUser: undefined,
  user: undefined
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        // Thunk işlevi başarıyla tamamlandığında çalışacak kısım
        state.accessToken = action.payload.accessToken;
            state.error = null;
        state.loggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.accessToken = null;
        state.loggedIn = false;
        console.log(action.error.message);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // Thunk işlevi başarıyla tamamlandığında çalışacak kısım
        state.accessToken = action.payload.accessToken;
            state.error = null;
        state.loggedIn = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.accessToken = null;
        state.loggedIn = false;
        console.log(action.error.message);
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state,action) => {
        state.isLoading = false;
        state.currentUser = undefined;
      })
  
  },
});

export default userSlice.reducer;