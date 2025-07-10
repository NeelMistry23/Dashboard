<template>
  <div class="checkout-container">
    <!-- Steps Header -->
    

    <div class="checkout-content">
        
      <!-- Left: Shipping Form -->
      <div class="form-section" v-if="step === 1">
        <h2>Shipping Address</h2>
        <div class="form-row">
          <input v-model="form.firstName" placeholder="First Name *" />
          <input v-model="form.lastName" placeholder="Last Name *" />
        </div>
        <input v-model="form.address1" placeholder="Address line 1 *" />
        <input v-model="form.address2" placeholder="Address line 2 *" />
        <div class="form-row">
          <input v-model="form.city" placeholder="City *" />
          <input v-model="form.state" placeholder="State" />
        </div>
        <div class="form-row">
          <input v-model="form.zip" placeholder="Zip Code" />
          <input v-model="form.country" placeholder="Country *" />
        </div>
        <label>
          <input type="checkbox" v-model="form.useForPayment" />
          Use this address for payment details
        </label>
        <button @click="nextStep">Next</button>
      </div>

    
      
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
  computed: {
    total() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    },
  },
  methods: {
    nextStep() {
      this.step++;
    },
  },
};
</script>

<style scoped lang="scss">
.checkout-container {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  font-family: 'Roboto', sans-serif;

  .steps {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 16px;
    color: #9e9e9e;

    span {
      display: flex;
      align-items: center;
      gap: 8px;

    
    }
  }

  .checkout-content {
    display: flex;
    gap: 40px;
    width: 100%;
  }

  .form-section {
    flex: 2;
    background: #fff;
    padding: 30px;
    border-radius: 6px;

    h2 {
      margin-bottom: 20px;
    }

    .form-row {
      display: flex;
      gap: 20px;
      margin-bottom: 15px;

      input {
        flex: 1;
      }
    }

    input {
      width: 100%;
      padding: 12px 16px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 15px;
    }

    label {
      display: flex;
      align-items: center;
      margin-top: 10px;
      font-size: 14px;

      input[type='checkbox'] {
        margin-right: 8px;
        accent-color: #000;
      }
    }

    button {
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #2196f3;
      color: #fff;
      border: none;
      border-radius: 50px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #1976d2;
      }
    }
  }

  .order-summary {
    flex: 1.3;
    background-color: #fafafa;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 24px;

    h3 {
      display: flex;
      align-items: center;
      font-size: 22px;
      margin-bottom: 20px;

      &::before {
        content: '🛒';
        margin-right: 10px;
      }
    }

    .summary-item {
      display: flex;
      align-items: center;
      gap: 16px;
      border-bottom: 1px solid #e0e0e0;
      padding: 12px 0;

      img {
        width: 90px;
        height: 60px;
        border-radius: 4px;
        object-fit: cover;
      }

      .info {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        color: #333;

        .title {
          font-weight: 600;
        }

        .price {
          font-weight: 500;
          color: #000;
        }
      }
    }

    .total {
      margin-top: 20px;
      text-align: right;
      font-size: 18px;
      font-weight: bold;

      span {
        color: #1976d2;
      }
    }
  }
}


</style>



