<template>
  <q-card>
    <q-card-section class="text-h6">Bar Chart</q-card-section>
    <q-card-section>
      <Bar :data="data" :options="options" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Sales',
      data: [40, 55, 65, 59],
      backgroundColor: '#3B82F6'
    }
  ]
}

const options = {
  responsive: true,
  plugins: { legend: { position: 'top' } }
}
</script>
