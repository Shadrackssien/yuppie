<script>
import moviesCard from "./Cards/MoviesCard.vue";

export default {
  components: {
    moviesCard,
  },
  data() {
    return {
      movies: [],
    };
  },
  async mounted() {
    try {
      const response = await this.$http.get("/movie/upcoming");
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
      <div class="flex flex-row space-x-4">
        <h1 class="text-3xl font-bold">Upcoming</h1>
        <button class="button1 p-1">Movies</button>
        <div class="flex flex-row space-x-4 bg-black opacity-50">
          <button class="button2 p-1">Series</button>
          <button class="button2 p-1">Animation</button>
        </div>
      </div>
      <button class="font-bold">
        <p>View all</p>
        <!-- Add Arrow sign -->
      </button>
    </div>
    <div class="grid grid-cols-4 gap-8">
      <div v-for="movie in movies.slice(0, 8)" :key="movie.id">
        <moviesCard :movie="movie" />
      </div>
    </div>
  </div>
</template>
