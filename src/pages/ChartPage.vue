<template>
  <q-page class="q-pa-md">
     <div class="row q-col-gutter-md">
      
      <div class="col-md-6 col-xs-12">
        <BarChart class="q-mb-md" />
        <LineChart />
      </div>
      

      <!-- Donut Chart -->
      <div class="col-md-6 col-xs-12">
        <DonutChart />
      </div>

      
      <div class="col-md-6 col-xs-12 q-mt-md">
        
      </div>

    </div>
  </q-page>
</template>

<script setup>
import BarChart from 'components/BarChart.vue'
import DonutChart from 'components/DonutChart.vue'
import LineChart from 'src/components/LineChart.vue'
</script>

<style scoped lang="scss">
.q-page {
  background-color: #f4f6f9;
  min-height: 100vh;
  padding: 24px;

  .row {
    justify-content: center;
  }

  .col-md-6 {
    display: flex;
    flex-direction: column;
    gap: 24px;

    // Chart Container
    > * {
      background-color: #ffffff;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      }
    }
  }
}

// Mobile Optimization
@media (max-width: 768px) {
  .col-md-6 {
    padding: 0 8px;

    > * {
      padding: 16px;
    }
  }
}
</style>



