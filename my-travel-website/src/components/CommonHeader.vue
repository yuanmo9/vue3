<template>
  <div class="header">
    <!-- 左侧Logo -->
    <div class="header-logo">Logo</div>

    <!-- 右侧用户信息及下拉菜单 -->
    <div class="header-user-con">
      <!-- 用户头像 -->
      <el-avatar class="user-avatar" :size="50" :src="require('@/assets/R.jpg')" @click="goToUserProfile" />

      <!-- "管理"按钮 -->
      <el-dropdown class="user-management" ref="dropdown" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          管理
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="user">个人中心</el-dropdown-item>
            <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  methods: {
    // 点击头像跳转个人中心
    goToUserProfile() {
      this.$router.push('/userPage');
    },
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command === 'logout') {
        localStorage.removeItem('ms_username');
        this.$router.push('/login');
      } else if (command === 'user') {
        this.$router.push('/userPage');
      }
    },
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>

<style scoped>
/* 这里可以添加组件的样式 */

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

}

.user-avatar {
  cursor: pointer;
}

.user-management {
  margin-left: 20px;
}
</style>
