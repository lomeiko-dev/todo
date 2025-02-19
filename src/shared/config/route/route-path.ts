import { enumPath, IRoutePath } from "./types";

export const RoutePath: Record<enumPath, IRoutePath> = {
  [enumPath.home]: {
    path: "/home",
    fullPath: "/home",
  },
  [enumPath.project]: {
    path: "/project",
    fullPath: "/project/:id",
  },
};
