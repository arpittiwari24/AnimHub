import {
  Home,
  About,
  Dashboard,
  AdminDashboard,
  Explore,
  Categories,
  Policy,
  Contact,
  ComingSoon,
  OnBoardingPage,
  Profile,
  Faq,
  EditorPage,
  ComponentPage,
} from "./pages";
import Launching from "./Launching/Launching";
import { Confirm } from "./components/Popups";
import NotFound from "./pages/NotFound";
import Subscription from "./pages/Pricing";
import Reels from "./pages/Reels";
// import CustomRoute from "./CustomRoute"; // Import the CustomRoute component

const launched = true;

export const routesData = [
  {
    path: "/",
    component: launched ? Home : Launching,
    authenticated: false,
  },
  {
    path: "/about",
    component: About,
    authenticated: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    authenticated: true, // Set 'authenticated' to true for routes that require authentication
  },
  {
    path: "/profile/:username",
    component: Profile,
    authenticated: false,
  },
  {
    path: "/admin",
    component: AdminDashboard,
    authenticated: true,
  },
  {
    path: "/editor",
    component: EditorPage,
    authenticated: true,
  },
  {
    path: "/component/:id",
    component: ComponentPage,
    authenticated: false,
  },
  {
    path: "/explore",
    component: Explore,
    authenticated: false,
  },
  {
    path: "/faq",
    component: Faq,
    authenticated: false,
  },
  {
    path: "/categories",
    component: Categories,
    authenticated: false,
  },
  {
    path: "/privacy-policy",
    component: Policy,
    authenticated: false,
  },
  {
    path: "/contact",
    component: Contact,
    authenticated: false,
  },
  {
    path: "/confirm",
    component: Confirm,
    authenticated: false,
  },
  {
    path: "/blogs",
    component: ComingSoon,
    authenticated: false,
  },
  {
    path: "/spotlight",
    component: ComingSoon,
    authenticated: false,
  },
  {
    path: "/shop",
    component: ComingSoon,
    authenticated: false,
  },
  {
    path: "/admins",
    component: ComingSoon,
    authenticated: false,
  },
  {
    path: "/maintainers",
    component: ComingSoon,
    authenticated: false,
  },
  {
    path: "/insights",
    component: ComingSoon,
    authenticated: false,
  },
  {
    path: "/onboarding",
    component: OnBoardingPage,
    authenticated: true,
  },
  {
    path: "/pricing",
    component: Subscription,
    authenticated: false,
  },
  {
    path: "/reels",
    component: Reels,
    authenticated: false,
  },
  {
    path: "*",
    component: NotFound,
    authenticated: false,
  },
];

export default routesData;
