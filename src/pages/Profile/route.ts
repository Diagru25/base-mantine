import { lazy } from "react";
import { PROFILE } from "routes/route.constant";
const Profile = lazy(() => import("pages/Profile/Profile"));

export default {
  path: PROFILE,
  element: Profile,
};
