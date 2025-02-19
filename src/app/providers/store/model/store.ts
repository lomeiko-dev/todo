import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";

const rootReducer: ReducersMapObject<IStore> = {
  // reducers...
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});
