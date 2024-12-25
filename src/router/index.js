import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../pages/Homepage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
    },
    // {
    //   path: "/product/:id",
    //   name: "product",
    //   // route level code-splitting
    //   // this generates a separate chunk (product.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/ProductView.vue"),
    // },
  ],
});

export default router;
