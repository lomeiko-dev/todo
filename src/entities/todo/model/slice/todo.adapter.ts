import { createEntityAdapter } from "@reduxjs/toolkit";
import { ISectionTodos } from "../types/types";

export const todoAdapter = createEntityAdapter({
  selectId: (section: ISectionTodos) => section.id,
});
