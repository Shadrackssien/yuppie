import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../pages/Homepage.vue";
import MoviePage from "../pages/Moviepage.vue";
import SeriesPage from "../pages/Seriespage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: MoviePage,
      props: true,
    },
    {
      path: "/series/:id",
      name: "serie",
      component: SeriesPage,
      props: true,
    },
  ],
});

export default router;
