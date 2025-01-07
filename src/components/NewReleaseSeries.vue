<script>
import SeriesCard from "./Cards/SeriesCard.vue";
import series1 from "../assets/series1.png";
import series2 from "../assets/series2.png";
import series3 from "../assets/series3.png";
import series4 from "../assets/series4.png";

export default {
  components: {
    SeriesCard,
  },
  data() {
    return {
      movies: [
        {
          title: "Silo",
          img: series1,
          season: "1",
          episode: "4",
        },
        {
          title: "Black Knight",
          img: series2,
          season: "4",
          episode: "10",
        },
        {
          title: "Drops of God",
          img: series3,
          season: "3",
          episode: "6",
        },
        {
          title: "The Night Agent",
          img: series4,
          season: "2",
          episode: "1",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="space-y-10">
    <div class="flex flex-row justify-between">
      <h1 class="text-3xl font-bold">New Release - Series</h1>
      <button class="font-bold">
        <p>View all</p>
        <!-- Add Arrow sign -->
      </button>
    </div>
    <div class="grid grid-cols-4 gap-8">
      <div v-for="(items, index) in movies" :key="index">
        <SeriesCard
          :title="items.title"
          :img="items.img"
          :season="items.season"
          :episode="items.episode"
        />
      </div>
    </div>
  </div>
</template>
