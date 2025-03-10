import { ITag, typePriority } from "shared/ui/boxes";

export interface ICommentTodo {
  userAvatar: string;
  username: string;
  message: string;
}

export interface ITodo {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  comments?: ICommentTodo;
  subTasks?: ITodo[];
  tags?: ITag[];
  dateCreated: string;
  dateUpdated: string;
  deadline: string;
  priority: typePriority;
}

export interface ISectionTodos {
  id: string;
  title: string;
  todos: ITodo[];
}
