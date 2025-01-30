<script>
import Trending from "./Trending.vue";
import Popular from "../components/Popular.vue";
import NewReleaseMovies from "./NewReleaseMovies.vue";
import NewReleaseSeries from "./NewReleaseSeries.vue";
import Recommended from "./Recommended.vue";

export default {
  components: {
    Trending,
    Popular,
    NewReleaseMovies,
    NewReleaseSeries,
    Recommended,
  },
};
</script>
<template>
  <div class="flex flex-col text-[#ffffff] mx-20 space-y-10 mb-12">
    <Trending />
    <Popular />
    <NewReleaseMovies />
    <NewReleaseSeries />
    <Recommended />
  </div>
</template>
