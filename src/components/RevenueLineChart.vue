<template>
  <q-card class="q-mt-md">
    <q-card-section>
      <div class="text-h6">Revenue Chart</div>
    </q-card-section>
    <q-card-section>
      <Line :data="data" :options="options" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title, Tooltip, Legend, LineElement, PointElement,
  LinearScale, CategoryScale
} from 'chart.js'

ChartJS.register(
  Title, Tooltip, Legend, LineElement, PointElement,
  LinearScale, CategoryScale
)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [5, 15, 14, 36, 32, 32],
      borderColor: '#6366F1',
      backgroundColor: 'rgba(99, 102, 241, 0.3)',
      fill: true,
      tension: 0.4
    },
    {
      label: 'Expenses',
      data: [7, 11, 30, 18, 25, 13],
      borderColor: '#9CA3AF',
      backgroundColor: 'rgba(156, 163, 175, 0.3)',
      fill: true,
      tension: 0.4
    }
  ]
}

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: false }
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Income'
      }
    }
  }
}
</script>
