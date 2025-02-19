import { lazy } from "react";

export const ProjectPageLazy = lazy(async () => await import("./ui/Project.page"));
