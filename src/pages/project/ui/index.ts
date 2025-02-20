import { lazy } from "react";

export const ProjectPageLazy = lazy(async () => await import("./Project.page"));
