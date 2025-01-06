<script>
import NavBar from "../components/NavBar.vue";
import Header from "../components/Header.vue";
import MoviesAndSeries from "../components/MoviesAndSeries.vue";

export default {
  components: {
    NavBar,
    Header,
    MoviesAndSeries,
  },
};
</script>

<template>
  <div class="overflow-x-hidden bg-black">
    <NavBar />
    <Header />
    <MoviesAndSeries />
  </div>
</template>
