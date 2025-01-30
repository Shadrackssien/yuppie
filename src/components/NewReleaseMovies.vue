<script>
import moviesCard from "./Cards/MoviesCard.vue";

export default {
  components: {
    moviesCard,
  },
  data() {
    return {
      movies: [],
      loading: false,
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await this.$http.get("/movie/top_rated");
      this.movies = response.data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  },
};
</script>

<template>
  <div class="space-y-10">
    <div class="flex flex-row justify-between">
      <h1 class="text-3xl font-bold">Top Rated - Movies</h1>
      <button class="font-bold">
        <p>View all</p>
        <!-- Add Arrow sign -->
      </button>
    </div>
    <div class="grid grid-cols-4 gap-8">
      <div v-for="movie in movies.slice(0, 4)" :key="movie.id">
        <moviesCard :movie="movie" />
      </div>
    </div>
  </div>
</template>
