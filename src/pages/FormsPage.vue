<template>
  <q-page class="q-pa-md">
   <AdvanceForm class="q-mb-md"/>

   <BasicForm class="q-mb-md"/>

   <formwith-validation/>
  </q-page>
</template>

<script setup>
import AdvanceForm from 'src/components/AdvanceForm.vue';
import BasicForm from 'src/components/BasicForm.vue';
import FormwithValidation from 'src/components/FormwithValidation.vue';

</script>

<style scoped lang="scss">
.q-page {
  background-color: #f4f6f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  > * {
    width: 100%;
    max-width: 800px;
    background-color: #ffffff;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }
  }
}

// Style form fields globally inside the forms
::v-deep(.q-field) {
  margin-bottom: 16px;

  .q-field__control {
    border-radius: 8px;
    padding: 0 12px;
    height: 44px;
  }

  .q-field__label {
    font-weight: 500;
    color: #455a64;
  }
}

// Responsive layout
@media (max-width: 768px) {
  .q-page {
    padding: 12px;

    > * {
      padding: 16px;
    }
  }
}
</style>


