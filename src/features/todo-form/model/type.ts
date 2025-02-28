import { ITodo } from "entities/todo";

export type typeFormTodoInput = Pick<ITodo, "title" | "description" | "deadline" | "tags" | "priority">;
export type typeFormSectionInput = { name: string };
