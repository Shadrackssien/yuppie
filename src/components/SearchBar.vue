<script>
import MdSearchIcon from "vue-ionicons/dist/md-search.vue";

export default {
  components: {
    MdSearchIcon,
  },
  data() {
    return {
      // debounce: null,
      searchResult: [],
    };
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (event.target.value.length > 2) {
          this.fetchSearch(event.target.value);
        }
      }, 500);
    },
    async fetchSearch(term) {
      try {
        const response = await this.$http.get(`/search/multi?query=${term}`);
        this.searchResult = response.data.results;
        console.log(this.searchResult);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <div class="relative z-[50]">
    <div class="relative flex items-center">
      <input
        class="w-full pr-10 pl-4 py-2 rounded-full border border-gray-300 outline-none sm:w-[300px] focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-all duration-200"
        type="text"
        placeholder="Search TV Series, Movies and more..."
        @input="debounceSearch"
      />
      <div class="absolute right-3 flex items-center">
        <!-- <div
          class="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"
        ></div> -->
        <MdSearchIcon class="h-5 w-5 text-gray-500" />
      </div>
    </div>

    <!-- Results dropdown menu -->
    <div
      v-if="searchResult.length > 0"
      class="absolute w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 z-[999]"
    >
      <div class="max-h-[400px] overflow-y-auto">
        <div
          v-for="movie in searchResult"
          :key="movie.id"
          class="p-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150 flex items-center gap-3"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie?.poster_path}`"
            :alt="movie.title"
            class="w-12 h-16 object-cover rounded"
          />
          <div class="flex-1">
            <div class="flex justify-between items-start">
              <span class="font-medium text-gray-800">{{ movie.title }}</span>
              <span class="text-sm text-gray-500 ml-2">{{
                movie.release_date
              }}</span>
            </div>
            <span class="text-sm text-gray-500 capitalize block">{{
              movie.media_type
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
