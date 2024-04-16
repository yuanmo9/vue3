<template>
  <div class="login-page">
    <el-card class="login-card">
      <!-- 登录页标题 -->
      <div class="card-header">旅游网站</div>
      <!-- 登录表单 -->
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名">
            <template #prepend>
              <el-button icon="User"></el-button>
            </template>
          </el-input>
          
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码">
            <template #prepend>
              <el-button icon="Lock"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { ElForm, ElFormItem, ElInput, ElButton, ElCard } from 'element-plus';

export default {
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElCard,
   
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 在这里执行登录逻辑，例如验证用户名密码，跳转页面等
          console.log('登录成功');
          // 假设登录成功后跳转到homePage
          this.$router.push('/homePage');
        } else {
          console.log('登录失败');
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
/* 登录页面样式 */

.login-page {
  background-image: url('@/assets/A.jpg'); /* 设置背景图片 */
  background-size: cover; /* 背景图片铺满整个容器 */
  display: flex; /* 使用 Flex 布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 设置页面高度为视窗高度 */
  background-position: center;
}

.login-card {
  width: 300px; /* 设置登录卡片宽度 */
  border-radius: 10px; /* 设置卡片圆角 */
  background-color: rgba(255, 255, 255, 0.7); /* 设置卡片背景透明度 */
}

.card-header {
  font-size: 20px; /* 设置标题字体大小 */
  font-weight: bold; /* 设置标题字体粗细 */
  text-align: center; /* 文字居中 */
  padding: 10px; /* 设置标题内边距 */
}

.login-form {
  padding: 20px; /* 设置表单内边距 */
}

.login-btn {
  width: 100%; /* 设置登录按钮宽度 */
}
</style>
