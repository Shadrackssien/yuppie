<!-- <script>
import TrendingCard from "./Cards/TrendingCard.vue";
import arrow from "../assets/arrow.png";
export default {
  components: {
    TrendingCard,
  },
  data() {
    return {
      arrow,
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
        const response = await this.$http.get("/trending/tv/" + time_window);
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
  <div class="flex flex-col mt-12">
    <h1 class="text-3xl font-bold">Trending</h1>
    <div class="flex flex-row justify-between">
      <div v-for="serie in series" :key="serie.id">
        <TrendingCard :serie="serie" />
      </div>
      <div
        class="flex items-center justify-center w-16 h-16 cursor-pointer mt-16 rounded-full bg-[#ffffff]"
      >
        <button class="">
          <img class="w-8 h-8" :src="arrow" alt="arrow" />
        </button>
      </div>
    </div>
  </div>
</template> -->

<script>
import TrendingCard from "./Cards/TrendingCard.vue";

export default {
  name: "Trending",
  components: {
    TrendingCard,
  },
  data() {
    return {
      series: [],
      loading: false,
      error: null,
      currentPage: 0,
      itemsPerPage: 4,
    };
  },
  computed: {
    visibleSeries() {
      const start = this.currentPage * this.itemsPerPage;
      return this.series.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    async fetchSeries() {
      this.loading = true;
      this.error = null;

      try {
        const response = await this.$http.get("/trending/tv/week");

        this.series = response.data.results.map((show) => ({
          id: show.id,
          title: show.name,
          season: show.season_number || 1,
          episode: show.episode_number || 1,
          date: show.first_air_date,
          poster_path: show.poster_path,
        }));
      } catch (err) {
        this.error = "Failed to load series. Please try again later.";
        console.error("Error fetching popular series:", err);
      } finally {
        this.loading = false;
      }
    },
    nextPage() {
      if ((this.currentPage + 1) * this.itemsPerPage < this.series.length) {
        this.currentPage++;
      } else {
        this.currentPage = 0;
      }
    },
  },
  mounted() {
    this.fetchSeries();
  },
};
</script>

<template>
  <div class="flex flex-col mt-12 pr-20">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Trending</h1>
      <div v-if="error" class="text-red-500">{{ error }}</div>
    </div>

    <div v-if="loading" class="flex justify-center py-8">
      <div
        class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
      ></div>
    </div>

    <div v-else class="flex flex-row justify-between items-start relative">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <transition-group name="list">
          <TrendingCard
            v-for="serie in visibleSeries"
            :key="serie.id"
            :serie="serie"
          />
        </transition-group>
      </div>

      <button
        @click="nextPage"
        class="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200 absolute -right-20 top-1/2 transform -translate-y-1/2"
        :disabled="loading"
      >
        <img class="w-8 h-8" src="../assets/arrow.png" alt="Next page" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
