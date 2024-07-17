import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProjects,fetchSingleProject } from "../../service/project-service";

export const getProjects = createAsyncThunk(
    "project/getProjects",
    async (form, { rejectWithValue }) => {
      try {
      
        const response = await fetchProjects();
        console.log('project action', response)
        return response.data;
      } catch (err) {
        return rejectWithValue({ success: false, error: err });
      }
    }
  );

  export const getSingleProject = createAsyncThunk(
    "project/getSingleProject",
    async(projectId, {rejectWithValue}) => {
      try{
        const response = await fetchSingleProject(projectId);
   
        return response.data;
      }catch(err){
        return rejectWithValue({ success: false, error: err });
      }
    }
  )

  export default getProjects;