import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import courseSlice from "./slices/courseSlice";
import appApi from "./services/appApi";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
//import idiomSlice from "./slices/idiomSlice";

const reducer = combineReducers({
  user: userSlice,
  course: courseSlice,
  //idiom: idiomSlice,
  [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blackList: [appApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, appApi.middleware],
});

export default store;
