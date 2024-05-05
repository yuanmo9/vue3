<template>
  <div class="sidebar">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#34435a"
      class="sidebar-el-menu"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1"  @click="goToHomePage">
        <template #title>
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </template>
     
     
      </el-menu-item>

      <el-menu-item index="2"  @click="goToPublicPage">
        <el-icon><Ship/></el-icon>
        <span>目的地</span>
      </el-menu-item>

      <el-menu-item index="3" @click="goToForumPage">
        <el-icon><ChatLineSquare /></el-icon>
        <span>论坛 </span>
      </el-menu-item>

      <el-menu-item index="4" @click="goToUserPage">
        <el-icon><User /></el-icon>
        <span>个人中心</span>
      </el-menu-item>
      <el-menu-item index="5" @click="goToEyePage" >
        <el-icon><Monitor/></el-icon>
        <span>数据一览</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    // 点击首页跳转到 HomePage 页面
    goToHomePage() {
      this.$router.push('/homePage');
    },
    goToPublicPage(){
      this.$router.push('/publicPage')
    },
    goToForumPage(){
      this.$router.push('/forumPage')
    },
    goToUserPage(){
        this.$router.push('/userPage')
    },
    goToEyePage(){
      this.$router.push('/overviewPage')
    }
  }
};
</script>

<style scoped>
/* 这里可以添加组件的样式 */
.sidebar {
  display: block;
  position: fixed;
  left: 0;
  top: 0px;
  bottom: 0;
  overflow-y: scroll;

}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 200px;
}

.sidebar > ul {
  height: 100%;
}
</style>
