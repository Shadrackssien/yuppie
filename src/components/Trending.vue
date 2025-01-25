<script>
import TrendingCard from "./Cards/TrendingCard.vue";


export default {
  components: {
    TrendingCard,
  },
  data() {
    return {
      movie: [],
    };
  },
  async mounted() {
    
  },
};
</script>

<!-- Add time and rating -->

<template>
  <div class="space-y-10">
    <div class="flex flex-row justify-between">
      <h1 class="text-3xl font-bold">Trending</h1>
      <button class="font-bold">
        <p>View all</p>
        <!-- Add Arrow sign -->
      </button>
    </div>
    <div class="grid grid-cols-3 gap-12 mx-auto">
      <div v-for="(item, index) in movie" :key="index">
        <TrendingCard
          :title="item.title"
          :image="item.image"
          :genre="item.genre"
        />
      </div>
    </div>
  </div>
</template>
