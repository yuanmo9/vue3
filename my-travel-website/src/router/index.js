import { createRouter, createWebHistory } from 'vue-router'; 
import MainOut from '../views/MainOut.vue'; // 导入 Main.vue 组件
import UserPage from '../views/UserPage.vue';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import PublicPage from '../views/PublicPage.vue';
import ForumPage from '../views/ForumPage.vue';
import EyePage from '../views/EyePage.vue';


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  { 
    path: '/', 
    component: MainOut,
    redirect: '/homePage',
    children: [
      { path: '/userPage', component: UserPage },
      { path: '/homePage', component: HomePage },
      { path: '/login', component: LoginPage },
      { path: '/publicPage', component: PublicPage },
      { path: '/forumPage', component: ForumPage },
      { path: '/eyePage', component: EyePage },

    ] 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
