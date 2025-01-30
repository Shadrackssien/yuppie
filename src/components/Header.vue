<script>
import play from "../assets/play.png";
import watch from "../assets/watch.png";
import calendar from "../assets/calendar.png";
import time from "../assets/time.png";
import star from "../assets/star.png";

export default {
  data() {
    return {
      play,
      watch,
      calendar,
      time,
      star,
      movies: [],
      currentIndex: 0,
      slideInterval: null,
    };
  },
  computed: {
    movie() {
      return this.movies[this.currentIndex] || null;
    },
  },
  methods: {
    startSlideShow() {
      this.slideInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % 5;
      }, 8000);
    },
    beforeUnmount() {
      clearInterval(this.slideInterval);
    },
  },
  async mounted() {
    try {
      const genreResponse = await this.$http.get("/genre/movie/list");
      const genreMap = {};
      genreResponse.data.genres.forEach((genre) => {
        genreMap[genre.id] = genre.name;
      });

      const response = await this.$http.get("/movie/popular");
      this.movies = response.data.results.slice(0, 5).map((movie) => ({
        id: movie.id,
        title: movie.title,
        image: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        description: movie.overview,
        year: movie.release_date,
        rating: movie.vote_average,
        genre: movie.genre_ids.map((id) => genreMap[id]),
      }));

      this.startSlideShow();
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<template>
  <div
    :style="{
      backgroundImage: `url(${movie ? movie.image : ''})`,
    }"
    class="relative flex w-[100%] h-[700px] flex-col bg-cover bg-center z-[5]"
  >
    <!-- overlay -->
    <div
      class="absolute inset-0 bg-black bg-opacity-40 md:bg-opacity-20 z-[10]"
    >
      <!-- watch now -->
      <div class="text-white flex items-center justify-center mt-64 space-x-8">
        <button class="button1 p-4 space-x-2">
          <RouterLink
            v-if="movie"
            class="font-bold text-lg"
            :to="{ name: 'movie', params: { id: movie.id } }"
            >Watch Now
          </RouterLink>
          <img class="w-6 h-6" :src="play" alt="play" />
        </button>
        <button class="button2 p-4 space-x-2">
          <p class="font-bold text-lg">Watch Later</p>
          <img class="w-6 h-6" :src="watch" alt="play" />
        </button>
      </div>

      <!-- Info -->
      <div v-if="movie" class="flex flex-col space-y-6 mx-20 mt-16 text-white">
        <p class="font-bold text-3xl">{{ movie.title }}</p>
        <div class="flex flex-row space-x-2">
          <p
            v-for="genre in movie.genre"
            :key="genre"
            class="text-black text-base font-bold h-max w-max py-1 px-2 bg-white rounded-full"
          >
            {{ genre }}
          </p>

          <div class="flex flex-row items-center justify-center pl-2 space-x-6">
            <div class="flex items-center justify-center flex-row space-x-2">
              <img class="w-4 h-4" :src="calendar" alt="calendar" />
              <p>{{ movie.year }}</p>
            </div>

            <div class="flex items-center justify-center flex-row space-x-2">
              <img class="w-4 h-4" :src="star" alt="calendar" />
              <p>{{ movie.rating }}</p>
            </div>
          </div>
        </div>

        <p class="w-[550px]">
          {{ movie.description }}
        </p>
      </div>
      <!-- sliding -->
      <div class="flex items-center justify-center mx-auto space-x-2 mt-20">
        <div
          v-for="(_, index) in movies"
          :key="index"
          :class="[
            index === currentIndex ? 'w-8 h-2 bg-primary' : 'w-4 h-4 bg-white',
            'rounded-full',
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>
