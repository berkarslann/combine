
import { createSlice } from "@reduxjs/toolkit";
import { getProjects, getSingleProject } from "./project.action"; 

const initialState = {
  accessToken: null,
  error: null,
  projects: [],
  project:{
    _id: '',
    title:'',
    description:'',
    duration:'',
    postedTime:'',
    roles:'',
    openRoles:'',
    languages: ''
  }

};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.fulfilled, (state, action) => {
        // Thunk işlevi başarıyla tamamlandığında çalışacak kısım
        state.projects = action.payload; // veya gelen veriyi kullanarak durumu güncelleyin
        state.error = null;
        state.loggedIn = true;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.error = action.error.message;
        state.projects = null;
        state.loggedIn = false;
        console.log(action.error.message);
      })
      .addCase(getSingleProject.fulfilled, (state, action) => {
        // Thunk işlevi başarıyla tamamlandığında çalışacak kısım
        state.project = {
          // Farklı bir initial state kullanmak istiyorsanız burada tanımlayabilirsiniz
          // Örneğin:
          _id: action.payload._id,
          title: action.payload.title,
          description: action.payload.description,
          duration: action.payload.duration,
          postedTime: action.payload.postedTime,
          roles: action.payload.roles,
          openRoles: action.payload.openRoles,
          languages: action.payload.languages
        };
        state.error = null;
        state.loggedIn = true;
      })
      
      .addCase(getSingleProject.rejected, (state, action) => {
        state.error = action.error.message;
        state.project = null;
        state.loggedIn = false;
      })
  },
});

export default projectSlice.reducer;