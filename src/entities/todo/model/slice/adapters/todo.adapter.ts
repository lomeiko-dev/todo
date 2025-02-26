import { createEntityAdapter } from "@reduxjs/toolkit";
import { ITodo } from "../../types";

export const todoAdapter = createEntityAdapter({
  selectId: (todo: ITodo) => todo.id,
});
