<!-- MainOut.vue -->
<template>
  <div class="common-layout">
    <el-container >
      <el-header>Header
        <CommonHeader></CommonHeader>
      </el-header>
      <el-container>
        <el-aside width="200px" >
          Aside
          <CommonAside></CommonAside> <!-- 侧边栏 -->
      </el-aside>
        <el-main class="content">
          <router-view></router-view> <!-- 渲染子路由 -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";

export default {
  name: 'MainOut',
 components:{
  CommonAside,
  CommonHeader,
 }
}
</script>

<style scoped>
/* 主要布局样式 */

.el-header{
  background: #aca397; /* 设置头部背景颜色 */
  height: auto;  /* 设置头部高度自适应 */
  
 }

 .el-main{
  padding: 0%;

 }

</style>
