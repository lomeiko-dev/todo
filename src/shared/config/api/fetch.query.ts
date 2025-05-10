import { IRequest } from "./types";

enum enumFetch {
  register = "register",
  login = "login",
  authData = "authData",
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
  [enumFetch.authData]: {
    url: "getAuthData",
    method: "GET",
  },
};
