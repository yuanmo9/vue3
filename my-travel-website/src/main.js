

import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';  
import store from './store'; // 引入 Vuex store

import * as ElementPlusIconsVue from '@element-plus/icons-vue'







const app = createApp(App);

app.use(ElementPlus);
app.use(router); 
app.use(store); // 使用 Vuex



// 全局导航守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.visitor.auth.isAuthenticated; // 获取当前用户的登录状态
  if (to.name !== 'Login' && !isAuthenticated) {
    // 如果用户未登录且试图访问非登录页面，则重定向到登录页面
    next({ name: 'Login' });
  } else {
    // 允许用户访问其他页面
    next();
  }
});

app.mount('#app');



for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

