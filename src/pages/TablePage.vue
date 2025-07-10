<template>
  <q-page class="q-pa-md">
     <div class="col-md-6 col-xs-12">
        <TableStylesDemo/>

        
      </div>
    
  </q-page>
</template>

<script setup>
import TableStylesDemo from 'src/components/TableStylesDemo.vue';
</script>

<style scoped lang="scss">
.q-page {
  background-color: #f4f6f9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 24px;

  .col-md-6 {
    width: 100%;
    max-width: 900px;

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

// Enhance QTable inside TableStylesDemo
::v-deep(.q-table) {
  border-radius: 12px;
  overflow: hidden;
  font-size: 14px;

  thead {
    background-color: #f0f3f8;

    th {
      font-weight: 600;
      color: #37474f;
    }
  }

  tbody tr {
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f9f9f9;
    }
  }

  td {
    padding: 12px 16px;
  }
}

// Responsive tweaks
@media (max-width: 768px) {
  .col-md-6 {
    padding: 0 8px;

    > * {
      padding: 16px;
    }
  }
}
</style>
