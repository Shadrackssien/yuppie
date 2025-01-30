<script>
import NavBar from "../components/NavBar.vue";
import SeriesCard from "../components/Cards/SeriesCard.vue";
import Comments from "../components/Comments.vue";

export default {
  components: {
    SeriesCard,
    NavBar,
    Comments,
  },
  data() {
    return {
      seriesDetails: null,
      series: [],
      loading: true,
      error: null,
      selectedSeason: null,
      seasonEpisodes: [],
      loadingEpisodes: false,
    };
  },
  mounted() {
    this.fetchseriesDetails();
  },
  methods: {
    async fetchseriesDetails() {
      try {
        const seriesId = this.$route.params.id;
        const response = await this.$http.get(
          `/tv/${seriesId}?append_to_response=credits,images,videos,recommendations,reviews`
        );
        this.seriesDetails = response.data;
        if (
          this.seriesDetails.seasons &&
          this.seriesDetails.seasons.length > 0
        ) {
          this.seriesDetails.seasons.forEach((season) => {
            season.display_season_number = season.season_number + 1;
          });

          this.selectedSeason = this.seriesDetails.seasons[0];
          await this.fetchSeasonEpisodes(
            this.seriesDetails.seasons[0].season_number
          );
        }
      } catch (err) {
        this.error = "Failed to load series details. Please try again later.";
      } finally {
        this.loading = false;
      }
    },
    async fetchSeasonEpisodes(seasonNumber) {
      this.loadingEpisodes = true;
      try {
        const seriesId = this.$route.params.id;
        const response = await this.$http.get(
          `/tv/${seriesId}/season/${seasonNumber}`
        );
        this.seasonEpisodes = response.data.episodes;
      } catch (err) {
        console.error("Failed to fetch season episodes:", err);
      } finally {
        this.loadingEpisodes = false;
      }
    },
    async changeSeason(season) {
      this.selectedSeason = season;
      await this.fetchSeasonEpisodes(season.season_number);
    },

    formatEpisodeNumber(number) {
      return number.toString().padStart(2, "0");
    },
  },
};
</script>

