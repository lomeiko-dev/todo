import { Suspense } from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Routes } from "../lib/Routes";
import { useSelector } from "react-redux";
import { authDataIdSelector } from "entities/auth";
import { AuthPageLazy } from "pages/auth";

export const Routing = () => {
  const id = useSelector(authDataIdSelector);

  const authNode = <AuthPageLazy />;

  return (
    <Suspense fallback={<div>loading</div>}>
      <ReactRoutes>
        {Routes.map((item) => (
          <Route key={item.path} path={item.path} element={id === undefined ? authNode : item.element} />
        ))}
      </ReactRoutes>
    </Suspense>
  );
};
