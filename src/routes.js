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
  Testing,
  ComingSoon,
  OnBoardingPage,
} from "./pages";
import Launching from "./Launching/Launching";
import { Confirm } from "./components/Popups";

const launched = false;

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
    path: "/testing",
    component: Testing,
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
];
export default routesData;
