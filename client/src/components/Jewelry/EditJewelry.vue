<!-- <template>
    <div>
      <h1>Edit Jewelry</h1>
      <form @submit.prevent="editJewelry">
        <p>Material: <input type="text" v-model="jewelry.material"></p>
        <p>Color: <input type="text" v-model="jewelry.color"></p>
        <p>Type: <input type="text" v-model="jewelry.type"></p>
        <p>Weight: <input type="text" v-model="jewelry.weight"></p>
        <p>Size: <input type="text" v-model="jewelry.size"></p>
        <p>Brand: <input type="text" v-model="jewelry.brand"></p>
        <button type="submit">Edit Jewelry</button>
      </form>
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
      }
    },
    created() {
      this.fetchJewelry();
    }
  }
  </script>
  
  <style scoped>
  
  </style>
   -->