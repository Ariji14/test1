<template>
  <div class="luxury-page">
    <header>
      <h1 class="title">Jewelry Showcase</h1>
      <div class="button-container">
        <button @click="navigateTo('/users')">All Users</button>
        <button @click="navigateTo('/jewelry/create')">Add Jewelry</button>
        <button @click="logout">Logout</button>
      </div>
    </header>

    <main>
      <section class="jewelry-list">
        <h2 class="section-title">All Jewelry</h2>
        <p class="item-count">Total Jewelry: {{ jewelryItems.length }}</p>

        <div v-for="jewelry in jewelryItems" :key="jewelry.id" class="jewelry-item">

          <div class="jewelry-details">
            <h3 class="jewelry-name">{{ jewelry.name }}</h3>
            <p><strong>Material:</strong> {{ jewelry.material }}</p>
            <p><strong>Color:</strong> {{ jewelry.color }}</p>
            <p><strong>Type:</strong> {{ jewelry.type }}</p>
            <p><strong>Weight:</strong> {{ jewelry.weight }}</p>
            <p><strong>Name:</strong> {{ jewelry.size }}</p>
            <p><strong>Brand:</strong> {{ jewelry.brand }}</p>
            <div class="jewelry-divider"></div>
          </div>
          <div class="jewelry-actions">
            <button @click="navigateTo('/jewelry/' + jewelry.id)" class="view-button"> View Details </button>
            <button @click="navigateTo('/jewelry/edit/' + jewelry.id)" class="edit-button"> Edit Jewelry </button>
            <button class="delete-button" @click="deleteJewelry(jewelry)">Delete Jewelry</button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import JewelryService from '@/services/JewelryService';

export default {
  data() {
    return {
      jewelryItems: []
    }
  },
  async created() {
    this.jewelryItems = (await JewelryService.index()).data;
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'login'
      });
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteJewelry(jewelry) {
      let result = confirm("Do you want to delete?");
      if (result) {
        try {
          await JewelryService.delete(jewelry);
          this.refreshData();
        } catch (error) {
          console.log(error);
        }
      }
    },
    async refreshData() {
      this.jewelryItems = (await JewelryService.index()).data;
    }
  }
}
</script>
<style scoped>
.luxury-page {
  font-family: 'Playfair Display', serif;
  background-color: #f9f9f9;
  padding: 20px;
  text-align: center;
}

header {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-container {
  display: flex;
  align-items: center;
  margin-right: 3%;
}

.button-container button {
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px; 
  cursor: pointer;
  font-weight: bold;
  
}
.title {
  font-size: 32px;
  margin: 0;
  margin-left: 2%;
}



section.jewelry-list {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
}

.section-title {
  font-size: 24px;
  margin: 0;
}

.item-count {
  font-size: 18px;
  color: #555;
  margin-top: 10px;
}

.jewelry-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.jewelry-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
}

.jewelry-details {
  flex: 1;
  text-align: left;
  margin-left: 5%;
}

.jewelry-name {
  font-size: 20px;
  margin: 0;
}

.jewelry-actions {
  display: flex;
  width: 50px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-right: 5%;
  margin-top: -3rem;
}

.view-button{
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 88px;
}

.edit-button{
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.delete-button {
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.jewelry-divider {
  flex: 1;
  border: 1px solid #ccc;
  margin: 10px;
  margin-top: 3rem;
}
</style>
