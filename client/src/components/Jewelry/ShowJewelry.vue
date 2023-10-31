<template>
    <div>
      <div>
        <h1>Get Jewelry By Id</h1>
        <p>Jewelry ID: {{ jewelry.id }}</p>
        <p>Material: {{ jewelry.material }}</p>
        <p>Color: {{ jewelry.color }}</p>
        <p>Type: {{ jewelry.type }}</p>
        <p>Weight: {{ jewelry.weight }}</p>
        <p>Size: {{ jewelry.size }}</p>
        <p>Brand: {{ jewelry.brand }}</p>
        <p><button @click="navigateTo('/jewelry')">กลับ</button></p>
      </div>
    </div>
  </template>
  
  <script>
  import JewelryService from '@/services/JewelryService';
  
  export default {
    data() {
      return {
        jewelry: null
      }
    },
    async created() {
      try {
        let jewelryId = this.$route.params.jewelryId;
        this.jewelry = (await JewelryService.show(jewelryId)).data;
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
    }
  }
  </script>
  
  <style scoped>
  </style>
  