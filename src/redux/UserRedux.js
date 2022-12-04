import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: false,
    error: false,
    isadmin: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSucees: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.isadmin = action.payload;
      // if (state.currentUser === true) {
      //   state.isadmin === true;
      // }
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.isadmin = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSucees, loginFailure } = UserSlice.actions;
export default UserSlice.reducer;
