<script>
import RecentlyUpdated from "../components/RecentlyUpdated.vue";
import Trending from "../components/Trending.vue";
import NewReleaseMovies from "./NewReleaseMovies.vue";
import NewReleaseSeries from "./NewReleaseSeries.vue";
import Recommended from "./Recommended.vue";

export default {
  components: {
    RecentlyUpdated,
    Trending,
    NewReleaseMovies,
    NewReleaseSeries,
    Recommended,
  },
};
</script>
<template>
  <div class="flex flex-col text-[#ffffff] mx-20 space-y-10 mb-12">
    <RecentlyUpdated />
    <Trending />
    <NewReleaseMovies />
    <NewReleaseSeries />
    <Recommended />
  </div>
</template>
