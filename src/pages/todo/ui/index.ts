import { lazy } from "react";

export const TodoPageLazy = lazy(async () => await import("./Todo.page"));
