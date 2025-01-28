<script>
import NavBar from "../components/NavBar.vue";
import PopularCard from "../components/Cards/PopularCard.vue";
import Comments from "../components/Comments.vue";

export default {
  components: {
    PopularCard,
    NavBar,
    Comments,
  },
  data() {
    return {
      movieDetails: null,
      movies: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchMovieDetails();
    this.fetchRecommendations();
  },
  methods: {
    async fetchMovieDetails() {
      try {
        const movieId = this.$route.params.id;
        const response = await this.$http.get(
          `/movie/${movieId}?append_to_response=credits,images,videos,recommendations,reviews`
        );
        this.movieDetails = response.data;
      } catch (err) {
        this.error = "Failed to load movie details. Please try again later.";
      } finally {
        this.loading = false;
      }
    },
    async fetchRecommendations() {
      try {
        const response = await this.$http.get(`/movie/popular`);
        this.movies = response.data.results;
      } catch (err) {
        console.error("Failed to fetch recommendations:", err);
      }
    },
  },
};
</script>

<template>
  <div class="movie w-full min-h-screen bg-black">
    <!-- Navbar -->
    <nav-bar />

    <!-- Loading Spinner -->
    <div v-if="loading" class="flex justify-center items-center h-64">
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-2 border-white"
      ></div>
    </div>

    <!-- Error Message -->
    <div v-else-if="error" class="text-red-500 text-center p-4">
      {{ error }}
    </div>

    <!-- Movie Content -->
    <div v-else>
      <!-- Trailer -->
      <div class="text-white w-[90%] h-[600px] mx-auto my-4">
        <iframe
          v-if="movieDetails?.videos?.results.length"
          :src="`https://www.youtube.com/embed/${movieDetails.videos.results[0].key}`"
          class="w-full h-full rounded-lg"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <img
          v-else
          :src="`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`"
          alt="Movie Poster"
          class="w-full h-full rounded-lg object-cover object-center"
        />
      </div>

      <!-- Movie Details -->
      <div class="flex text-white w-[90%] h-auto mx-auto py-8">
        <div class="w-2/5">
          <img
            :src="`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`"
            alt="Movie Poster"
            class="w-full h-full rounded-xl object-cover object-center"
          />
        </div>
        <div class="w-3/5 mx-8">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold my-4">{{ movieDetails?.title }}</h1>
            <button class="button1 px-4 py-2">Add to Favorite</button>
          </div>

          <!-- Genres -->
          <div class="flex flex-row space-x-2 my-8">
            <div
              v-for="genre in movieDetails?.genres || []"
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
              <p>{{ movieDetails?.release_date?.slice(0, 10) }}</p>
            </div>
            <div class="flex items-center space-x-2">
              <img class="w-4 h-4" src="../assets/star.png" alt="rating" />
              <p>{{ movieDetails?.vote_average }}</p>
            </div>
          </div>

          <p class="my-4">
            {{ movieDetails?.overview }}
          </p>

          <!-- Crew -->
          <div class="mt-8 w-full">
            <div
              class="flex flex-row space-x-2"
              v-for="(crew, index) in movieDetails?.credits?.crew.slice(0, 15)"
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
        v-if="movieDetails?.seasons?.length"
        class="text-white w-[90%] mx-auto"
      >
        <div class="flex flex-row items-center space-x-2">
          <p class="text-xl font-bold">Season 1</p>
        </div>
        <div class="grid grid-cols-2 gap-6 py-4">
          <div
            v-for="episode in movieDetails.seasons[0].episodes || []"
            :key="episode.id"
            class="bg-[#D9D9D9] text-black p-2 rounded-lg"
          >
            {{ episode.name }}
          </div>
        </div>
      </div>

      <!-- Recommendations -->
      <div class="text-white w-[90%] mx-auto font-bold text-xl pb-12">
        <h1 class="mt-8">You may also like</h1>
        <div class="grid grid-cols-4 gap-8 mx-auto mt-8">
          <div v-for="movie in movies.slice(0, 8)" :key="movie.id">
            <PopularCard :movie="movie" />
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
