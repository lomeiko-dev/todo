export interface IRoutePath {
  name?: string;
  path: string;
  fullPath: string;
}

export enum enumPath {
  home = "home",
  project = "project",
  auth = "auth",
  notfound = "notfound",
}
