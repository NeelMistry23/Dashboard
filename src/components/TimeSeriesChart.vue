<template>
  <q-card>
    <q-card-section class="text-h6">Daily Active Users</q-card-section>
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
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components'

// Register components
echarts.use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
])

// Chart Option
const option = ref({
  title: {
    text: 'Daily Active Users',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Users',
      type: 'line',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      areaStyle: {}, // Fill below the line
      smooth: true,
      lineStyle: {
        width: 3
      }
    }
  ]
})
</script>
