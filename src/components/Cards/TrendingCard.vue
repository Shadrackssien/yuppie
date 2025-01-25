<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="flex flex-col">
    <img class="" :src="image" :alt="title" />
    <div class="flex items-center justify-between space-x-6 mt-2">
      <p class="text-xl font-semibold">{{ title }}</p>
      <div
        v-for="genre in genre"
        :key="genre"
        class="flex flex-row pl-2 space-x-2"
      >
        <p class="button1 p-2">{{ genre }}</p>
        <p class="button1 p-2">{{ genre }}</p>
        <p class="button1 p-2">{{ genre }}</p>
      </div>
    </div>
  </div>
</template>
