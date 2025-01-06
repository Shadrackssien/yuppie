<script>
import RecentlyUpdated from "../components/RecentlyUpdated.vue";
import Trending from "../components/Trending.vue";

export default {
  components: {
    RecentlyUpdated,
    Trending,
  },
};
</script>
<template>
  <div class="flex flex-col text-[#ffffff] mx-20 space-y-10 mb-12">
    <RecentlyUpdated />
    <Trending />
  </div>
</template>
