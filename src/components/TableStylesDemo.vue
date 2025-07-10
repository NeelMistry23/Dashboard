<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md q-gutter-y-md">

      <!-- Simple Table -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section class="text-h6">Simple Table</q-card-section>
          <q-table :rows="rows" :columns="columns" row-key="id" />
        </q-card>
      </div>

      <!-- Inverted Table -->
      <div class="col-12 col-md-6">
        <q-card class="bg-grey-10 text-white">
          <q-card-section class="text-h6">Inverted Table</q-card-section>
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            color="white"
            flat
            dark
          />
        </q-card>
      </div>

      <!-- Striped Table -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section class="text-h6">Striped Table</q-card-section>
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            separator="horizontal"
            :separator-color="'grey-4'"
            :striped="true"
          />
        </q-card>
      </div>

      <!-- Fit Table -->
      <div class="col-12 col-md-6" >
        <q-card>
          <q-card-section class="text-h6">Fit Table</q-card-section>
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            dense
            flat
          />
        </q-card>
      </div>

      <!-- Bordered Table -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section class="text-h6">Bordered Table</q-card-section>
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            bordered
          />
        </q-card>
      </div>

      <!-- Borderless Table -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section class="text-h6">Borderless Table</q-card-section>
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="id"
            flat
          />
        </q-card>
      </div>

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
