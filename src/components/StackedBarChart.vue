<template>
  <q-card>
    <q-card-section class="text-h6">Monthly Sales Breakdown</q-card-section>
    <q-card-section>
      <v-chart :option="option" autoresize style="height: 400px" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'

// Import ECharts core and required modules
import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components'

// Register necessary components
echarts.use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
])

const option = ref({
  title: {
    text: 'Monthly Sales Breakdown',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    bottom: 0,
    data: ['Online Sales', 'In-Store Sales']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Online Sales',
      type: 'bar',
      stack: 'sales',
      emphasis: {
        focus: 'series'
      },
      data: [320, 302, 301, 334, 390, 330]
    },
    {
      name: 'In-Store Sales',
      type: 'bar',
      stack: 'sales',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230]
    }
  ]
})
</script>
