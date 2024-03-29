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
  {
    route: "/reset-password",
    Component: lazy(() => import("../pages/reset")),
  },
  {
    route: "/posted-jobs",
    Component: lazy(() => import("../pages/posted-jobs")),
  },
  {
    route: "/post-a-job",
    Component: lazy(() => import("../pages/post-jobs")),
  },
];

export default RouteArr;
