import { EntityState } from "@reduxjs/toolkit";
import { IAuthData } from "entities/auth";
import { ITodo } from "entities/todo";
import { authApiReducer } from "features/auth";

export interface IStore {
  AuthApi: ReturnType<typeof authApiReducer>;
  AuthData: IAuthData;
  Todo: EntityState<ITodo, string>;
}
