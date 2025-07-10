<template>
  <q-card>
    <q-card-section class="text-h6">Line Chart</q-card-section>
    <q-card-section>
      <Line :data="data" :options="options" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend
} from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Revenue',
    data: [12, 19, 3, 5, 2],
    borderColor: '#6366F1',
    fill: false,
    tension: 0.3
  }]
}

const options = {
  responsive: true,
  plugins: { legend: { position: 'top' } }
}
</script>
