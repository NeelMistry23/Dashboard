<template>
  <q-card>
    <q-card-section class="text-h6">User Conversion Funnel</q-card-section>
    <q-card-section>
      <v-chart :option="option" autoresize style="height: 400px" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import VChart from 'vue-echarts'

// ECharts core & components
import * as echarts from 'echarts/core'
import { FunnelChart } from 'echarts/charts'
import { TooltipComponent, TitleComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// Register components
echarts.use([
  FunnelChart,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  CanvasRenderer
])

const option = ref({
  title: {
    text: 'User Conversion Funnel',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}'
  },
  legend: {
    top: 'bottom',
    data: ['Visits', 'Signups', 'Product Views', 'Add to Cart', 'Purchase']
  },
  series: [
    {
      name: 'User Journey',
      type: 'funnel',
      left: '10%',
      top: 60,
      bottom: 60,
      width: '80%',
      min: 0,
      max: 1000,
      label: {
        show: true,
        position: 'inside'
      },
      data: [
        { value: 1000, name: 'Visits' },
        { value: 600, name: 'Signups' },
        { value: 400, name: 'Product Views' },
        { value: 200, name: 'Add to Cart' },
        { value: 100, name: 'Purchase' }
      ]
    }
  ]
})
</script>
