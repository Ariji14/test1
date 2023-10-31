<template>
    <div>
      <h1>Create Jewelry</h1>
      <form @submit.prevent="createJewelry">
        <p>Material: <input type="text" v-model="jewelry.material"></p>
        <p>Color: <input type="text" v-model="jewelry.color"></p>
        <p>Type: <input type="text" v-model="jewelry.type"></p>
        <p>Weight(g): <input type="text" v-model="jewelry.weight"></p>
        <p>Name: <input type="text" v-model="jewelry.size"></p>
        <p>Brand: <input type="text" v-model="jewelry.brand"></p>
        <p>
        <button type="submit">Create Jewelry</button>
        <button type="button" @click="goBack">Cancel</button>
        </p>
      </form>
      
    </div>
  </template>
  
  <script>
import JewelryService from '../../services/JewelryService';

export default {
  data() {
    return {
      jewelry: {
        material: '',
        color: '',
        type: '',
        weight: '',
        size: '',
        brand: '',
      }
    }
  },
  methods: {
    async createJewelry() {
      try {
        await JewelryService.post(this.jewelry);
        this.$router.push({
          name: 'jewelry'
        });
      } catch (error) {
        console.error(error);
      }
    },
    goBack() {
      this.$router.go(-1); // ย้อนกลับหนึ่งขั้น
    }
  }
}
</script>
  
  <style scoped>
  
  h1 {
    font-size: 32px;
    color: #333;
    text-align: center;
  }

  form {
    margin: 20px auto;
    max-width: 400px;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    margin: 10px 0;
  }

  input[type="text"] {
    width: 95%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #e74c3c;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    background-color: #af3628;
  }

  button[type="button"] {
  background-color: #ccc;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 1rem;
}

button[type="button"]:hover {
  background-color: #999;
}
</style>

  