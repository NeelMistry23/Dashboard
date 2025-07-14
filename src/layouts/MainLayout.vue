
<template>
  <q-layout view="lHh LpR lFf">
    <!-- Top Navbar -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Admin Dashboard</q-toolbar-title>

        <q-space />

        <!-- Search Input -->
        <q-input
          class="q-mx-md"
          dense
          rounded
          standout="bg-white text-black"
          debounce="300"
          v-model="search"
          placeholder="Search..."
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <!-- Right-side Icon Buttons -->
        <q-btn flat round dense icon="fullscreen" @click="toggleFullScreen" />
        <q-btn flat round dense icon="fab fa-github" @click="goToGitHub" />

        <q-btn flat round dense>
          <q-icon name="notifications" />
          <q-badge color="red" floating transparent>5</q-badge>
        </q-btn>
        <q-avatar size="50px">
          <q-btn flat round dense icon="account_circle" />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="sidebar-drawer">
      <!-- Overlay to darken the background for better text visibility -->
      <div class="sidebar-overlay">
        <!-- Top Avatar Section -->
        <div class="q-pa-md flex flex-center text-white">
          <q-img
            src="../assets/images/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
            style="max-width: 100px; border-radius: 50%"
            spinner-color="white"
            alt="Sidebar Avatar"
          />

          <div>
            <h3 style="font-size: 2rem">Neel Mistry</h3>
          </div>
        </div>

        <hr />

        <!-- Navigation list -->
        <q-list class="text-white">
          <q-item clickable tag="router-link" to="/" exact>
            <q-item-section avatar><q-icon name="dashboard" /></q-item-section>
            <q-item-section>Dashboard</q-item-section>
          </q-item>
          <q-item clickable tag="router-link" to="/analytics">
            <q-item-section avatar><q-icon name="analytics" /></q-item-section>
            <q-item-section>Analytics</q-item-section>
          </q-item>
          <q-item clickable tag="router-link" to="/users">
            <q-item-section avatar><q-icon name="pie_chart" /></q-item-section>
            <q-item-section>Charts</q-item-section>
          </q-item>
          <q-item clickable tag="router-link" to="/tables">
            <q-item-section avatar><q-icon name="border_all" /></q-item-section>
            <q-item-section>Tables</q-item-section>
          </q-item>
          <q-item clickable tag="router-link" to="/forms">
            <q-item-section avatar><q-icon name="view_quilt" /></q-item-section>
            <q-item-section>Forms</q-item-section>
          </q-item>
          <q-item clickable tag="router-link" to="/footer">
            <q-item-section avatar><q-icon name="error" /></q-item-section>
            <q-item-section>Footer</q-item-section>
          </q-item>
          <q-item clickable tag="router-link" to="/checkout">
            <q-item-section avatar><q-icon name="check_circle" /></q-item-section>
            <q-item-section>Checkout</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <!-- Main Page Content -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
const search = ref('')

function goToGitHub() {
  window.open('https://github.com/NeelMistry23', '_blank');
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}


</script>




<style scoped lang="scss">
.sidebar-drawer {
  background-image: url('src/assets/sidebar-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;

}

.sidebar-overlay {
  background: rgba(0, 0, 0, 0.6);
  
  height: 100%;
  width: 100%;
  padding-bottom: 20px;
}

.q-mx-md {
  margin-top: 20px;
  min-width: 300px;
}

.q-layout {
  background-color: #f5f7fa;
}

// Navbar (Header)
.q-header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .q-toolbar {
    padding: 0 16px;

    .q-toolbar-title {
      font-size: 1.25rem;
      font-weight: 600;
    }

    .q-input {
      max-width: 320px;
      margin-top: 4px;
    }

    .q-btn {
      transition: background-color 0.3s ease;
    }

    .q-btn:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}

// Sidebar (Drawer)
.q-drawer {
  background-color: #290fd4;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.05);

  .q-list {
    padding-top: 8px;
    padding-bottom: 8px;

    .q-item {
      border-radius: 8px;
      margin: 4px 8px;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #f0f4f8;
      }

      &.q-router-link--active {
        background-color: #e3f2fd;
        color: #1976d2;
        font-weight: 600;

        .q-icon {
          color: #1976d2;
        }
      }
    }

    .q-item-section {
      font-size: 15px;
    }
  }
}

// Main content area
.q-page-container {
  padding: 16px;
}
</style>




