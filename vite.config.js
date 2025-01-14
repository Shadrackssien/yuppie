import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import envCompatible from "vite-plugin-env-compatible";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    envCompatible({
      include: ["VUE_APP_RAPID_API_KEY"],
    }),
  ],
});
