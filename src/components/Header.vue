<script>
import play from "../assets/play.png";
import watch from "../assets/watch.png";
import calendar from "../assets/calendar.png";
import time from "../assets/time.png";
import star from "../assets/star.png";

export default {
  data() {
    return {
      play,
      watch,
      calendar,
      time,
      star,
    };
  },
};
</script>
<template>
  <div
    class="relative flex w-[100%] h-[700px] flex-col bg-[url('./assets/header.png')] bg-cover bg-center"
  >
    <!-- overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40 md:bg-opacity-20">
      <!-- watch now -->
      <div class="text-white flex items-center justify-center mt-64 space-x-8">
        <button class="button1 p-4 space-x-2">
          <p class="font-bold text-lg">Watch Now</p>
          <img class="w-6 h-6" :src="play" alt="play" />
        </button>
        <button class="button2 p-4 space-x-2">
          <p class="font-bold text-lg">Watch Later</p>
          <img class="w-6 h-6" :src="watch" alt="play" />
        </button>
      </div>

      <!-- Info -->
      <div class="flex flex-col space-y-6 mx-20 mt-16 text-white">
        <p class="font-bold text-3xl">Avatar: The Way of Water</p>
        <div class="flex flex-row space-x-2">
          <p
            class="text-black text-base font-bold h-max w-max py-1 px-2 bg-white rounded-full"
          >
            Action
          </p>
          <p
            class="text-black text-base font-bold h-max w-max py-1 px-2 bg-white rounded-full"
          >
            Adventure
          </p>
          <p
            class="text-black text-base font-bold h-max w-max py-1 px-2 bg-white rounded-full"
          >
            Science Fiction
          </p>
          <div class="flex flex-row items-center justify-center pl-2 space-x-6">
            <div class="flex items-center justify-center flex-row space-x-2">
              <img class="w-4 h-4" :src="calendar" alt="calendar" />
              <p>2022</p>
            </div>
            <div class="flex items-center justify-center flex-row space-x-2">
              <img class="w-4 h-4" :src="time" alt="calendar" />
              <p>3:12:00</p>
            </div>
            <div class="flex items-center justify-center flex-row space-x-2">
              <img class="w-4 h-4" :src="star" alt="calendar" />
              <p>8.5</p>
            </div>
          </div>
        </div>

        <p class="w-[550px]">
          Set more than a decade after the events of the first film, learn the
          story of the Sully family (Jake, Neytiri, and their kids), the trouble
          that follows them, the lengths they go to keep each other safe, the
          battles they fight to stay alive, and the tragedies they endure.
        </p>
      </div>
      <!-- sliding -->
      <div class="flex items-center justify-center mx-auto space-x-2 mt-20">
        <!-- current slide -->
        <div class="w-8 h-2 bg-primary rounded-full"></div>
        <!-- next slide -->
        <div class="w-4 h-4 bg-white rounded-full"></div>
        <div class="w-4 h-4 bg-white rounded-full"></div>
        <div class="w-4 h-4 bg-white rounded-full"></div>
        <div class="w-4 h-4 bg-white rounded-full"></div>
      </div>
    </div>
  </div>
</template>
