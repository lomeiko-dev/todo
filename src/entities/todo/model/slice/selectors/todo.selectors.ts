import { IStore } from "app/providers/store";
import { todoAdapter } from "../adapters/todo.adapter";

export const todoSelector = todoAdapter.getSelectors<IStore>((state) => state.Todo);
