import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import rootReducer from './root-reducer'; // rootReducer'ın dosya yolunu düzgün şekilde belirttiğinizden emin olun

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
