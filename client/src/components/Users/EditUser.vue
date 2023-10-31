<template>
    <div>
      <h1>Edit User</h1>
      <div class="content-container">
        <form class="form-left" @submit.prevent="editUser">
          <p>Name: <input type="text" v-model="user.name"></p>
          <p>Lastname: <input type="text" v-model="user.lastname"></p>
          <p>Email: <input type="text" v-model="user.email"></p>
          <p>Password: <input type="text" v-model="user.password"></p>
          <button type="submit" class="edit-button">Edit User</button>
        </form>
        <div class="info-right">
          <hr>
          <div>
            <p>Name: {{ user.name }}</p>
            <p>Lastname: {{ user.lastname }}</p>
            <p>Email: {{ user.email }}</p>
            <p>Password: {{ user.password }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import UsersService from '../../services/UsersService';
  
  export default {
    data() {
      return {
        user: {
          name: '',
          lastname: '',
          email: '',
          password: '',
          status: 'active',
        }
      }
    },
    methods: {
      async editUser() {
        try {
          await UsersService.put(this.user);
          this.$router.push({
            name: 'users'
          });
        } catch (error) {
          console.log(error);
        }
      },
    },
    async created() {
      try {
        let userId = this.$route.params.userId;
        this.user = (await UsersService.show(userId)).data;
      } catch (error) {
        console.log(error);
      }
    }
  }
  </script>
  
  <style scoped>
  
  h1 {
    font-size: 24px;
    color: #333;
  }
  
  .content-container {
    display: flex;
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
  
  .input-container {
    display: flex;
    flex-direction: column;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .edit-button {
    background-color: #007BFF;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  
  .edit-button:hover {
    background-color: #0056b3;
  }
  
  hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 20px 0;
  }
  </style>
  