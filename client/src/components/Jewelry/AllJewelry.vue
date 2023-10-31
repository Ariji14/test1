<template>
    <div>
      <h2>Get All Jewelry</h2>
      <p><button @click="logout">Logout</button></p>
      <button @click="navigateTo('/users')">Alluser</button>
      <button @click="navigateTo('/jewelry/create/')">เพิ่มเครื่องประดับ</button>
      <h4>จำนวนเครื่องประดับ: {{ jewelryItems.length }}</h4>
      <div v-for="jewelry in jewelryItems" :key="jewelry.id">
        <p>Jewelry ID: {{ jewelry.id }}</p>
        <p>Material: {{ jewelry.material }}</p>
        <p>Color: {{ jewelry.color }}</p>
        <p>Type: {{ jewelry.type }}</p>
        <p>Weight: {{ jewelry.weight }}</p>
        <p>Size: {{ jewelry.size }}</p>
        <p>Brand: {{ jewelry.brand }}</p>
        <p>
          <button @click="navigateTo('/jewelry/' + jewelry.id)">ดูข้อมูลเครื่องประดับ</button>
          <button @click="navigateTo('/jewelry/edit/' + jewelry.id)">แก้ไขข้อมูลเครื่องประดับ</button>
          <button @click="deleteJewelry(jewelry)">ลบข้อมูลเครื่องประดับ</button>
        </p>
      </div>
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
  
  <style scoped></style>
  