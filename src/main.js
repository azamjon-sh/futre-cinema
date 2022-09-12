import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/main.scss'
import axios from "axios";

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
