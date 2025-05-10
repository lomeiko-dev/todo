import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthData } from "../types/auth-data.type";

const initialState: IAuthData = {};

const authDataSlice = createSlice({
  name: "AuthData",
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<IAuthData>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.tokens = action.payload.tokens;
    },
    logout(state) {
      state.id = undefined;
      state.email = undefined;
      state.tokens = undefined;
    },
  },
});

export const { setAuthData, logout } = authDataSlice.actions;
export const authDataSliceReducer = authDataSlice.reducer;
