<template>
  <q-card class="basic-form-card">
    <q-card-section>
      <div class="title">Basic Form</div>
      <div class="subtitle">HTML5 Form Basics</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <q-form @submit.prevent="submitForm" class="form-container">
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

        <q-btn label="Submit" type="submit" color="primary" class="submit-btn" />
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

<style scoped lang="scss">
.basic-form-card {
  max-width: 480px;
  margin: 2rem auto;
  border-radius: 14px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  background: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
  padding: 1.5rem;

  .title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #4f46e5; // Indigo 600
  }

  .subtitle {
    font-size: 1rem;
    color: #6b7280; // gray-500
    margin-top: 4px;
    font-weight: 500;
  }
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  .q-input__control {
    border-radius: 12px;
    box-shadow: inset 0 0 0 1px #d1d5db; // slate-300 border

    &:focus-within {
      box-shadow: inset 0 0 0 2px #6366f1; // Indigo 500
      transition: box-shadow 0.3s ease;
    }
  }

  .q-input__bottom {
    margin-top: 0.25rem;
  }
}

.submit-btn {
  margin-top: 1rem;
  padding: 0.85rem;
  font-weight: 700;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(79, 70, 229, 0.5);
  transition: box-shadow 0.25s ease;
  align-self: flex-end;
  min-width: 120px;

  &:hover {
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.8);
  }
}

/* Responsive */
@media (max-width: 600px) {
  .basic-form-card {
    margin: 1rem;
    max-width: 100%;
    padding: 1rem;
  }

  .submit-btn {
    align-self: stretch;
    width: 100%;
    min-width: unset;
  }
}
</style>