<template>
  <div class="series w-full min-h-screen bg-black">
    <!-- Navbar -->
    <nav-bar />

    <!-- Loading Spinner -->
    <div v-if="loading" class="flex justify-center items-center h-64">
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"
      ></div>
    </div>

    <!-- Error Message -->
    <div v-else-if="error" class="text-red-500 text-center p-4">
      {{ error }}
    </div>

    <!-- series Content -->
    <div v-else>
      <!-- Trailer -->
      <div class="text-white w-[90%] h-[600px] mx-auto my-4">
        <iframe
          v-if="seriesDetails?.videos?.results.length"
          :src="`https://www.youtube.com/embed/${seriesDetails.videos.results[0].key}`"
          class="w-full h-full rounded-lg"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <img
          v-else
          :src="`https://image.tmdb.org/t/p/w500${seriesDetails?.poster_path}`"
          alt="series Poster"
          class="w-full h-full rounded-lg object-cover object-center"
        />
      </div>

      <!-- series Details -->
      <div class="flex text-white w-[90%] h-auto mx-auto py-8">
        <div class="w-2/5">
          <img
            :src="`https://image.tmdb.org/t/p/w500${seriesDetails?.poster_path}`"
            alt="series Poster"
            class="w-full h-full rounded-xl object-cover object-center"
          />
        </div>
        <div class="w-3/5 mx-8">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold my-4">{{ seriesDetails?.title }}</h1>
            <button class="button1 px-4 py-2">Add to Favorite</button>
          </div>

          <!-- Genres -->
          <div class="flex flex-row space-x-2 my-8">
            <div
              v-for="genre in seriesDetails?.genres || []"
              :key="genre.id"
              class="text-black text-base font-bold py-1 px-4 bg-white rounded-full"
            >
              {{ genre.name }}
            </div>
          </div>

          <!-- Additional Info -->
          <div class="flex flex-row items-center space-x-6">
            <div class="flex items-center space-x-2">
              <img
                class="w-4 h-4"
                src="../assets/calendar.png"
                alt="calendar"
              />
              <p>{{ seriesDetails?.release_date?.slice(0, 10) }}</p>
            </div>
            <div class="flex items-center space-x-2">
              <img class="w-4 h-4" src="../assets/star.png" alt="rating" />
              <p>{{ seriesDetails?.vote_average }}</p>
            </div>
          </div>

          <p class="my-4">
            {{ seriesDetails?.overview }}
          </p>

          <!-- Crew -->
          <div class="mt-8 w-full">
            <div
              class="flex flex-row space-x-2"
              v-for="(crew, index) in seriesDetails?.credits?.crew.slice(0, 15)"
              :key="index"
            >
              <p class="flex justify-end w-[200px] font-bold">
                {{ crew.job }} :
              </p>
              <p>{{ crew.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Episodes -->
      <div
        v-if="seriesDetails?.seasons?.length"
        class="text-white w-[90%] mx-auto"
      >
        <!-- Season Selection -->
        <div class="flex flex-wrap gap-4 mb-6">
          <button
            v-for="season in seriesDetails.seasons"
            :key="season.id"
            @click="changeSeason(season)"
            class="px-4 py-2 rounded-full transition-colors"
            :class="{
              'bg-primary text-white': selectedSeason?.id === season.id,
              'bg-gray-700 hover:bg-gray-600': selectedSeason?.id !== season.id,
            }"
          >
            Season {{ season.display_season_number }}
          </button>
        </div>

        <!-- Season Info -->
        <div v-if="selectedSeason" class="mb-6">
          <h2 class="text-2xl font-bold mb-2">
            Season {{ selectedSeason.display_season_number }}
          </h2>
          <p class="text-gray-400">
            {{ selectedSeason.overview || "No overview available." }}
          </p>
          <div class="flex gap-4 mt-2 text-sm text-gray-400">
            <span>Air Date: {{ selectedSeason.air_date || "TBA" }}</span>
            <span>{{ selectedSeason.episode_count }} Episodes</span>
          </div>
        </div>

        <!-- Episodes List -->
        <div v-if="loadingEpisodes" class="flex justify-center py-8">
          <div
            class="animate-spin rounded-full h-8 w-8 border-t-2 border-white"
          ></div>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="episode in seasonEpisodes"
            :key="episode.id"
            class="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
          >
            <div class="flex">
              <div class="w-[120px] h-[80px]">
                <img
                  v-if="episode.still_path"
                  :src="`https://image.tmdb.org/t/p/w300${episode.still_path}`"
                  :alt="episode.name"
                  class="w-full h-full object-cover"
                />
                <div
                  v-else
                  class="w-full h-full bg-gray-700 flex items-center justify-center"
                >
                  No Image
                </div>
              </div>
              <div class="p-4 flex-1">
                <div class="flex justify-between items-start">
                  <h3 class="font-semibold">
                    {{ formatEpisodeNumber(episode.episode_number) }}.
                    {{ episode.name }}
                  </h3>
                  <span class="text-sm text-gray-400">
                    {{ episode.runtime ? `${episode.runtime}min` : "TBA" }}
                  </span>
                </div>
                <p class="text-sm text-gray-400 mt-1 line-clamp-2">
                  {{ episode.overview || "No overview available." }}
                </p>
                <div class="mt-2 text-sm text-gray-500">
                  Air Date: {{ episode.air_date || "TBA" }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommendations -->
      <div class="text-white w-[90%] mx-auto font-bold text-xl pb-12">
        <h1 class="mt-8">You may also like</h1>
        <div class="grid grid-cols-4 gap-8 mx-auto mt-8">
          <div
            v-for="serie in seriesDetails?.recommendations?.results.slice(0, 8)"
            :key="serie.id"
          >
            <SeriesCard :serie="serie" />
          </div>
        </div>
      </div>

      <!-- Comments -->
      <div class="w-[90%] mx-auto">
        <h1 class="text-xl text-white font-bold pb-8">Comments</h1>
        <Comments />
      </div>
    </div>
  </div>
</template>
