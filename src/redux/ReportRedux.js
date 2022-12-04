import { createSlice } from "@reduxjs/toolkit";

export const ReportSlice = createSlice({
  name: "report",
  initialState: {
    report: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getReportsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getReportsSuccess: (state, action) => {
      state.isFetching = true;
      state.report = action.payload;
    },
    getReportsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getReportsStart, getReportsSuccess, getReportsFailure } =
  ReportSlice.actions;

export default ReportSlice.reducer;
