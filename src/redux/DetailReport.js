import { createSlice } from "@reduxjs/toolkit";

export const ReportSlice = createSlice({
  name: "detailReport",
  initialState: {
    report: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getReportsDetailStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getReportsDetailSuccess: (state, action) => {
      state.isFetching = true;
      state.report = action.payload;
    },
    getReportsDetailFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getReportsDetailStart,
  getReportsDetailSuccess,
  getReportsDetailFailure,
} = ReportSlice.actions;

export default ReportSlice.reducer;
