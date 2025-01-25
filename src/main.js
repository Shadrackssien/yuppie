import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import api from "./services/api";

const app = createApp(App);

app.config.globalProperties.$http = api;

app.use(router);

app.mount("#app");
