<template>
  <q-card class="bar-chart-card" style="width:100%">
    <q-card-section class="chart-header">
      <q-icon name="bar_chart" class="q-mr-sm" color="primary" />
      <div class="text-h6">Monthly Sales</div>
    </q-card-section>

    <q-separator />

    <q-card-section class="chart-body">
      <Bar :data="data" :options="options" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Sales',
      data: [40, 55, 65, 59],
      backgroundColor: '#3B82F6', // blue-500
      borderRadius: 8,
      barThickness: 35
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
        color: '#374151', // slate-700
        font: {
          size: 13,
          weight: 'bold'
        }
      }
    },
    tooltip: {
      backgroundColor: '#3B82F6',
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
.bar-chart-card {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  font-family: "Segoe UI", sans-serif;

  .chart-header {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .chart-body {
    position: relative;
    height: 320px;
    width: 100%;
  }

  @media (max-width: 600px) {
    margin: 1rem;
    .chart-body {
      height: 260px;
    }
  }
}
</style>

