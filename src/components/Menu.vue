<script>
import menu from "../assets/menu.png";
export default {
  data() {
    return {
      menu,
    };
  },
};
</script>
<template>
  <div class="block lg:hidden">
    <img class="w-8 h-8" :src="menu" alt="menu" />
  </div>
</template>
