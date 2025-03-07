import { enumPath, IRoutePath } from "./types";

export const RoutePath: Record<enumPath, IRoutePath> = {
  [enumPath.home]: {
    path: "/home",
    isGuard: true,
    pageName: 'Todo'
  },
  [enumPath.project]: {
    path: "/project/:id",
    name: "/project/",
    isGuard: true,
  },
  [enumPath.auth]: {
    path: "/auth",
    isGuard: false,
  },
  [enumPath.notfound]: {
    path: "/not-found",
    isGuard: false,
  },
  [enumPath.todo]: {
    path: "/todo",
    isGuard: true,
  },
  [enumPath.todoDetail]: {
    path: "/todo/detail/:id",
    name: "/todo/detal/",
    isGuard: true,
  },
};
