import { createRouter, createWebHistory } from 'vue-router';


import HomePage from '@/pages/HomePage.vue';
import AboutPage from '@/pages/AboutPage.vue';


const routes = [
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
];

const router = new createRouter({
    history: createWebHistory(),
    routes
  });

export default router;
