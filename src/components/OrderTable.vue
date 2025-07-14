<template>
  <q-page class="q-pa-md" >
    <!-- Order Table -->
    <q-card flat bordered class="q-pa-md q-mt-lg shadow-2 rounded-borders bg-white">
      <div class="text-h6 text-primary q-mb-sm">🧾 Order Table</div>
      <q-table
        flat
        bordered
        :rows="orders"
        :columns="columns"
        row-key="orderId"
        separator="horizontal"
        class="order-table"
        dense
      >
        <!-- Client -->
        <template v-slot:body-cell-client="props">
          <q-td :props="props">
            <div class="row items-center no-wrap">
              <q-avatar icon="person" size="24px" class="q-mr-sm bg-grey-4 text-primary" />
              <div class="text-weight-medium">{{ props.row.client }}</div>
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

        <!-- Payment -->
        <template v-slot:body-cell-payment="props">
          <q-td :props="props">
            <q-badge
              :color="props.row.payment === 'Paid' ? 'positive' : 'negative'"
              :label="props.row.payment"
              class="q-px-sm"
            />
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
              dense
              color="primary"
              @click="openOrderDetails(props.row)"
              :title="'View Order'"
            />
            <q-btn
              icon="edit"
              size="sm"
              flat
              round
              dense
              color="secondary"
              class="q-ml-sm"
              :title="'Edit Order'"
            />
          </q-td>
        </template>
      </q-table>
    </q-card>

    <!-- Order Details Dialog -->
    <q-dialog v-model="showDetails">
      <q-card class="q-pa-md" style="width: 450px; max-width: 90vw;">
        <div class="row justify-between items-center">
          <div class="text-h6 text-primary">Order Details</div>
          <q-btn icon="close" flat round dense v-close-popup />
        </div>

        <q-separator class="q-my-sm" />

        <div class="q-mb-md">
          <div class="text-subtitle2 text-grey">Client</div>
          <div class="row items-center">
            <q-icon name="person" class="q-mr-sm" />
            {{ selectedOrder.client }}
          </div>
        </div>

        <div class="q-mb-md">
          <div class="text-subtitle2 text-grey">Payment Status</div>
          <q-badge
            :color="selectedOrder.payment === 'Paid' ? 'positive' : 'negative'"
            :label="selectedOrder.payment"
            class="q-mt-xs"
          />
        </div>

        <div class="q-mb-md">
          <div class="text-subtitle2 text-grey">Order ID</div>
          <div class="text-body2">{{ selectedOrder.orderId }}</div>
        </div>

        <div class="q-mb-md">
          <div class="text-subtitle2 text-grey">Created At</div>
          <div class="text-body2">{{ formatDate(selectedOrder.createdAt) }}</div>
        </div>

        <div class="q-mb-md">
          <div class="text-subtitle2 text-grey">Waiter's Tip</div>
          <q-input v-model="selectedOrder.tip" readonly dense borderless />
        </div>

        <div class="text-subtitle2 text-grey q-mb-xs">Order Items</div>
        <q-list dense bordered class="rounded-borders">
          <q-item v-for="item in selectedOrder.items" :key="item.name">
            <q-item-section>{{ item.name }}</q-item-section>
            <q-item-section side>{{ formatPrice(item.price) }}</q-item-section>
          </q-item>
        </q-list>

        <div class="text-right q-mt-md text-bold text-primary">
          Total: {{ formatPrice(totalAmount) }}
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
    orderId: 'B1XYZ123AB',
    client: 'Neel',
    createdAt: '2025-06-01T14:30:00',
    payment: 'Paid',
    tip: 1.5,
    items: [
      { name: 'Latte', price: 4.50 },
      { name: 'Caesar Salad', price: 6.20 }
    ]
  },
  {
    orderId: 'C2LMNOP456',
    client: 'Shreya',
    createdAt: '2025-06-05T18:15:00',
    payment: 'Paid',
    tip: 2.0,
    items: [
      { name: 'Espresso', price: 2.80 },
      { name: 'Veggie Pizza', price: 7.90 }
    ]
  }
]
</script>

<style scoped lang="scss">
.order-table {
  font-size: 14px;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}

.q-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.q-badge {
  font-weight: 500;
  letter-spacing: 0.3px;
}

.q-table .q-tr:hover {
  background-color: #f9fafb;
}
</style>




