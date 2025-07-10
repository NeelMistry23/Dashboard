<template>
  <q-page class="q-pa-md">
     <div class="col-md-6 col-xs-12">
        <FunnelChart  class="q-mb-md"/>

        <TimeSeriesChart class="q-mb-md" />

        <StackedBarChart/>
      </div>
    
  </q-page>
</template>

<script setup>
import FunnelChart from 'components/FunnelChart.vue'
import TimeSeriesChart from 'components/TimeSeriesChart.vue'
import StackedBarChart from 'src/components/StackedBarChart.vue';
</script>

<style scoped lang="scss">
.q-page {
  background-color: #f4f6f9; // light dashboard background
  min-height: 100vh;
  display: flex;
  justify-content: center;

  .col-md-6 {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    max-width: 900px;
    padding: 16px;

    // Apply to all chart components
    > * {
      background-color: #ffffff;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      }
    }
  }
}

// Responsive behavior
@media (max-width: 768px) {
  .col-md-6 {
    padding: 8px;

    > * {
      padding: 16px;
    }
  }
}
</style>

