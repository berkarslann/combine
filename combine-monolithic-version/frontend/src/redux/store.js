import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { loginUser, getProjects, displayUser } from './root-reducer'; // rootReducer'ın dosya yolunu düzgün şekilde belirtin

const store = configureStore({
  reducer: rootReducer,
});

export { loginUser, getProjects, displayUser }; // Export loginUser action creator for usage in components
export default store;