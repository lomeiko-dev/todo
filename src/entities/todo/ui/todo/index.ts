import { lazy } from "react";

export const TodoDetailLazy = lazy(async () => await import("./Todo.detail"));
export { TodoItem } from "./Todo.item";
