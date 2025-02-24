export type typePriority = "p1" | "p2" | "p3" | "p4";

export interface ITagTodo {
  color: string;
  title: string;
}

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
  deadline: string;
  priority: typePriority;
}
