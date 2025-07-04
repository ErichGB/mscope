import { lazy } from "react";
import { createBrowserRouter } from "react-router";

export default createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("./layout/Base.tsx")),
    // errorElement: lazy(() => import("./pages/ErrorPage.tsx")),
    children: [
      {
        path: "companies",
        Component: lazy(() => import("@/pages/companies")),
      }
    ]
  }
], {
  basename: import.meta.env.MODE === 'production' ? "/mscope" : '/',
});