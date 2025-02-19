import { HomePageLazy } from "pages/home";
import { ProjectPageLazy } from "pages/project";
import { RouteProps } from "react-router";
import { RoutePath } from "shared/config/route";

export const Routes: RouteProps[] = [
    {
        path: RoutePath.home.fullPath,
        element: <HomePageLazy/>
    },
    {
        path: RoutePath.project.fullPath,
        element: <ProjectPageLazy/>
    }
]