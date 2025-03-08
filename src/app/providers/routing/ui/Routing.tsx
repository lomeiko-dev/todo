import { Suspense } from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Routes } from "../lib/Routes";
import { useSelector } from "react-redux";
import { authDataIdSelector } from "entities/auth";
import { AuthPageLazy } from "pages/auth";
import { Backdrop } from "shared/ui/backdrop";

export const Routing = () => {
  const id = useSelector(authDataIdSelector);

  return (
    <Suspense fallback={<Backdrop />}>
      <ReactRoutes>
        {Routes.map((item) => (
          <Route key={item.path} path={item.path} element={id === undefined ? <AuthPageLazy /> : item.element} />
        ))}
      </ReactRoutes>
    </Suspense>
  );
};
