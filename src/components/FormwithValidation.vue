<template>
  <q-card class="form-card" style="width:100%">
    <q-card-section>
      <div class="form-title">Form with Validation</div>
      <div class="form-subtitle">Basic validation using Quasar rules</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <q-form @submit.prevent="onSubmit" @reset="onReset" class="form-container">
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
            val => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(val) || 'Invalid email format'
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

        <!-- Buttons -->
        <div class="button-row">
          <q-btn label="Submit" type="submit" color="primary" class="submit-btn" />
          <q-btn label="Reset" type="reset" color="secondary" flat class="reset-btn" />
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

<style scoped lang="scss">
.form-card {
  width: 100%;
  max-width: 480px;
  margin: 2rem auto;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  background: #ffffff;
  font-family: "Segoe UI", sans-serif;
  padding: 1.5rem;

  .form-title {
    font-size: 1.6rem;
    font-weight: 700;
    color: #3f51b5; // Indigo
    margin-bottom: 0.25rem;
  }

  .form-subtitle {
    font-size: 1rem;
    color: #6b7280; // Slate Gray
    font-weight: 500;
  }
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .q-input__control {
    border-radius: 10px;
    box-shadow: inset 0 0 0 1px #e5e7eb;

    &:focus-within {
      box-shadow: inset 0 0 0 2px #6366f1;
    }
  }
}

.button-row {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;

  .submit-btn {
    font-weight: 600;
    border-radius: 8px;
    padding: 0.6rem 1.2rem;
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);

    &:hover {
      box-shadow: 0 8px 22px rgba(79, 70, 229, 0.4);
    }
  }

  .reset-btn {
    font-weight: 500;
    border-radius: 8px;
  }
}

@media (max-width: 600px) {
  .form-card {
    margin: 1rem;
    padding: 1rem;
  }

  .button-row {
    flex-direction: column;
    align-items: stretch;

    .submit-btn,
    .reset-btn {
      width: 100%;
    }
  }
}
</style>

