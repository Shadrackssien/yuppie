<script>
import timeIcon from "../../assets/time.png";
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeIcon,
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
  <div class="flex flex-col">
    <RouterLink v-if="movie" :to="{ name: 'movie', params: { id: movie.id } }">
      <img :src="imagePath" :alt="movie.title" />
    </RouterLink>
    <div
      class="flex border border-gray-800 items-center justify-between space-x-6 mt-2"
    >
      <p class="text-xl font-semibold truncate">{{ movie.title }}</p>
      <div class="flex flex-row pl-2 space-x-2">
        <p class="button1 p-1">HD</p>
        <div class="button2 p-1 space-x-1">
          <img :src="timeIcon" alt="time" />
          <p>{{ movie.release_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
