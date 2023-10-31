<template>
    <div>
      <h1>Create Jewelry</h1>
      <form @submit.prevent="createJewelry">
        <p>Material: <input type="text" v-model="jewelry.material"></p>
        <p>Color: <input type="text" v-model="jewelry.color"></p>
        <p>Type: <input type="text" v-model="jewelry.type"></p>
        <p>Weight: <input type="text" v-model="jewelry.weight"></p>
        <p>Size: <input type="text" v-model="jewelry.size"></p>
        <p>Brand: <input type="text" v-model="jewelry.brand"></p>
        <button type="submit">Create Jewelry</button>
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
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  