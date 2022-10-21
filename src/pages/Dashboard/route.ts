import { lazy } from "react";
import { DASHBOARD } from "routes/route.constant";
const Dashboard = lazy(() => import("pages/Dashboard"));

export default {
  path: DASHBOARD,
  element: Dashboard,
};
