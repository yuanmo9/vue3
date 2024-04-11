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
      <el-sub-menu index="1"  @click="goToHomePage">
        <template #title>
          <el-icon><location /></el-icon>
          <span>首页</span>
        </template>
     
        <el-menu-item-group title="Group Two">
          
        </el-menu-item-group>
     
      </el-sub-menu>

      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>页面一</span>
      </el-menu-item>

      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span>页面二</span>
      </el-menu-item>

      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>页面三</span>
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
  width: 230px;
}

.sidebar > ul {
  height: 100%;
}
</style>
