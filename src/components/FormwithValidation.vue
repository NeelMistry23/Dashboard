<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Form with Validation</div>
      <div class="text-subtitle2 text-grey">Basic validation using Quasar rules</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">

        <!-- Full Name -->
        <q-input
          filled
          v-model="form.name"
          label="Full Name"
          :rules="[val => !!val || 'Name is required', val => val.length >= 3 || 'Minimum 3 characters']"
        />

        <!-- Email -->
        <q-input
          filled
          v-model="form.email"
          label="Email"
          type="email"
          :rules="[
            val => !!val || 'Email is required',
            val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Invalid email format'
          ]"
        />

        <!-- Password -->
        <q-input
          filled
          v-model="form.password"
          label="Password"
          type="password"
          :rules="[val => !!val || 'Password is required', val => val.length >= 6 || 'Minimum 6 characters']"
        />

        <!-- Submit & Reset Buttons -->
        <div class="row q-gutter-sm">
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="secondary" flat />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  password: ''
})

function onSubmit () {
  console.log('Form submitted:', form.value)
}

function onReset () {
  form.value = { name: '', email: '', password: '' }
}
</script>
