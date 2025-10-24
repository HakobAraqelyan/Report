import { configureStore } from "@reduxjs/toolkit";
import login from "../Auth/Login/loginSlice";
import getUserInfo from "../ProtectedRoute/protectedRouteSlice";
import businessRoles from "../BusinessList/businessListSlice";
// import { authApiSlice } from "../Auth/API/authApiSlice";


const store =  configureStore({
  reducer: {
    login,
    getUserInfo,
    businessRoles
    // [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware:
  getDefaultMiddleware => getDefaultMiddleware(),
    // .concat(authApiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",

})

export default store;