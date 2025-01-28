<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      genreMap: {},
    };
  },
  computed: {
    imagePath() {
      return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
    },
    genreNames() {
      return this.movie.genre_ids.map((id) => this.genreMap[id] || "Unknown");
    },
  },
  async mounted() {
    try {
      const response = await this.$http.get("/genre/movie/list");
      this.genreMap = response.data.genres.reduce((map, genre) => {
        map[genre.id] = genre.name;
        return map;
      }, {});
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  },
};
</script>
<template>
  <div class="flex h-96 flex-col mb-12">
    <img class="w-full h-full rounded-xl" :src="imagePath" :alt="movie.title" />
    <div class="flex items-center justify-between space-x-6 mt-2">
      <p class="text-xl font-semibold w-full line-clamp-1">{{ movie.title }}</p>
      <div class="flex flex-row pl-2 space-x-2">
        <p
          v-for="genre in genreNames.slice(0, 1)"
          :key="genre"
          class="button1 p-2"
        >
          {{ genre }}
        </p>
      </div>
    </div>
  </div>
</template>
