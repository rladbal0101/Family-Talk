import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  logInUserInfo: {},
  isLogin: false,
}

const logInSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    findLoginUser: (state, {payload}) => {
      state.logInUserInfo = payload;
      state.isLogin = true;
    }
  }
})

export const { findLoginUser } = logInSlice.actions;

export const LogInUser = (state) => state.login.logInUserInfo; 
export const isUserLogin = (state) => state.login.isLogin; 


export default logInSlice.reducer;