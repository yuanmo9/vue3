<template>
    <div class="user-page">
      <h2>个人中心</h2>
      <form @submit.prevent="submitForm">
        <label for="nickname">新昵称：</label>
        <input type="text" id="nickname" v-model="newNickname" required>
        <label for="password">新密码：</label>
        <input type="password" id="password" v-model="newPassword" required>
        <button type="submit">保存更改</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newNickname: '', // 新昵称
        newPassword: '', // 新密码
      };
    },
    methods: {
      submitForm() {
        // 模拟发送请求更新用户信息，实际开发中需要通过接口发送请求
        console.log('新昵称:', this.newNickname);
        console.log('新密码:', this.newPassword);
        
        // 清空输入框
        this.newNickname = '';
        this.newPassword = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .user-page {
    padding: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  