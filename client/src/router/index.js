import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import MenuView from "@/views/MenuView.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import AboutView from "../views/AboutView.vue";

import LoginView from "@/views/account/LoginView.vue";
import RegisterView from "@/views/account/RegisterView.vue";

import DashboardHome from "../views/dashboard/DashboardHome.vue";
import DashboardReservations from "../views/dashboard/DashboardReservations.vue";
import DashboardAnalytics from "../views/dashboard/DashboardAnalytics.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/menu",
      name: "menu",
      component: MenuView
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactUsView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView
    },
    {
      path: "/dashboard/home",
      name: "dashboard-home",
      component: DashboardHome
    },
    {
      path: "/dashboard/reservations",
      name: "dashboard-reservations",
      component: DashboardReservations
    },
    {
      path: "/dashboard/analytics",
      name: "dashboard-analytics",
      component: DashboardAnalytics
    }
  ]
});

export default router;