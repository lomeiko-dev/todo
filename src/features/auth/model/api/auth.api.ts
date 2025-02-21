import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "shared/config/api";

export const authApi = createApi({
  reducerPath: "AuthApi",
  baseQuery,
  endpoints: (build) => ({
    register: build.mutation<IFormSignUp, Required<IFormSignUp>>({
      query: (body) => ({
        url: fetchQuery.register,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
export const authApiReducer = authApi.reducer;
export const authApiMiddleware = authApi.middleware;
