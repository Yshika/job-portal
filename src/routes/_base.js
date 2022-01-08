import { lazy } from "react";

const RouteArr = [
  {
    route: "/",
    Component: lazy(() => import("../pages/home")),
  },
  {
    route: "/login",
    Component: lazy(() => import("../pages/login")),
  },
];

export default RouteArr;
