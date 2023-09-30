import { createApp } from 'vue';
import App from './App.vue';
import router from './assets/router';
import'./assets/layouts/index.scss'

createApp(App)
.use(router)
.mount('#app')
