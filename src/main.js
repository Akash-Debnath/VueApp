import { createApp } from 'vue'; 
import App from './App.vue';
import router from './router';
import axios from 'axios'




// axios.defaults.baseURL = 'https://admin.aanbieding24.nl/api/lowest-price-products/5';


const app = createApp(App);
app.use(router); 
// app.use(axios); 
app.config.globalProperties.$axios = axios;
app.mount('#app'); 
