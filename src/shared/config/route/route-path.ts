import { enumPath, IRoutePath } from "./types";

export const RoutePath: Record<enumPath, IRoutePath> = {
  [enumPath.home]: {
    path: "/home",
    isGuard: true,
  },
  [enumPath.project]: {
    path: "/project/:id",
    name: "/project",
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
};
