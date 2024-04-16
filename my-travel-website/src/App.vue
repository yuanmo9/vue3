<template>
  <div id="app">
    <!-- 使用路由渲染页面内容 -->
    <router-view></router-view>
     <EyePage></EyePage>

  </div>
</template>

<script>
import EyePage from "./views/EyePage.vue";

export default {
  name: 'App',
  components: {
    EyePage,
  }
}
</script>

<style>
/* 这里可以添加全局样式 */
html, body {
  margin: 0;
  padding: 0;
}

</style>
