<template>
    <div class="center-container">
      <div class="user-details">
        <div class="center">
          <h1 class="user-title">Get User By Id</h1>
          <div class="user-info">
            <p>User ID: {{ user ? user.id : 'N/A' }}</p>
            <p>Name: {{ user ? user.name + ' ' + user.lastname : 'N/A' }}</p>
            <p>email: {{ user ? user.email : 'N/A' }}</p>
            <p>password: {{ user ? user.password : 'N/A' }}</p>
            <p>status: {{ user ? user.status : 'N/A' }}</p>
            <p>type: {{ user ? user.type : 'N/A' }}</p>
          </div>
          <div class="user-button">
            <button @click="navigateTo('/users/')" class="back-button">กลับ</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
import UsersService from '@/services/UsersService';

export default {
        data () {
            return {
                user: null
            }
        },
        async created () {
            try {
                let userId = this.$route.params.userId
                this.user = (await UsersService.show(userId)).data
            }catch (error) {
                console.log (error)
            }
        },
        methods: {
            navigateTo (route) {
                this.$router.push(route)
            },
        }

    }
</script>
<style scoped>
/* สไตล์สำหรับคอนเทนเนอร์หลัก */
.center-container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  margin-top: -5rem;
}

/* สไตล์สำหรับหน้า "Get User By Id" */
.user-details {
  font-family: 'Playfair Display', serif;
  background-color: #f9f9f9;
  padding: 20px;
  text-align: left;
  width: 50rem;
  border: 2px solid #2C3E50;
}

.user-title {
  font-size: 32px;
}

.user-info {
  margin-top: 10px;
}

.user-button {
  text-align: right; /* จัดให้เนื้อหาในคอนเทนเนอร์อยู่ทางด้านขวา */
}

.back-button {
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.center{
    margin-left: 3rem;
}
</style>
