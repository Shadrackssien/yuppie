<script>
import timeIcon from "../../assets/time.png";

export default {
  data() {
    return {
      timeIcon,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="flex flex-col">
    <img :src="img" :alt="title" />
    <div class="flex items-center justify-between space-x-6 mt-2">
      <p class="text-xl font-semibold">{{ title }}</p>
      <div class="flex flex-row pl-2 space-x-2">
        <p class="button1 p-1">HD</p>
        <div class="button2 p-1 space-x-1">
          <img :src="timeIcon" alt="time" />
          <p>{{ time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
