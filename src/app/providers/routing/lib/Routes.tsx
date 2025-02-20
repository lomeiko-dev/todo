import { AuthPageLazy } from "pages/auth";
import { HomePageLazy } from "pages/home";
import { NotFoundPageLazy } from "pages/not-found";
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
    },
    {
        path: RoutePath.auth.fullPath,
        element: <AuthPageLazy/>
    },
    {
        path: RoutePath.notfound.fullPath,
        element: <NotFoundPageLazy/>
    },
    {
        path: '*',
        element: <NotFoundPageLazy/>
    }
]