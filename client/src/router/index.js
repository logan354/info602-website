import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenuView from "@/views/MenuView.vue";
import BookingView from "@/views/BookingView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import LoginView from "@/views/account/LoginView.vue";
import RegisterView from "@/views/account/RegisterView.vue";

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
      path: "/booking",
      name: "booking",
      component: BookingView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView
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
    }
  ]
});

export default router;