import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

const initialState = "";

export const idiomSlice = createSlice({
  name: "idiom",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      appApi.endpoints.createIdiom.matchFulfilled,
      (_, { payload }) => payload
    );
    builder.addMatcher(
      appApi.endpoints.deleteIdiom.matchFulfilled,
      (_, { payload }) => payload
    );
  },
});

export default idiomSlice.reducer;
