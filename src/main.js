import { createApp } from "vue";
import App from "./App.vue";
import router from "./assets/router";
import "./assets/layouts/index.scss";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
