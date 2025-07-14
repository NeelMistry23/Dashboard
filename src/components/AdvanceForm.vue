<template>
  <q-card class="advanced-form-card">
    <q-card-section>
      <div class="title">Advanced Form</div>
      <div class="subtitle">Fill in the details below</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <q-form @submit.prevent="submitForm" class="form-container">

        <q-input filled v-model="form.name" label="Full Name" />
        
        <q-select
          filled
          v-model="form.role"
          :options="roles"
          label="Select Role"
          emit-value
          map-options
        />

        <q-file
          filled
          v-model="form.image"
          label="Upload Image"
          accept="image/*"
          prepend-icon="image"
        />

        <q-checkbox v-model="form.acceptTerms" label="I accept terms & conditions" />

        <q-toggle v-model="form.notifications" label="Enable Notifications" />

        <div class="color-section">
          <label class="text-subtitle1">Pick a Color:</label>
          <q-color v-model="form.color" format-model="hex" />
        </div>

        <q-input filled v-model="form.date" label="Pick a Date">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy>
                <q-date v-model="form.date" mask="YYYY-MM-DD" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input filled v-model="form.time" label="Pick a Time">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy>
                <q-time v-model="form.time" format24h />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-btn label="Submit" type="submit" color="primary" class="submit-btn" />

      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'

const roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'Editor', value: 'editor' },
  { label: 'Viewer', value: 'viewer' }
]

const form = ref({
  name: '',
  role: null,
  image: null,
  acceptTerms: false,
  notifications: true,
  color: '#1976D2',
  date: '',
  time: ''
})

function submitForm() {
  console.log('Advanced Form Submitted:', form.value)
}
</script>

<style scoped lang="scss">
.advanced-form-card {
  max-width: 600px;
  margin: 2rem auto;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  background-color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #374151; // slate-700

  .title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #4f46e5; // indigo-600
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 500;
    color: #6b7280; // gray-500
    margin-top: 4px;
  }
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  .q-input__control,
  .q-select__control,
  .q-file__control {
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  .q-input:focus-within,
  .q-select:focus-within,
  .q-file:focus-within {
    box-shadow: 0 0 0 2px #6366f1;
  }

  .submit-btn {
    margin-top: 1rem;
    align-self: flex-end;
    font-weight: 600;
    border-radius: 10px;
    padding: 0.7rem 1.5rem;
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
    transition: all 0.2s ease;

    &:hover {
      box-shadow: 0 10px 22px rgba(79, 70, 229, 0.4);
    }
  }
}

.color-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

@media (max-width: 640px) {
  .advanced-form-card {
    margin: 1rem;
    padding: 1rem;
  }

  .submit-btn {
    align-self: stretch;
    width: 100%;
  }
}
</style>


