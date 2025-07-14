<template>
  <q-card class="donut-chart-card" style="width:100%">
    <q-card-section class="chart-header">
      <q-icon name="pie_chart" class="q-mr-sm" color="primary" />
      <div class="text-h6">Task Breakdown</div>
    </q-card-section>

    <q-separator />

    <q-card-section class="chart-wrapper">
      <Doughnut :data="data" :options="options" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['Completed', 'Pending', 'Failed'],
  datasets: [
    {
      label: 'Tasks',
      data: [55, 25, 20],
      backgroundColor: ['#10B981', '#F59E0B', '#EF4444'], // Green, Yellow, Red
      hoverOffset: 10,
      borderWidth: 2,
      borderColor: '#fff'
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#374151', // Slate-700
        font: {
          size: 13,
          weight: 'bold'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.donut-chart-card {
  max-width: 480px;
  margin: 2rem auto;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  background: #ffffff;
  color: #1f2937; // gray-800

  .chart-header {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .chart-wrapper {
    position: relative;
    height: 300px;
    width: 100%;
  }

  @media (max-width: 600px) {
    margin: 1rem;
    .chart-wrapper {
      height: 250px;
    }
  }
}
</style>

