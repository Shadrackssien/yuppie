<script>
import moviesCard from "./Cards/MoviesCard.vue";
import movies1 from "../assets/movies1.png";
import movies2 from "../assets/movies2.png";
import movies3 from "../assets/movies3.png";
import movies4 from "../assets/movies4.png";

export default {
  components: {
    moviesCard,
  },
  data() {
    return {
      movies: [
        {
          title: "Ghosted",
          img: movies1,
          time: "3:12:00",
        },
        {
          title: "John Wick",
          img: movies2,
          time: "3:12:00",
        },
        {
          title: "Guardians of the Galaxy",
          img: movies3,
          time: "3:12:00",
        },
        {
          title: "The Covenant",
          img: movies4,
          time: "3:12:00",
        },
        {
          title: "Ghosted",
          img: movies1,
          time: "3:12:00",
        },
        {
          title: "John Wick",
          img: movies2,
          time: "3:12:00",
        },
        {
          title: "Guardians of the Galaxy",
          img: movies3,
          time: "3:12:00",
        },
        {
          title: "The Covenant",
          img: movies4,
          time: "3:12:00",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="space-y-10">
    <div class="flex flex-row justify-between">
      <div class="flex flex-row space-x-4">
        <h1 class="text-3xl font-bold">Recommended</h1>
        <button class="button1 p-1">Movies</button>
        <div class="flex flex-row space-x-4 bg-black opacity-50">
          <button class="button2 p-1">Series</button>
          <button class="button2 p-1">Animation</button>
        </div>
      </div>
      <button class="font-bold">
        <p>View all</p>
        <!-- Add Arrow sign -->
      </button>
    </div>
    <div class="grid grid-cols-4 gap-8">
      <div v-for="(items, index) in movies" :key="index">
        <moviesCard :title="items.title" :img="items.img" :time="items.time" />
      </div>
    </div>
  </div>
</template>
