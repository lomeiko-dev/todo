import { AuthPageLazy } from "pages/auth";
import { HomePageLazy } from "pages/home";
import { NotFoundPageLazy } from "pages/not-found";
import { ProjectPageLazy } from "pages/project";
import { TodoPageLazy } from "pages/todo";
import { RouteProps } from "react-router";
import { RoutePath, IRoutePath } from "shared/config/route";

export const Routes: (RouteProps & IRoutePath)[] = [
    {
        path: RoutePath.home.path,
        element: <HomePageLazy/>,
        isGuard: RoutePath.home.isGuard
    },
    {
        path: RoutePath.project.path,
        element: <ProjectPageLazy/>,
        isGuard: RoutePath.project.isGuard
    },
    {
        path: RoutePath.auth.path,
        element: <AuthPageLazy/>,
        isGuard: RoutePath.auth.isGuard
    },
    {
        path: RoutePath.notfound.path,
        element: <NotFoundPageLazy/>,
        isGuard: RoutePath.notfound.isGuard
    },
    {
        path: RoutePath.todo.path,
        element: <TodoPageLazy/>,
        isGuard: RoutePath.todo.isGuard
    },
    {
        path: '*',
        element: <NotFoundPageLazy/>,
        isGuard: false
    }
]