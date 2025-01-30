<script>
export default {
  name: "TrendingCard",
  props: {
    serie: {
      type: Object,
      required: true,
      validator: function (prop) {
        return ["title", "season", "episode", "date", "poster_path"].every(
          (key) => key in prop
        );
      },
    },
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString();
    },
  },
};
</script>

<template>
  <div
    class="flex flex-row mt-8 space-x-8 transform hover:scale-105 transition-transform duration-200"
  >
    <RouterLink v-if="serie" :to="{ name: 'serie', params: { id: serie.id } }">
      <img
        class="w-20 h-32 rounded-lg object-cover shadow-md"
        :src="`https://image.tmdb.org/t/p/w200${serie.poster_path}`"
        :alt="serie.title"
      />
    </RouterLink>

    <div class="flex flex-col justify-center space-y-2">
      <h2 class="font-semibold text-lg">{{ serie.title }}</h2>
      <p class="text-gray-600">
        Season {{ serie.season }} • Episode {{ serie.episode }}
      </p>
      <p class="text-gray-500 text-sm">{{ formatDate(serie.date) }}</p>
    </div>
  </div>
</template>
