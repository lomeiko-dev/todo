import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";
import { authApiMiddleware, authApiReducer } from "features/auth";

const rootReducer: ReducersMapObject<IStore> = {
  AuthApi: authApiReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApiMiddleware),
});
