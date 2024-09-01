// root.reducer.js veya store.js
import { combineReducers } from "redux";

import userReducer from "./user/userSlice";
import loginUser from "./user/user.action.js";

import projectReducer from "./project/projectSlice";
import getProjects from "./project/project.action.js";

import profileReducer from "./profile/profileSlice";
import displayUser from "./user/user.action.js";

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  profile: profileReducer,
});

export { loginUser, getProjects, displayUser };
export default rootReducer;
