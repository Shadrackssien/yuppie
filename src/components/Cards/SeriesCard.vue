<script>
export default {
  props: {
    serie: {
      type: Object,
      required: true,
      validator(value) {
        return ["id", "poster_path", "genre_ids"].every(
          (prop) => prop in value
        );
      },
    },
    episode: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      genreMap: {},
      imageError: false,
    };
  },
  computed: {
    imagePath() {
      return `https://image.tmdb.org/t/p/w500/${this.serie.poster_path}`;
    },
    genreNames() {
      return this.serie.genre_ids
        .map((id) => this.genreMap[id] || "Unknown")
        .slice(0, 3);
    },
    seriesTitle() {
      return this.serie.name || this.serie.title || "Untitled Series";
    },
    seasonNumber() {
      return this.serie.season_number || 1;
    },
  },
  async created() {
    await this.fetchGenres();
  },
  methods: {
    async fetchGenres() {
      try {
        const response = await this.$http.get("/genre/tv/list");
        this.genreMap = response.data.genres.reduce((map, genre) => {
          map[genre.id] = genre.name;
          return map;
        }, {});
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    },
    handleImageError() {
      this.imageError = true;
    },
  },
};
</script>

<template>
  <div
    class="relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div class="relative aspect-[2/3]">
      <p
        class="absolute left-2 top-2 z-10 bg-black/70 text-white rounded px-2 py-1 text-sm"
      >
        Ep {{ episode }}
      </p>
      <RouterLink
        v-if="serie"
        :to="{ name: 'serie', params: { id: serie.id } }"
      >
        <img
          :src="imagePath"
          :alt="seriesTitle"
          @error="handleImageError"
          class="w-full h-full object-cover"
        />
      </RouterLink>
    </div>

    <div class="p-4 border border-gray-800">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-lg font-bold truncate" :title="seriesTitle">
          {{ seriesTitle }}
        </h3>
        <div class="flex items-center space-x-2">
          <span class="px-2 button1"> HD </span>
          <span class="px-2 button2"> Season {{ seasonNumber }} </span>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="genre in genreNames"
          :key="genre"
          class="text-xs px-2 py-1 text-white border border-primary rounded-full"
        >
          {{ genre }}
        </span>
      </div>
    </div>
  </div>
</template>
