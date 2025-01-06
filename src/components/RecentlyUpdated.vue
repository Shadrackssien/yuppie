<script>
import RecentlyUpdatedCard from "./Cards/RecentlyUpdatedCard.vue";
import series1 from "../assets/series1.png";
import series2 from "../assets/series2.png";
import series3 from "../assets/series3.png";
import series4 from "../assets/series4.png";
import arrow from "../assets/arrow.png";

export default {
  components: {
    RecentlyUpdatedCard,
  },
  data() {
    return {
      arrow,
      series: [
        {
          title: "Silo",
          img: series1,
          season: "2",
          episode: "3",
          date: "11/05/23",
        },
        {
          title: "Black Knight",
          img: series2,
          season: "1",
          episode: "8",
          date: "11/05/23",
        },
        {
          title: "Drops of God",
          img: series3,
          season: "2",
          episode: "4",
          date: "11/05/23",
        },
        {
          title: "The Night Agent",
          img: series4,
          season: "1",
          episode: "4",
          date: "11/05/23",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="flex flex-col mt-12">
    <h1 class="text-3xl font-bold">Recently Updated</h1>
    <div class="flex flex-row justify-between">
      <div v-for="(item, index) in series" :key="index">
        <RecentlyUpdatedCard
          :title="item.title"
          :img="item.img"
          :season="item.season"
          :episode="item.episode"
          :date="item.date"
        />
      </div>
      <div
        class="flex items-center justify-center w-16 h-16 cursor-pointer mt-16 rounded-full bg-[#ffffff]"
      >
        <button class="">
          <img class="w-8 h-8" :src="arrow" alt="arrow" />
        </button>
      </div>
    </div>
  </div>
</template>
