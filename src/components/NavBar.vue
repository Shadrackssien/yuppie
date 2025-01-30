<script>
import SearchBar from "./SearchBar.vue";
import Menu from "./Menu.vue";

export default {
  components: {
    SearchBar,
    Menu,
  },
};
</script>

<template>
  <div class="flex relative items-center justify-between w-full z-[40]">
    <!-- logo -->
    <div class="flex items-center my-4 mx-2 md:mx-8">
      <router-link to="/">
        <img
          class="w-24 md:w-32"
          src="../assets/logo.png"
          width="100"
          height="100"
          alt="Logo"
        />
      </router-link>
    </div>

    <!-- links -->
    <div class="hidden lg:flex">
      <ul class="text-[#ffffff] flex gap-4">
        <li><a href="">Home</a></li>
        <li><a href="">TV Series</a></li>
        <li><a href="">Movies</a></li>
        <li><a href="">Animation</a></li>
      </ul>
    </div>

    <!-- search and login -->
    <div class="flex items-center gap-2 md:gap-4 mx-2 md:mx-8">
      <!-- search bar -->
      <SearchBar />
      <button class="hidden md:block button2 px-2 md:px-4">Login</button>
      <button class="hidden lg:block button1 px-4">Sign Up</button>
      <!-- menu -->
      <Menu />
    </div>
  </div>
</template>
