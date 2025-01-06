<script>
import TrendingCard from "./Cards/TrendingCard.vue";
import trending1 from "../assets/trending1.png";
import trending2 from "../assets/trending2.png";
import trending3 from "../assets/trending3.png";

export default {
  components: {
    TrendingCard,
  },
  data() {
    return {
      movies: [
        {
          title: "Medellin",
          img: trending1,
          category: "Action",
        },
        {
          title: "Fast X",
          img: trending2,
          category: "Crime",
        },
        {
          title: "The Black Demon",
          img: trending3,
          category: "Thriller",
        },
      ],
    };
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
      <div v-for="(item, index) in movies" :key="index">
        <TrendingCard
          :title="item.title"
          :img="item.img"
          :category="item.category"
        />
      </div>
    </div>
  </div>
</template>
