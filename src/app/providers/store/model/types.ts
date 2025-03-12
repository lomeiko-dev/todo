import { EntityState } from "@reduxjs/toolkit";
import { IAuthData } from "entities/auth";
import { ISectionTodos } from "entities/todo/model/types/types";
import { authApiReducer } from "features/auth";
import { IViewTodo } from "features/view-toggle";

export interface IStore {
  AuthApi: ReturnType<typeof authApiReducer>;
  AuthData: IAuthData;
  Todo: EntityState<ISectionTodos, string>;
  ViewTodo: IViewTodo
}
