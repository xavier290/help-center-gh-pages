import React from "react";

const WoodProducts = React.lazy(() => import("./pages/WoodProducts"));
const SteelTrusses = React.lazy(() => import("./pages/steeltrusses"));
const WallPanels = React.lazy(() => import("./pages/wallpanels"));
const Windows = React.lazy(() => import("./pages/windows"));
const WoodTrusses = React.lazy(() => import("./pages/woodtrusses"));

const routes = [
  {
    enabled: true,
    path: "/engineered-wood-products",
    component: WoodProducts,
    navbar: "engineered wood products",
    child: [
      {
        name: "Overwiew",
        path: "/engineered-wood-products",
      },
      {
        name: "Common Questions",
        path: "#",
      },
      {
        name: "Related Articles",
        path: "#",
      },
    ],
  },
  {
    enabled: true,
    path: "/steel-trusses",
    component: SteelTrusses,
    navbar: "Steel Trusses",
    child: null,
  },
  {
    enabled: true,
    path: "/wall-panels",
    component: WallPanels,
    navbar: "Wall Panels",
    child: null,
  },
  {
    enabled: true,
    path: "/windows",
    component: Windows,
    navbar: "Windows",
    child: null,
  },
  {
    enabled: true,
    path: "/wood-trusses",
    component: WoodTrusses,
    navbar: "Wood Trusses",
    child: null,
  },
];

export default routes.filter((route) => route.enabled);
