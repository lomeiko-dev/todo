import { lazy } from "react";

export const AuthPageLazy = lazy(async () => await import('./Auth.page'))