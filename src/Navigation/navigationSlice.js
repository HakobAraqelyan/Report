// import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
// import { useHttp } from './../hooks/http.hook';

// const userInfoAdapter = createEntityAdapter()

// const initialState = userInfoAdapter.getInitialState({
//     user: {},
//     userLoadingStatus: "idle", // idle | loading | success | error
// });


// export const fetchUserInfo = createAsyncThunk(
//     "navigation/fetchUserInfo",
//     (accessToken) => {
//         const {request} = useHttp();

//         return request(
//             '/api/v1/user',
//             "GET",
//             null,
//             {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${accessToken}`
//             }
//         );
//     }
// );

// const navigationSlice = createSlice({
//     name: "navigation",
//     initialState,
//     reducers: {
//         setUser: (state, action) => {
//             state.user = action.payload;
//         },
//         setStatus: (state, action) => {
//             state.status = action.payload;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchUserInfo.pending, (state) => {
//                 state.userLoadingStatus = "loading";
//             })
//             .addCase(fetchUserInfo.fulfilled, (state, action) => {
//                 state.userLoadingStatus = "success";
//                 userInfoAdapter.setOne(state, action.payload);
//             })
//             .addCase(fetchUserInfo.rejected, (state) => {
//                 state.userLoadingStatus = "error";
//             });
//     },
// });

// const { actions, reducer } = navigationSlice;

// export default reducer;

// export const { selectAll } = userInfoAdapter.getSelectors(state => state.navigation);

// export const {
//     setUser,
//     setStatus,
// } = actions;