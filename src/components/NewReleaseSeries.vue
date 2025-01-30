<script>
import SeriesCard from "./Cards/SeriesCard.vue";

export default {
  components: {
    SeriesCard,
  },
  data() {
    return {
      series: [],
      loading: false,
      error: null,
    };
  },
  mounted() {
    this.fetchSeries();
  },
  methods: {
    async fetchSeries() {
      this.loading = true;
      this.error = null;

      try {
        const response = await this.$http.get("/tv/top_rated");
        this.series = response.data.results;
      } catch (error) {
        this.error = "Failed to load series. Please try again later.";
        console.error("Error fetching popular series:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<template>
  <div class="space-y-10">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">Top Rated - Series</h1>
      <button class="flex items-center py-2 font-semibold">
        <span>View all</span>
        <!-- Add Arrow sign -->
      </button>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div
        class="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"
      ></div>
    </div>

    <div v-else-if="error" class="text-center py-12 text-red-600">
      {{ error }}
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <SeriesCard
        v-for="serie in series.slice(0, 4)"
        :key="serie.id"
        :serie="serie"
      />
    </div>
  </div>
</template>
