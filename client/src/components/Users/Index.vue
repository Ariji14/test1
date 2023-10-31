<template>
  <div class="user-page">
    <header class="user-header">
      <h1 class="user-title">Get All Users</h1>
      <div class="user-button-container">
        <button @click="navigateTo('/jewelry')">Jewelry</button>
        <button @click="logout">Logout</button>
      </div>
    </header>

    <div>
      <h2>Total Users : {{ users.length }}</h2>
    </div>

    <div v-for="user in users" :key="user.id" class="user-item">
      
      <div class="user-details">
        
        <div>Name :{{ user.name }}</div>
        <div>Lastname :{{ user.lastname }}</div>
        <div>Email :{{ user.email }}</div>
        <div class="jewelry-divider"></div>
      </div>

      <div class="user-actions">
        <button @click="navigateTo('/user/' + user.id)" class="user-view-button">View info</button>
        <button @click="navigateTo('/user/edit/' + user.id)" class="user-edit-button">Edit User</button>
        <button @click="deleteUser(user)" class="user-delete-button">Delete User</button>
        
      </div>
      
    </div>
    
  </div>
</template>

<script>
import UsersService from '@/services/UsersService';

export default {
  data() {
    return {
      users: []
    };
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
    async deleteUser(user) {
      let result = confirm("ต้องการลบผู้ใช้หรือไม่?");
      if (result) {
        try {
          await UsersService.delete(user);
          this.refreshData();
        } catch (error) {
          console.log(error);
        }
      }
    },
    async refreshData() {
      try {
        this.users = (await UsersService.index()).data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  async created() {
    try {
      this.users = (await UsersService.index()).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
/* สไตล์สำหรับหน้า "Get All Users" */
.user-page {
  font-family: 'Playfair Display', serif;
  background-color: #f9f9f9;
  padding: 20px;
  text-align: center;
}

.user-header {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-button-container {
  display: flex;
  align-items: center;
  margin-right: 3%;
}

.user-button-container button {
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  font-weight: bold;
}

.user-title {
  font-size: 32px;
  margin: 0;
  margin-left: 2%;
}


.user-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
}

.user-details {
  flex: 1;
  text-align: left;
  margin-left: 3%;
}

.user-actions {

  
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-right: 3%;
}

.user-view-button {
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

}

.user-edit-button {
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.user-delete-button {
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.user-divider {
  flex: 1;
  border: 1px solid #ccc;
  margin: 10px;
}
.jewelry-divider {
  flex: 1;
  border: 1px solid #ccc;
  margin: 10px;
  margin-top: 1rem;
}
</style>
