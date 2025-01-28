<script>
import PopularCard from "./Cards/PopularCard.vue";

export default {
  components: {
    PopularCard,
  },
  data() {
    return {
      movies: [],
    };
  },
  async mounted() {
    try {
      const response = await this.$http.get("/movie/popular");
      this.movies = response.data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  },
};
</script>

<!-- Add time and rating -->

<template>
  <div class="space-y-10">
    <div class="flex flex-row justify-between">
      <h1 class="text-3xl font-bold">Most Popular</h1>
      <button class="font-bold">
        <p>View all</p>
        <!-- Add Arrow sign -->
      </button>
    </div>
    <div class="grid grid-cols-4 gap-8 mx-auto">
      <div v-for="movie in movies.slice(0, 4)" :key="movie.id">
        <PopularCard :movie="movie" />
      </div>
    </div>
  </div>
</template>
