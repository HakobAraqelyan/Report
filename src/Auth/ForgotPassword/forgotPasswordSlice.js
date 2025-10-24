import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

const { actions, reducer } = forgotPasswordSlice;

export default reducer;

export const {
  setEmail,
} = actions;