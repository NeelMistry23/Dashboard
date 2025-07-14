<template>
  <q-card class="line-chart-card" style="width:100%">
    <q-card-section class="chart-header">
      <q-icon name="show_chart" class="q-mr-sm" color="primary" />
      <div class="text-h6">Monthly Revenue</div>
    </q-card-section>

    <q-separator />

    <q-card-section class="chart-wrapper">
      <Line :data="data" :options="options" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Revenue',
      data: [12, 19, 3, 5, 2],
      borderColor: '#4f46e5', // Indigo
      backgroundColor: 'rgba(99, 102, 241, 0.3)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#4f46e5',
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
        color: '#374151', // Slate-700
        font: {
          size: 13,
          weight: 'bold'
        }
      }
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#4f46e5',
      titleColor: '#fff',
      bodyColor: '#fff'
    }
  },
  scales: {
    x: {
      ticks: { color: '#6b7280' }, // gray-500
      grid: { display: false }
    },
    y: {
      beginAtZero: true,
      ticks: { color: '#6b7280' },
      grid: { color: '#e5e7eb' } // gray-200
    }
  }
}
</script>

<style scoped lang="scss">
.line-chart-card {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  font-family: "Segoe UI", sans-serif;

  .chart-header {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .chart-wrapper {
    position: relative;
    width: 100%;
    height: 320px;
  }

  @media (max-width: 600px) {
    margin: 1rem;
    .chart-wrapper {
      height: 250px;
    }
  }
}
</style>

