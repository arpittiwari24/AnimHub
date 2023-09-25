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
} from "./pages";
import { Confirm, OnBoarding } from "./components/Popup";
export const routesData = [
  {
    path: "/",
    component: Home,
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
    component: OnBoarding,
  },
];
export default routesData;
