import { ITodo } from "entities/todo";

export type typeFormInput = Pick<ITodo, "title" | "description" | "deadline" | "tags" | "priority">