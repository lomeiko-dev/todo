import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "shared/config/api";
import { typeLoginBody, typeRegisterBody } from "./types";
import { IAuthData } from "entities/auth";

export const authApi = createApi({
  reducerPath: "AuthApi",
  baseQuery,
  endpoints: (build) => ({
    register: build.mutation<IAuthData, typeRegisterBody>({
      query: (body) => ({
        url: fetchQuery.register.url,
        method: fetchQuery.register.method,
        body,
      }),
    }),
    login: build.mutation<IAuthData, typeLoginBody>({
      query: (body) => ({
        url: fetchQuery.login.url,
        method: fetchQuery.login.method,
        body,
      }),
    }),
    getAuthData: build.query<IAuthData, void>({
      query: () => ({
        url: fetchQuery.authData.url,
        method: fetchQuery.authData.method,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetAuthDataQuery, useLazyGetAuthDataQuery } = authApi;
export const authApiReducer = authApi.reducer;
export const authApiMiddleware = authApi.middleware;
