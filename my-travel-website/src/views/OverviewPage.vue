<template>
    <div>
      <div ref="chart" style="width: 600px; height: 400px;"></div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts';
  import { useStore } from 'vuex';
  
  export default {
    name: 'OverviewPage',
    setup() {
      const chart = ref(null);
      const store = useStore();
  
      onMounted(() => {
        // 获取存储中的 visitorData
        const visitorData = store.getters['visitor/getVisitorData'];
  
        // 初始化 ECharts
        const myChart = echarts.init(chart.value);
  
        // 绘制柱状图
        myChart.setOption({
          title: {
            text: '游客数量统计'
          },
          xAxis: {
            type: 'category',
            data: Object.keys(visitorData)
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: Object.values(visitorData),
            type: 'bar'
          }]
        });
      });
  
      return {
        chart
      };
    }
  };
  </script>
  
  <style>
  /* 样式 */
  </style>
  