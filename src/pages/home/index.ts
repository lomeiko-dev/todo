import { lazy } from "react";

export const HomePageLazy = lazy(async () => await import("./ui/Home.page"));
