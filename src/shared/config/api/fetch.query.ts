import { IRequest } from "./types";

enum enumFetch {
  register = "register",
  login = "login",
}

export const fetchQuery: Record<enumFetch, IRequest> = {
  [enumFetch.login]: {
    url: "login",
    method: "POST",
  },
  [enumFetch.register]: {
    url: "register",
    method: "POST",
  },
};
