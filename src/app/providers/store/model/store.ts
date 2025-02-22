import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";
import { authApiMiddleware, authApiReducer } from "features/auth";
import { authDataSliceReducer } from "entities/auth";

const rootReducer: ReducersMapObject<IStore> = {
  AuthApi: authApiReducer,
  AuthData: authDataSliceReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
