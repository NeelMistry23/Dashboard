<template>
  <q-page class="q-pa-md" >
    <div class="column q-gutter-md" style="width: 100%;">

      <!-- Simple Table -->
      <q-card class="shadow-2 rounded-borders">
        <q-card-section class="text-h6 text-primary">Simple Table</q-card-section>
        <q-table :rows="rows" :columns="columns" row-key="id"  bordered />
      </q-card>

      <!-- Inverted Table -->
      <q-card class="bg-grey-10 text-white shadow-2 rounded-borders">
        <q-card-section class="text-h6">Inverted Table</q-card-section>
        <q-table
          :rows="rows"
          :columns="columns"
          row-key="id"
          flat
          dark
          color="white"
            
        />
      </q-card>

      <!-- Striped Table -->
      <q-card class="shadow-2 rounded-borders">
        <q-card-section class="text-h6 text-primary">Striped Table</q-card-section>
        <q-table
          :rows="rows"
          :columns="columns"
          row-key="id"
          separator="horizontal"
          :separator-color="'grey-4'"
          :striped="true"
          bordered
        />
      </q-card>

      <!-- Fit Table -->
      <q-card class="shadow-2 rounded-borders">
        <q-card-section class="text-h6 text-primary">Fit Table</q-card-section>
        <q-table
          :rows="rows"
          :columns="columns"
          row-key="id"
          dense
          flat
          bordered
        />
      </q-card>

      <!-- Bordered Table -->
      <q-card class="shadow-2 rounded-borders">
        <q-card-section class="text-h6 text-primary">Bordered Table</q-card-section>
        <q-table
          :rows="rows"
          :columns="columns"
          row-key="id"
          bordered
        />
      </q-card>

      <!-- Borderless Table -->
      <q-card class="shadow-2 rounded-borders">
        <q-card-section class="text-h6 text-primary">Borderless Table</q-card-section>
        <q-table
          :rows="rows"
          :columns="columns"
          row-key="id"
          flat
        />
      </q-card>

    </div>
  </q-page>
</template>

<script setup>
const columns = [
  { name: 'id', label: 'ID', field: 'id', align: 'left' },
  { name: 'name', label: 'Name', field: 'name', align: 'left' },
  { name: 'email', label: 'Email', field: 'email', align: 'left' }
]

const rows = [
  { id: 1, name: 'Neel Mehta', email: 'neel@example.com' },
  { id: 2, name: 'Shriya Patel', email: 'shriya@example.com' },
  { id: 3, name: 'Khushbu Shah', email: 'khushbu@example.com' },
  { id: 4, name: 'Kanishk Joshi', email: 'kanishk@example.com' }
]
</script>

<style scoped>
.q-card {
  transition: box-shadow 0.3s ease;
}
.q-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}
.q-table thead th {
  background-color: #f5f7fa;
  font-weight: 600;
}
</style>

