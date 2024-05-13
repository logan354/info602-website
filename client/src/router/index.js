import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/account/LoginView.vue";
import MenuView from "@/views/MenuView.vue";
import BookingView from "@/views/BookingView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
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
      path: "/contact",
      name: "contact",
      component: ContactView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    }
  ]
});

export default router;