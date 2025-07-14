<template>
  <q-page class="q-pa-md dashboard-page">
    <!-- Stat Cards Row -->
    <div class="row q-col-gutter-md q-mt-md">

      <!-- Total Users -->
      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="stat-card bg-primary text-white">
          <q-card-section>
            <q-icon name="account_circle" size="32px" color="white" />
            <div class="text-h6">Total Users</div>
            <div class="text-subtitle1">1,245</div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Revenue -->
      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="stat-card bg-secondary text-white">
          <q-card-section>
            <q-icon name="monetization_on" size="32px" color="white" />
            <div class="text-h6">Revenue</div>
            <div class="text-subtitle1">₹32,100</div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Sales -->
      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="stat-card bg-positive text-white">
          <q-card-section>
            <q-icon name="local_offer" size="32px" color="white" />
            <div class="text-h6">Sales</div>
            <div class="text-subtitle1">580</div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Notifications -->
      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="stat-card bg-negative text-white">
          <q-card-section>
            <q-icon name="notifications" size="32px" color="white" />
            <div class="text-h6">Notifications</div>
            <div class="text-subtitle1">13</div>
          </q-card-section>
        </q-card>
      </div>

    </div>

    <!-- Charts Section -->
    <div class="q-mt-lg">
      <RevenueLineChart class="q-mb-md" />
      <OrderTable />
    </div>
  </q-page>
</template>



<script setup>
import RevenueLineChart from 'components/RevenueLineChart.vue'
import OrderTable from 'src/components/OrderTable.vue';


</script>

<style scoped lang="scss">
.q-page {
  background-color: #f4f6f9; // light dashboard background
  min-height: 100vh;

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .q-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border-radius: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .q-card__section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100px;

      .text-h6 {
        font-weight: 600;
      }

      .text-subtitle1 {
        font-size: 1.25rem;
        font-weight: bold;
      }
    }
  }
}

// Responsive margin fixes
@media (max-width: 600px) {
  .q-card {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100%;
  }
}
</style>



