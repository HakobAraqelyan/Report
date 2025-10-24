import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { useHttp } from '../hooks/http.hook';
import { v4 as uuidv4 } from 'uuid';



const loginAdapter = createEntityAdapter({ selectId: item => uuidv4() });

const initialState = loginAdapter.getInitialState({
  status: "idle", // idle | loading | success | error
});


export const fetchGetUserInfo = createAsyncThunk(
  "/api/products",
  (data) => {
    const { request } = useHttp();
    const accessToken = localStorage.getItem('accessToken');
    
    return request(
      "/api/products",
      "GET",
      JSON.stringify(data),
      {
        'Authorization': `Bearer ${accessToken}`,
        "X-Employee-ID": "3",
        "Content-Type": "application/json",
      }
    );
  }
);


const loginSlice = createSlice({
  name: "getUserInfo",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.email = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetUserInfo.fulfilled, (state, action) => {
        state.status = "success";
        loginAdapter.setOne(state, action.payload.data);
      })
      .addCase(fetchGetUserInfo.rejected, (state, action) => {
        console.log('state', state);
        console.log(action);
        state.status = "error";
      });
  },
});

const { actions, reducer } = loginSlice;


export default reducer;

export const { selectAll } = loginAdapter.getSelectors(state => state.getUserInfo);

export const {
  getUserInfoPending,
  getUserInfoFulfilled,
  getUserInfoRejected,
} = actions;