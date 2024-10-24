import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";
import { LayoutDashboard, CircleUserRound } from "lucide-vue-next";

export const sidebarRoutes: RouteRecordRaw[] = [
  {
    path: "",
    redirect: "dashboard/home",
  },
  {
    path: "home",
    name: "Dashboard",
    component: () => import("@/views/Dashboard/views/Home/Home.vue"),
    meta: {
      isPage: true,
      icon: LayoutDashboard,
    },
  },
  {
    path: "profile",
    name: "Profile",
    component: () => import("@/views/Dashboard/views/Profile/Profile.vue"),
    meta: {
      isPage: true,
      icon: CircleUserRound,
    },
  },
];

const routes: RouteRecordRaw[] = [
  {
    path: "",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Login.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("@/views/Dashboard/Dashboard.vue"),
    children: sidebarRoutes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
