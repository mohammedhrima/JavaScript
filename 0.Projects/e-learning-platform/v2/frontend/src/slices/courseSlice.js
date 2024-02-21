import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

const initialState = null;

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      appApi.endpoints.createCourse.matchFulfilled,
      (_, { payload }) => payload
    );
    builder.addMatcher(
      appApi.endpoints.updateCourse.matchFulfilled,
      (_, { payload }) => payload
    );
  },
});

export default courseSlice.reducer;
