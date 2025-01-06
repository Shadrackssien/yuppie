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
    date: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="flex flex-row mt-8 space-x-8">
    <img class="w-20 h-32" :src="img" :alt="title" />
    <div class="flex flex-col justify-center">
      <p>{{ title }}</p>
      <p>Series/S {{ season }}/EP {{ episode }}</p>
      <p>{{ date }}</p>
    </div>
  </div>
</template>
