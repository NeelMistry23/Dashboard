<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Advanced Form</div>
      <div class="text-subtitle2 text-grey">Fill in the details below</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <q-form @submit.prevent="submitForm" class="q-gutter-md">

        <!-- Text Input -->
        <q-input filled v-model="form.name" label="Full Name" />

        <!-- Select -->
        <q-select
          filled
          v-model="form.role"
          :options="roles"
          label="Select Role"
          emit-value
          map-options
        />

        <!-- File Upload -->
        <q-file
          filled
          v-model="form.image"
          label="Upload Image"
          accept="image/*"
          prepend-icon="image"
        />

        <!-- Checkbox -->
        <q-checkbox v-model="form.acceptTerms" label="I accept terms & conditions" />

        <!-- Toggle -->
        <q-toggle v-model="form.notifications" label="Enable Notifications" />

        <!-- Color Picker -->
        <div>
          <label class="text-subtitle1">Pick a Color:</label>
          <q-color v-model="form.color" format-model="hex" />
        </div>

        <!-- Date Picker -->
        <q-input filled v-model="form.date" label="Pick a Date">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy>
                <q-date v-model="form.date" mask="YYYY-MM-DD" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <!-- Time Picker -->
        <q-input filled v-model="form.time" label="Pick a Time">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy>
                <q-time v-model="form.time" format24h />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <!-- Submit Button -->
        <div class="q-mt-md">
          <q-btn label="Submit" type="submit" color="primary" />
        </div>

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

