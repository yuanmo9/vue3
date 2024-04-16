<template>
  <div class="public-page">
    <div class="content-container">
      <!-- 走马灯 -->
      <div class="carousel-container">
        <el-carousel :indicator-position="'outside'" height="400px">
          <el-carousel-item v-for="(image, index) in carouselImages" :key="index">
            <img :src="image" alt="轮播图片">
          </el-carousel-item>
        </el-carousel>
      </div>
      
      <!-- 表单 -->
      <el-card class="form-container">
        <el-form label-width="100px" class="form">
          <el-form-item label="出发地">
            <el-input v-model="departure" placeholder="请输入出发地"></el-input>
          </el-form-item>
          <el-form-item label="目的地">
            <el-input v-model="destination" placeholder="请输入目的地"></el-input>
          </el-form-item>
          <el-form-item label="出发日期">
            <el-date-picker v-model="departureDate" type="date" placeholder="选择出发日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="选择项">
            <el-checkbox-group v-model="checkboxValues">
              <el-checkbox label="自驾游"></el-checkbox>
              <el-checkbox label="组团"></el-checkbox>
              <el-checkbox label="成人"></el-checkbox>
              <el-checkbox label="男生"></el-checkbox>
              <el-checkbox label="女生"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="remark" placeholder="请输入备注信息"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';

export default {
  name: 'PublicPage',
  data() {
    return {
      carouselImages: [
        require('@/assets/tokyo.jpg'),
        require('@/assets/meizhou.jpg'),
        require('@/assets/hongkong.jpg'),
        require('@/assets/paris.jpg')
      ],
      departure: '', // 出发地
      destination: '', // 目的地
      departureDate: '', // 出发日期
      checkboxValues: [], // 复选框选择项
      remark: '' // 备注
    };
  },
  methods: {
    handleSubmit() {
      // 这里模拟提交过程，实际应用中需要发送数据给后端
      // 假设提交成功后显示成功消息提示
      ElMessage.success('提交成功');
    }
  }
};
</script>

<style scoped>
.public-page {
  /* 确保组件大小占满除侧边栏和页眉外的浏览器页面 */
  width: calc(100vw - 200px); /* 减去侧边栏的宽度 */
  height: calc(100vh - 64px); /* 减去页眉的高度 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/B.jpg'); /* 设置背景图片 */
  background-size: cover; /* 背景图片铺满整个容器 */
  background-position: center; /* 背景图片居中 */
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 居中 */
  width: 900px;
}

.carousel-container {
  width: 500px;
}

.form-container {
  width: 400px;
}
.carousel-container img {
  width: 100%; /* 图片宽度自适应原本图片的宽度 */
  height: 100%; /* 图片高度自适应走马灯容器高度 */
}
</style>
