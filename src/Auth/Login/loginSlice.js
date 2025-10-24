import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";
import { v4 as uuidv4 } from 'uuid';


const loginAdapter = createEntityAdapter({ selectId: item => uuidv4() });

const initialState = loginAdapter.getInitialState({
  status: "idle", // idle | loading | success | error
});

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  (data) => {
    const { request } = useHttp();
    
    return request(
      "/auth/login",
      "POST",
      JSON.stringify(data),
      {
        "Content-Type": "application/json",
      }
    );
  }
);


const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        
        state.status = "success";
        loginAdapter.setOne(state, action.payload);
        
        console.log(action);
        console.log(state.entities.data);
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.status = "error";
      });
  },
});

const { actions, reducer } = loginSlice;


export default reducer;

export const { selectAll } = loginAdapter.getSelectors(state => state.login);

export const {
  loginPending,
  loginFulfilled,
  loginRejected,
} = actions;