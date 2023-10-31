<template>
  <div class="center-container">
    <div class="jewelry-details">
      <div class="center">
        <h1 class="jewelry-title">Get Jewelry By Id</h1>
        <div class="jewelry-info">
          <p>Jewelry ID: {{ jewelry.id }}</p>
          <p>Material: {{ jewelry.material }}</p>
          <p>Color: {{ jewelry.color }}</p>
          <p>Type: {{ jewelry.type }}</p>
          <p>Weight: {{ jewelry.weight }}</p>
          <p>Size: {{ jewelry.size }}</p>
          <p>Brand: {{ jewelry.brand }}</p>
        </div>
        <div class="jewelry-button">
          <button @click="navigateTo('/jewelry')" class="back-button">Back</button>
        </div>
      </div>
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

.center-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  margin-top: -5rem;
  
}
.jewelry-details {
  background-color: #f9f9f9;
  padding: 20px;
  text-align: left;
  width: 50rem;
  border: 2px solid #2C3E50;
}

.jewelry-title {
  font-size: 32px;
}

.jewelry-info {
  margin-top: 10px;
}

.back-button {
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 100px;
}
.center{
  margin-left: 5%;
  
}
.jewelry-button {
  text-align: right; 
  margin-top: 20px;
  margin-right: 20px;
}
</style>
