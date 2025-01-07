<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    episode: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="relative flex flex-col">
    <p class="absolute left-2 top-2 button1 px-1">Ep {{ episode }}</p>
    <img :src="img" :alt="title" />
    <div class="flex items-center justify-between space-x-6 mt-2">
      <p class="text-xl font-semibold">{{ title }}</p>
      <div class="flex flex-row pl-2 space-x-2">
        <p class="button1 p-1">HD</p>
        <div class="button2 p-1 space-x-1">
          <p>Season {{ season }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
