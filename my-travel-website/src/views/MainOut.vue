<template>
    <div class="common-layout">
      <el-container >
        <el-header>Header
          <CommonHeader></CommonHeader>
        </el-header>
        <el-container>
          <el-aside width="200px" >
            Aside
     <CommonAside></CommonAside>
    
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



     .el-header{
      background: #324157; 
      height: auto  
     }
  
  </style>
  