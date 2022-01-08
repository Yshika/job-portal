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
  {
    route: "/signup",
    Component: lazy(() => import("../pages/signup")),
  },
  {
    route: "/forget-password",
    Component: lazy(() => import("../pages/forget-pswd")),
  },
];

export default RouteArr;
