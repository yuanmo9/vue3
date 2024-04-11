<template>
  <div class="home-page">
    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 欢迎标题 -->
      <h1>欢迎来到旅途网站</h1>
      <!-- 推荐目的地 -->
      <div class="destination-section">
        <h2>今日推荐</h2>
        <div class="destination-list">
          <!-- 通过循环渲染不同的目的地 -->
          <div v-for="destination in featuredDestinations" :key="destination.id" class="destination">
            <img :src="destination.imagePath" alt="Destination Image">
            <h3>{{ destination.name }}</h3>
            <p>{{ destination.description }}</p>
          </div>
        </div>
      </div>
      <!-- 热门行程 -->
      <div class="popular-tours-section">
        <h2>热门城市</h2>
        <div class="popular-tours-list">
          <!-- 通过循环渲染不同的热门行程 -->
          <div v-for="tour in popularTours" :key="tour.id" class="tour">
            <img :src="tour.imagePath" alt="Tour Image">
            <h3>{{ tour.name }}</h3>
            <p>{{ tour.description }}</p>
            <p>Price: {{ tour.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 侧边栏 -->
   
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
      ],
      popularTours: [
        {
          id: 1,
          name: "巴黎城市之旅",
          description: "参观巴黎著名的地标。",
          price: "$200",
          imagePath: require('../assets/paris.jpg'), // 使用相对路径
        },
        {
          id: 2,
          name: "东京探险",
          description: "体验东京充满活力的文化。",
          price: "$250",
          imagePath: require('../assets/tokyo.jpg'), // 使用相对路径
        },
      ],
    };
  },
};
</script>

<style scoped>

.home-page {
  display: flex;
 
  
}

.main-content {
  
  flex: 1;
  padding: 20px;
  overflow: hidden;   /* //隐藏溢出内容 */
  
}

.destination-section,
.popular-tours-section {
  margin-bottom: 30px;
}

.destination-list,
.popular-tours-list {
  display: flex;
  flex-wrap: wrap;
}

.destination,
.tour {
  width: calc(50% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
}

.destination img,
.tour img {
  width: auto;
  height: 200px;
  object-fit: cover;
}

h1,
h2,
h3 {
  color: #333;
}

</style>