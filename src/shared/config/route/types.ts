export interface IRoutePath {
  name?: string;
  path: string;
  isGuard: boolean;
}

export enum enumPath {
  home = "home",
  project = "project",
  auth = "auth",
  todo = "todo",
  todoDetail = "todoDetail",
  notfound = "notfound",
}
