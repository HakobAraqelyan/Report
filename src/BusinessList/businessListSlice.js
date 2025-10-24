import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { useHttp } from './../hooks/http.hook';
import { v4 as uuidv4 } from 'uuid';



const loginAdapter = createEntityAdapter({ selectId: item => uuidv4() });

const initialState = loginAdapter.getInitialState({
  status: "idle", // idle | loading | success | error
});


export const fetchGetBusinessRoles = createAsyncThunk(
  "login/businessRoles",
  (data) => {
    const { request } = useHttp();
    const accessToken = localStorage.getItem('accessToken');
    
    return request(
      "/api/v1/stores",
      "GET",
      JSON.stringify(data),
      {
        'Authorization': `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      }
    );
  }
);


const loginSlice = createSlice({
  name: "businessRoles",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetBusinessRoles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetBusinessRoles.fulfilled, (state, action) => {
        state.status = "success";        
        loginAdapter.setAll(state, action.payload.data.stores);
      })
      .addCase(fetchGetBusinessRoles.rejected, (state) => {
        state.status = "error";
      });
  },
});

const { actions, reducer } = loginSlice;


export default reducer;

export const { selectAll } = loginAdapter.getSelectors(state => state.businessRoles);

export const {
  getBusinessRolesPending,
  getBusinessRolesFulfilled,
  getBusinessRolesRejected,
} = actions;