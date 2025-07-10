<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Basic Form</div>
      <div class="text-subtitle2 text-grey">HTML5 Form Basics</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <q-form @submit.prevent="submitForm" class="q-gutter-md">

        <!-- Full Width Column -->
        <q-input filled v-model="form.name" label="Full Name" />
        <q-input filled v-model="form.email" label="Email Address" type="email" />
        <q-input filled v-model="form.password" label="Password" type="password" />
        <q-input
          filled
          v-model="form.message"
          label="Message"
          type="textarea"
          autogrow
        />

        <!-- Submit Button -->
        <q-btn label="Submit" type="submit" color="primary" />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  password: '',
  message: ''
})

function submitForm() {
  console.log('Submitted:', form.value)
}
</script>

