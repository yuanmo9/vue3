<template>
  <div id="app">
    <!-- 使用路由渲染页面内容 -->
    <router-view></router-view>
 

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
 
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
