import { createRouter, createWebHistory } from 'vue-router'; 
import MainOut from '../views/MainOut.vue'; // 导入 Main.vue 组件
import UserPage from '../views/UserPage.vue';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';

const routes = [
  { 
    path: '/', 
    component: MainOut,
    redirect: '/homePage',
    children: [
      { path: '/userPage', component: UserPage },
      { path: '/homePage', component: HomePage },
      { path: '/login', component: LoginPage },
    ] 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
