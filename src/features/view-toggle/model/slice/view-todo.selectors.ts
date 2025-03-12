import { IStore } from "app/providers/store";

export const typeViewTodoSelector = (store: IStore) => store.ViewTodo.type;
