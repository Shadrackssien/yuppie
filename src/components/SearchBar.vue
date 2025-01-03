<script>
import MdSearchIcon from "vue-ionicons/dist/md-search.vue";

export default {
  components: {
    MdSearchIcon,
  },
};
</script>

<template>
  <div class="relative flex items-center">
    <input
      class="pr-6 pl-2 py-1 rounded-full outline-none sm:w-[250px]"
      type="text"
      placeholder="Search TV Series, Movies and more..."
    />
    <button class="absolute w-max h-max top-0 right-3 py-2 outline-none">
      <MdSearchIcon />
    </button>
  </div>
</template>
