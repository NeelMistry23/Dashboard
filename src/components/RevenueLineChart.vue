<template>
  <q-card class="q-mt-md" style="width:100%">
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
  LinearScale, CategoryScale, Filler
} from 'chart.js'

ChartJS.register(
  Title, Tooltip, Legend, LineElement, PointElement,
  LinearScale, CategoryScale, Filler
)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [5, 15, 14, 36, 32, 32],
      borderColor: '#6366F1',
      backgroundColor: (ctx) => {
        const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300)
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.4)')
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)')
        return gradient
      },
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7
    },
    {
      label: 'Expenses',
      data: [7, 11, 30, 18, 25, 13],
      borderColor: '#9CA3AF',
      backgroundColor: (ctx) => {
        const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300)
        gradient.addColorStop(0, 'rgba(156, 163, 175, 0.3)')
        gradient.addColorStop(1, 'rgba(156, 163, 175, 0)')
        return gradient
      },
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#374151',
        font: { size: 14, weight: '600' }
      }
    },
    tooltip: {
      backgroundColor: '#1F2937',
      titleFont: { size: 14 },
      bodyFont: { size: 13 },
      cornerRadius: 6,
      padding: 10
    }
  },
  scales: {
    x: {
      ticks: { color: '#6B7280', font: { size: 13 } },
      grid: { display: false }
    },
    y: {
      beginAtZero: true,
      ticks: { color: '#6B7280', font: { size: 13 } },
      grid: { color: '#E5E7EB' },
      title: {
        display: true,
        text: 'Amount (in K)',
        color: '#4B5563',
        font: { size: 14, weight: 'bold' }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.chart-container {
  position: relative;
  height: 320px;
  width: 100%;
}

.q-card {
  transition: all 0.3s ease;
}

.q-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
</style>

