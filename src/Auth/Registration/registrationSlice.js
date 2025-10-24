import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        setFirstName: (state, action) => {
        state.firstName = action.payload;
        },
        setLastName: (state, action) => {
        state.lastName = action.payload;
        },
        setEmail: (state, action) => {
        state.email = action.payload;
        },
        setPassword: (state, action) => {
        state.password = action.payload;
        },
        setConfirmPassword: (state, action) => {
        state.confirmPassword = action.payload;
        },
    },
});

const { actions, reducer } = registrationSlice;


export default reducer;

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setConfirmPassword,
} = actions;

