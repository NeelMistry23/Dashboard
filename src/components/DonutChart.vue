<template>
  <q-card>
    <q-card-section class="text-h6">Donut Chart</q-card-section>
    <q-card-section>
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
      backgroundColor: ['#10B981', '#F59E0B', '#EF4444']
    }
  ]
}

const options = {
  responsive: true,
  plugins: { legend: { position: 'bottom' } }
}
</script>
