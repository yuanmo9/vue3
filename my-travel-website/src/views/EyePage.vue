<template>
  <div class="container" ref="container">
    <!-- 页面内容 -->
  </div>
</template>

<script>

export default {
  mounted() {
    // 监听鼠标移动事件
    document.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeUnmount() {
    // 在组件销毁之前移除鼠标移动事件监听器
    document.removeEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    handleMouseMove(event) {
      // 创建一个 div 元素作为流星
      const star = document.createElement('div');
      star.classList.add('star');

      // 设置流星的初始位置
      star.style.left = event.clientX + 'px';
      star.style.top = event.clientY + 'px';

      // 将流星添加到容器中
      this.$refs.container.appendChild(star);

      // 使用定时器在一段时间后移除流星
      setTimeout(() => {
        star.remove();
      }, 1000);
    }
  }
};
</script>

<style>
.star {
  position: fixed;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  pointer-events: none; /* 防止流星干扰用户交互 */
  z-index: 9999; /* 确保流星显示在其他元素上方 */
  animation: shooting-star 1s linear forwards; /* 流星动画 */
}

@keyframes shooting-star {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0; /* 流星消失 */
  }
}
</style>

