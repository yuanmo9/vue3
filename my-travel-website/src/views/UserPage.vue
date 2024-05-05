<template>
  <div class="user-page">
    <h2>个人中心</h2>
    
    <form @submit.prevent="submitForm">
      <div class="edit">
        <label for="nickname">新昵称：</label>
        <input type="text" id="nickname" v-model="newNickname" required>
        <label for="password">新密码：</label>
        <input type="password" id="password" v-model="newPassword" required>
        <button type="submit">保存更改</button>
      </div>
    </form>

    <!-- 新增数据存放区域 -->
    <div class="destination-data">
      <h3>目的地数据存放区</h3>
      <el-table :data="destinationData" :style="{ border: '1px solid #ccc' }">
        <el-table-column prop="departure" label="出发地"></el-table-column>
        <el-table-column prop="destination" label="目的地"></el-table-column>
        <el-table-column prop="departureDate" label="出发日期"></el-table-column>
        <el-table-column prop="checkboxValues" label="选择项">
          <template v-slot="{ row }">
            <span v-for="(value, index) in row.checkboxValues" :key="index">{{ value }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { ElMessage } from 'element-plus';

export default {
  methods: {
    ...mapActions('visitor', ['updateUserInfo', 'updateDestinationData']),
    submitForm() {
      this.updateUserInfo({ newNickname: this.newNickname, newPassword: this.newPassword })
        .then(() => {
          ElMessage.success('保存成功');
          console.log('用户信息更新成功');
          this.newNickname = '';
          this.newPassword = '';
        })
        .catch(error => {
          ElMessage.error('保存失败');
          console.error('用户信息更新失败:', error);
        });
    }
  },
  computed: {
    ...mapGetters('visitor', ['getDestinationData']), // 新增获取目的地数据的计算属性
    destinationData() {
      return this.getDestinationData; // 获取目的地数据
    }
  }
};
</script>

<style scoped>
.user-page {
  padding: 20px;
}

.edit {
  margin-right: 65%;
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

.destination-data {
  margin-top: 20px;
}

.destination-data h3 {
  margin-bottom: 10px;
}
</style>
