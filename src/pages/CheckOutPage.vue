<template>
  <div class="checkout-container" style="width:100%">
    <h1 class="title">✅Checkout</h1>

    <div class="checkout-content">
      <!-- Shipping Form -->
      <section class="form-section" v-if="step === 1">
        <h2 class="section-title">🛒Shipping Address</h2>

        <div class="form-row">
          <input v-model="form.firstName" placeholder="First Name *" />
          <input v-model="form.lastName" placeholder="Last Name *" />
        </div>

        <input v-model="form.address1" placeholder="Address line 1 *" />
        <br>
        <input v-model="form.address2" placeholder="Address line 2" />
<br>
        <div class="form-row">
          <input v-model="form.city" placeholder="City *" />
          <input v-model="form.state" placeholder="State" />
        </div>

        <div class="form-row">
          <input v-model="form.zip" placeholder="Zip Code" />
          <input v-model="form.country" placeholder="Country *" />
        </div>

        <label class="checkbox-label">
          <input type="checkbox" v-model="form.useForPayment" />
          Use this address for payment details
        </label>

        <button class="btn-primary" @click="nextStep">Next</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutForm",
  data() {
    return {
      step: 1,
      form: {
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        useForPayment: true,
      },
    };
  },
  methods: {
    nextStep() {
      this.step++;
    },
  },
};
</script>

<style scoped>
.checkout-container {
  max-width: 480px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.title {
  text-align: center;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #4f46e5; /* Indigo 600 */
  font-size: 2rem;
}

.checkout-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-section {
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #4338ca; /* Indigo 700 */
}

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="number"],
input {
  flex: 1;
  padding: 0.65rem 1rem;
  font-size: 1rem;
  border: 1.5px solid #cbd5e1; /* slate-300 */
  border-radius: 8px;
  outline-offset: 2px;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #6366f1; /* Indigo 500 */
  box-shadow: 0 0 8px rgba(99, 102, 241, 0.3);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #4b5563; /* gray-700 */
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #6366f1; /* Indigo */
}

.btn-primary {
  background-color: #4f46e5; /* Indigo 600 */
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  padding: 0.85rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.25s ease;
  align-self: flex-end;
  box-shadow: 0 6px 15px rgba(79, 70, 229, 0.4);
  min-width: 120px;
}

.btn-primary:hover {
  background-color: #4338ca; /* Indigo 700 */
  box-shadow: 0 8px 22px rgba(67, 56, 202, 0.6);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .checkout-container {
    margin: 1rem 1rem;
    padding: 1.5rem;
    max-width: 100%;
  }

  .form-row {
    flex-direction: column;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="tel"],
  input[type="number"],
  input {
    width: 100%;
  }

  .btn-primary {
    width: 100%;
    align-self: stretch;
  }
}
</style>







