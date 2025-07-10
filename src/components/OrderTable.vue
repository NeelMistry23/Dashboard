<template>
  <q-page class="q-pa-md">
    <q-card flat class="q-pa-md q-mt-lg shadow-md">
      <q-table
        flat
        bordered
        :rows="orders"
        :columns="columns"
        row-key="orderId"
        separator="horizontal"
        class="q-mt-md"
      >
        <!-- Client Slot -->
        <template v-slot:body-cell-client="props">
          <q-td :props="props">
            <div class="row items-center no-wrap">
              <q-avatar icon="person" size="24px" class="q-mr-sm" />
              <div>{{ props.row.client }}</div>
              <q-icon name="chat_bubble" size="18px" class="q-ml-sm text-grey-6" />
            </div>
          </q-td>
        </template>

        <!-- Created At -->
        <template v-slot:body-cell-createdAt="props">
          <q-td :props="props">
            <div>{{ formatDate(props.row.createdAt) }}</div>
            <div class="text-caption text-grey">{{ formatTime(props.row.createdAt) }}</div>
          </q-td>
        </template>

        <!-- Type -->
        <template v-slot:body-cell-type="props">
          <q-td :props="props">
            <q-icon name="shopping_basket" color="light-green" />
          </q-td>
        </template>

        <!-- Payment Status -->
        <template v-slot:body-cell-payment="props">
          <q-td :props="props">
            <q-badge color="negative" label="Unpaid" />
          </q-td>
        </template>

        <!-- Actions -->
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              icon="visibility"
              size="sm"
              flat
              round
              @click="openOrderDetails(props.row)"
            />
            <q-btn icon="edit" size="sm" flat round class="q-ml-sm" />
          </q-td>
        </template>
      </q-table>
    </q-card>

    <!-- Order Details Dialog -->
    <q-dialog v-model="showDetails">
      <q-card class="q-pa-md" style="width: 400px; max-width: 90vw">
        <div class="row justify-between items-center">
          <div class="text-h6">business.orders.orderDetails***</div>
          <q-btn icon="close" flat round dense v-close-popup />
        </div>

        <q-separator class="q-my-sm" />

        <div class="q-mb-md">
          <div class="text-subtitle2">Client</div>
          <div class="row items-center">
            <q-icon name="person" class="q-mr-sm" />
            {{ selectedOrder.client }}
          </div>
        </div>

        <div class="q-mb-md">
          <div class="text-subtitle2">Payment</div>
          <q-badge color="negative" label="Unpaid" />
          
        </div>

        
      

        <div class="q-mb-md">
          <div class="text-subtitle2">Order ID</div>
          {{ selectedOrder.orderId }}
        </div>

        <div class="q-mb-md">
          <div class="text-subtitle2">Created At</div>
          {{ formatDate(selectedOrder.createdAt) }}
        </div>

        <div class="q-mb-md">
          <div class="text-subtitle2">Waiter's Tip</div>
          <q-input v-model="selectedOrder.tip" readonly dense />
        </div>

        <div class="text-subtitle2 q-mb-xs">business.orders.orderItems***</div>
        <q-list dense bordered>
          <q-item v-for="item in selectedOrder.items" :key="item.name">
            <q-item-section>{{ item.name }}</q-item-section>
            <q-item-section side>{{ formatPrice(item.price) }}</q-item-section>
          </q-item>
        </q-list>

        <div class="text-right q-mt-md text-bold">
          business.orders.totalAmount*** = {{ formatPrice(totalAmount) }}
        </div>
      </q-card>
    </q-dialog>
  </q-page>
</template>


<script setup>
import { ref, computed } from 'vue'

const showDetails = ref(false)
const selectedOrder = ref({ items: [], tip: 0 })

const openOrderDetails = (order) => {
  selectedOrder.value = order
  showDetails.value = true
}

const formatDate = (date) => new Date(date).toLocaleDateString()
const formatTime = (date) => new Date(date).toLocaleTimeString()
const formatPrice = (val) => `$${val.toFixed(2)}`

const totalAmount = computed(() => {
  return selectedOrder.value.items.reduce((sum, item) => sum + item.price, 0)
})

// Sample table data
const columns = [
  { name: 'client', label: 'Client', field: 'client' },
  { name: 'createdAt', label: 'Created At', field: 'createdAt' },
  { name: 'type', label: 'Type', field: 'type' },
  { name: 'payment', label: 'Payment', field: 'payment' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

const orders = [
  {
    orderId: 'A1YjncSxdB',
    client: 'PP by DevDiner',
    createdAt: '2025-05-17T10:00:00',
    payment: 'Unpaid',
    tip: 0,
    items: [
      { name: 'Coffee', price: 3.30 },
      { name: 'Angus Burger', price: 5.50 },
      { name: 'Fresh Salad', price: 4.20 }
    ]
  },

  {
    orderId: 'A1YjncSxdB',
    client: 'Neel',
    createdAt: '2025-05-17T10:00:00',
    payment: 'Paid',
    tip: 0,
    items: [
      { name: 'Coffee', price: 3.30 },
      { name: 'Angus Burger', price: 5.50 },
      { name: 'Fresh Salad', price: 4.20 }
    ]
  },

   {
    orderId: 'A1YjncSxdB',
    client: 'Shreya',
    createdAt: '2025-05-17T10:00:00',
    payment: 'Paid',
    tip: 0,
    items: [
      { name: 'Coffee', price: 3.30 },
      { name: 'Angus Burger', price: 5.50 },
      { name: 'Fresh Salad', price: 4.20 }
    ]
  }
]
</script>


<style scoped>
.q-table thead th {
  font-weight: 600;
  background-color: #f8f9fa;
}

.q-badge {
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
}
</style>
