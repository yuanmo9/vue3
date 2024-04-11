<template>
  <div class="login-wrap">
    <el-card class="login-card">
      <div slot="header" class="card-header">旅游网站</div>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="login-form">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton, ElCard } from 'element-plus';

export default {
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElCard
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
.login-wrap {
  background-image: url('@/assets/R.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {
  width: 300px;
}

.card-header {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
}

.login-form {
  padding: 20px;
}

.login-btn {
  width: 100%;
}
</style>
