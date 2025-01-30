<script>
import MdSearchIcon from "vue-ionicons/dist/md-search.vue";

export default {
  name: "SearchBar",
  components: {
    MdSearchIcon,
  },
  data() {
    return {
      searchResult: [],
      debounceTimeout: null,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    debounceSearch(event) {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }

      this.debounceTimeout = setTimeout(() => {
        this.fetchSearch(event.target.value);
      }, 800);
    },
    async fetchSearch(term) {
      if (!term.trim()) {
        this.searchResult = [];
        this.error = null;
        return;
      }

      this.isLoading = true;
      this.error = null;

      try {
        const response = await this.$http.get("/search/multi", {
          params: {
            query: term,
          },
        });
        this.searchResult = response.data.results;
        console.log(this.searchResult);
      } catch (error) {
        console.error("Search error:", error);
        this.error = "Failed to fetch search results. Please try again.";
        this.searchResult = [];
      } finally {
        this.isLoading = false;
      }
    },
  },
  beforeDestroy() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
  },
};
</script>

<template>
  <div class="relative">
    <div class="relative flex items-center">
      <input
        class="pr-6 pl-2 py-1 rounded-full outline-none sm:w-[250px] focus:ring-2 focus:ring-blue-300 transition-all"
        type="text"
        placeholder="Search TV Series, Movies and more..."
        @input="debounceSearch"
        aria-label="Search"
        :disabled="isLoading"
      />
      <button
        class="absolute w-max h-max top-0 right-3 py-2 outline-none focus:text-blue-500 transition-colors"
        aria-label="Submit search"
        :disabled="isLoading"
      >
        <MdSearchIcon />
      </button>
    </div>

    <!-- Error message -->
    <div v-if="error" class="absolute mt-1 text-sm text-red-500">
      {{ error }}
    </div>
  </div>
</template>
