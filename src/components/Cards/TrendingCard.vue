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
    category: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="flex flex-col">
    <img class="" :src="img" :alt="title" />
    <div class="flex items-center justify-between space-x-6 mt-2">
      <p class="text-xl font-semibold">{{ title }}</p>
      <div class="flex flex-row pl-2 space-x-2">
        <p class="button1 p-2">{{ category }}</p>
        <p class="button1 p-2">{{ category }}</p>
        <p class="button1 p-2">{{ category }}</p>
      </div>
    </div>
  </div>
</template>
