<!-- HomePage.vue -->
<template>
  <div class="home-page">
    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 欢迎标题 -->
      <h1>欢迎来到旅途网站</h1>
      <!-- 推荐目的地 -->
      <div class="destination-section">
        <h2>热门城市</h2>
        <div class="destination-list">
          <!-- 通过循环渲染不同的目的地 -->
          <div v-for="destination in paginatedDestinations" :key="destination.id" class="destination">
            <img :src="destination.imagePath" alt="目的地图片">
            <h3>{{ destination.name }}</h3>
            <p>{{ destination.description }}</p>
          </div>
        </div>
        <!-- 添加分页器 -->
        <el-pagination
          :current-page="currentPage"
          :page-size="pageSize"
          :total="featuredDestinations.length"
          @current-change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {
   
  },
  data() {
    return {
      // 模拟数据，您可以根据需要修改
      featuredDestinations: [
        {
          id: 1,
          name: "hongkong",
          description: "探索这座充满爱与浪漫的城市。",
          imagePath: require('../assets/hongkong.jpg'), // 使用相对路径
        },
        {
          id: 2,
          name: "meizhou",
          description: "发现东京繁华的街道。",
          imagePath: require('../assets/meizhou.jpg'), // 使用相对路径
        },
        {
          id: 3,
          name: "meizhou",
          description: "发现东京繁华的街道。",
          imagePath: require('../assets/meizhou.jpg'), // 使用相对路径
        },
        {
          id: 4,
          name: "meizhou",
          description: "发现东京繁华的街道。",
          imagePath: require('../assets/meizhou.jpg'), // 使用相对路径
        },
        {
          id: 5,
          name: "meizhou",
          description: "发现东京繁华的街道。",
          imagePath: require('../assets/meizhou.jpg'), // 使用相对路径
        },
        {
          id: 7,
          name: "meizhou",
          description: "发现东京繁华的街道。",
          imagePath: require('../assets/meizhou.jpg'), // 使用相对路径
        },
        {
          id: 8,
          name: "meizhou",
          description: "发现东京繁华的街道。",
          imagePath: require('../assets/meizhou.jpg'), // 使用相对路径
        },
        {
          id: 9,
          name: "meizhou",
          description: "发现东京繁华的街道。",
          imagePath: require('../assets/meizhou.jpg'), // 使用相对路径
        },
        {
          id: 10,
          name: "meizhou",
          description: "发现东京繁华的街道。",
          imagePath: require('../assets/meizhou.jpg'), // 使用相对路径
        },
        {
          id: 11,
          name: "meizhou",
          description: "发现东京繁华的街道。",
          imagePath: require('../assets/meizhou.jpg'), // 使用相对路径
        },
        {
          id: 12,
          name: "meizhou",
          description: "发现东京繁华的街道。",
          imagePath: require('../assets/meizhou.jpg'), // 使用相对路径
        },
     
        
      ],
 
      currentPage: 1,
      pageSize: 4, // 根据需要调整此值
    };
  },
  computed: {
    paginatedDestinations() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.featuredDestinations.slice(startIndex, endIndex);
    },
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>


<style scoped>
/* 主页样式 */

.home-page {
  display: flex; /* 使用 Flex 布局 */
  background-image: url('@/assets/B.jpg'); /* 设置背景图片 */
  background-size: cover; /* 背景图片铺满整个容器 */
  background-position: center; /* 背景图片居中 */
  position: relative; /* 设置相对定位 */
}

.main-content {
  flex: 1; /* 主要内容区域占满剩余空间 */
  padding: 20px; /* 设置内边距 */
  overflow: hidden; /* 隐藏溢出内容 */
  background-color: rgba(195, 192, 192, 0.5); /* 设置背景透明度 */
  height: calc(100vh - 20px); /* 设置内容区域高度为视窗高度减去页面上下边距 */
}

.destination-list {
  display: flex; /* 使用 Flex 布局 */
  flex-wrap: wrap; /* 设置换行 */
}

.destination,
.tour {
  width: calc(50% - 20px); /* 每个目的地或热门行程占一半宽度 */
  margin-right: 20px; /* 设置右边距 */
  margin-bottom: 20px; /* 设置下边距 */
}

.destination img,
.tour img {
  width: 200px; /* 设置图片宽度自适应 */
  height: 150px; /* 设置图片高度 */
  object-fit: cover; /* 设置图片适应容器并保持宽高比 */
}


h2
 {
  color: #498357; /* 设置标题文字颜色 */
}
h1{
  color: #d1713e;
;
}
h3{
  color: aliceblue;
}

</style>