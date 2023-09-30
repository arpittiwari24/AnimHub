import {
  Home,
  About,
  Dashboard,
  AdminDashboard,
  Editor,
  Explore,
  Categories,
  Policy,
  Contact,
  ComingSoon,
  OnBoardingPage,
  Profile,
} from "./pages";
import Launching from "./Launching/Launching";
import { Confirm } from "./components/Popups";
import NotFound from "./pages/NotFound";

const launched = true;

export const routesData = [
  {
    path: "/",
    component: launched ? Home : Launching,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/profile/:username",
    component: Profile,
  },
  {
    path: "/admin",
    component: AdminDashboard,
  },
  {
    path: "/editor",
    component: Editor,
  },
  {
    path: "/explore",
    component: Explore,
  },
  {
    path: "/categories",
    component: Categories,
  },
  {
    path: "/privacy-policy",
    component: Policy,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/confirm",
    component: Confirm,
  },
  {
    path: "/blogs",
    component: ComingSoon,
  },
  {
    path: "/onboarding",
    component: OnBoardingPage,
  },
  {
    path: "*",
    component: NotFound,
  },
];
export default routesData;
