<template>
  <div>
    <h1>Edit Jewelry</h1>
    <div class="content-container">
      <form class="form-left" @submit.prevent="editJewelry">
        <p>Material: <input type="text" v-model="jewelry.material"></p>
        <p>Color: <input type="text" v-model="jewelry.color"></p>
        <p>Type: <input type="text" v-model="jewelry.type"></p>
        <p>Weight: <input type="text" v-model="jewelry.weight"></p>
        <p>Size: <input type="text" v-model="jewelry.size"></p>
        <p>Brand: <input type="text" v-model="jewelry.brand"></p>
        <div class="button-container">
          <button class="edit-button" type="submit">Edit Jewelry</button>
          <button class="back-button" @click="goBack">Cancel</button>
        </div>
      </form>
      <div class="info-right">
        <hr>
        <div>
          <p>Material: {{ jewelry.material }}</p>
          <p>Color: {{ jewelry.color }}</p>
          <p>Type: {{ jewelry.type }}</p>
          <p>Weight: {{ jewelry.weight }}</p>
          <p>Size: {{ jewelry.size }}</p>
          <p>Brand: {{ jewelry.brand }}</p>
        </div>
      </div>
    </div>
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
    async editJewelry() {
      try {
        await JewelryService.put(this.jewelry);
        this.$router.push({
          name: 'jewelry'
        });
      } catch (error) {
        console.error(error);
      }
    },
    async fetchJewelry() {
      try {
        let jewelryId = this.$route.params.jewelryId;
        this.jewelry = (await JewelryService.show(jewelryId)).data;
      } catch (error) {
        console.log(error);
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.fetchJewelry();
  }
}
</script>

<style scoped>

h1 {
  font-size: 64px;
  color: #333;
  
}

.content-container {
  display: flex;
  margin-top: 3rem;
}

.form-left {
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-right {
  flex: 1;
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
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.edit-button,
.back-button {
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 49%;
  
}

.edit-button {
  background-color: #007BFF;
  color: #fff;
}

.edit-button:hover {
  background-color: #0056b3;
}

.back-button {
  background-color: #ccc;
  color: #333;
}

.back-button:hover {
  background-color: #999;
}

hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
}
</style>
