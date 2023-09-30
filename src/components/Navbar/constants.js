import { BsFillGrid1X2Fill } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { Categories, Languages, Tags, TopUsers, Trending } from "./NavSections";
export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Categories",
    path: "/",
    content: Categories,
  },
  {
    name: "Languages",
    path: "/",
    content: Languages,
  },
  {
    name: "Top Users",
    path: "/",
    content: TopUsers,
  },
  {
    name: "Trending",
    path: "/",
    content: Trending,
  },
  {
    name: "Blogs",
    path: "/",
  },
  {
    name: "Tags",
    path: "/",
    content: Tags,
  },
  {
    name: "About",
    path: "/",
  },
];
export const subNavLinks = [
  {
    name: "Spotlight",
    path: "/",
  },
  {
    name: "Feedback",
    path: "/contact",
  },
  {
    name: "Admins",
    path: "/",
  },
  {
    name: "Insights",
    path: "/",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    name: "Maintainer",
    path: "/contact",
  },
  {
    name: "Shop",
    path: "/",
  },
  {
    name: "EN",
    path: "/",
  },
];
export const dropdownItemsLeftSidebar = [
  {
    title: "Components",
    icon: BsFillGrid1X2Fill,
    subItems: [
      {
        title: "Subitem 1",
        icon: BsFillGrid1X2Fill,
      },
      {
        title: "Subitem 2",
        icon: BsFillGrid1X2Fill,
      },
    ],
  },
  {
    title: "Explore",
    icon: MdExplore,
  },
  {
    title: "Categories",
    icon: BiSolidCategoryAlt,
    subItems: [
      {
        title: "Subitem 1",
      },
      {
        title: "Subitem 2",
      },
    ],
  },
  {
    title: "Item 2",
  },

  {
    title: "Nested Dropdown 2",
    subItems: [
      {
        title: "Subitem 1",
      },
      {
        title: "Subitem 2",
      },
    ],
  },
  {
    title: "Nested Dropdown 3",
    subItems: [
      {
        title: "Subitem 1",
      },
      {
        title: "Subitem 2",
      },
    ],
  },
  {
    title: "Join GDSC DYPCOE",
    special: true,
  },

  // Add more dropdown items here
];
export const dropdownColumnsLeftSidebar = [
  {
    title: "Explore",
    icon: MdExplore,
  },

  {
    title: "Explore",
    icon: MdExplore,
  },

  {
    title: "Explore",
    icon: MdExplore,
  },

  {
    title: "Explore",
    icon: MdExplore,
  },

  {
    title: "Explore",
    icon: MdExplore,
  },
  {
    title: "Explore",
    icon: MdExplore,
  },

  // Add more dropdown items here
];
export const dropdownItemsRightSidebar = [
  {
    title: "Components",
    icon: BsFillGrid1X2Fill,
  },
  // {
  //   title: "Explore",
  //   icon: MdExplore,
  // },
  // {
  //   title: "Categories",
  //   icon: BiSolidCategoryAlt,
  // },
  // {
  //   title: "Item 2",
  // },

  // {
  //   title: "Nested Dropdown 2",
  // },
  // {
  //   title: "Nested Dropdown 3",
  // },
  // {
  //   title: "Join GDSC DYPCOE",
  //   special: true,
  // },

  // Add more dropdown items here
];
export const dropdownColumnsRightSidebar = [
  {
    title: "Explore",
    icon: MdExplore,
  },

  {
    title: "Explore",
    icon: MdExplore,
  },

  {
    title: "Explore",
    icon: MdExplore,
  },

  {
    title: "Explore",
    icon: MdExplore,
  },

  {
    title: "Explore",
    icon: MdExplore,
  },
  {
    title: "Explore",
    icon: MdExplore,
  },

  // Add more dropdown items here
];
