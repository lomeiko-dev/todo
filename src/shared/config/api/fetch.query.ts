enum enumFetch {
  register = "register",
  login = "login",
}

export const fetchQuery: Record<enumFetch, string> = {
  [enumFetch.login]: "login",
  [enumFetch.register]: "register",
};
