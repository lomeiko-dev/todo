import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthData } from "../types/auth-data.type";

const initialState: IAuthData = {
  isAuth: false,
};

const authDataSlice = createSlice({
  name: "AuthData",
  initialState,
  reducers: {
    login(state, action: PayloadAction<Omit<IAuthData, "isAuth">>) {
      state.isAuth = true;
      state.id = action.payload.id;
      state.login = action.payload.login;
      state.tokens = action.payload.tokens;
    },
    logout(state) {
      state.isAuth = false;
      state.id = undefined;
      state.login = undefined;
      state.tokens = undefined;
    },
  },
});

export const {login, logout} = authDataSlice.actions
export const authDataSliceReducer = authDataSlice.reducer