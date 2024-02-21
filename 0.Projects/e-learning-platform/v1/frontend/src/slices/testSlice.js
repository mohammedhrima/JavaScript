import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

const initialState = null;

export const testSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      appApi.endpoints.newtest.matchFulfilled,
      (_, { payload }) => payload
    );
  },
});

export const { logout } = testSlice.actions;
export default testSlice.reducer;
