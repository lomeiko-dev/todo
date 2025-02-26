import { ITagTodo, typePriority } from "shared/ui/Boxes";
import { Dayjs } from "dayjs";

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
  tags?: ITagTodo[];
  dateCreated: string;
  dateUpdated: string;
  deadline: Dayjs;
  priority: typePriority;
}

export interface ITodoState {
  todos: ITodo[];
}
