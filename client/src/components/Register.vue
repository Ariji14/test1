<template>
    <div class="form-container">
        <h1 class="heading">Register</h1>
        <form v-on:submit.prevent="createUser">
            <p class="w">Name: <input type="text" v-model="user.name" class="input" /></p>
            <p class="w">Lastname: <input type="text" v-model="user.lastname" class="input" /></p>
            <p class="w">Email: <input type="text" v-model="user.email" class="input" /></p>
            <p class="w">Password: <input type="text" v-model="user.password" class="input" /></p>
            <p class="w"><button type="submit" class="send-button">Register</button>
            <button @click="navigateTo('/login')" class="reset-button">Back</button></p>
        </form>
        
    </div>
</template>

<script>
import UsersService from '../services/UsersService';

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
        navigateTo(route) {
            this.$router.push(route)
        },
        async createUser() {
            try {
                await UsersService.post(this.user)
                this.$router.push({
                    name: 'login'
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
.form-container {
    margin: 5rem auto;
    max-width: 700px;
    background-color: #001925;
    padding: 30px;
    border-left: 5px solid #e74c3c;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
}

.heading {
    display: block;
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 20px;
}

.input {
    color: #87a4b6;
    width: 100%;
    background-color: #002733;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    border-left: 1px solid transparent;
}

.input:focus {
    border-left: 5px solid #e74c3c;
}

.send-button {
    flex-basis: 70%;
    background: #e74c3c;
    padding: 10px;
    color: #001925;
    text-align: center;
    font-weight: bold;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
    width: 150px;
}

.send-button:hover {
    background: transparent;
    border: 1px solid #e74c3c;
    color: #e74c3c;
}

.reset-button {
    position: relative;
    text-align: center;
    padding: 10px;
    color: #e74c3c;
    font-weight: bold;
    background: #001925;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
    transition: all 0.2s ease-in-out;
    width: 150px;
}

.reset-button:hover {
    background: #e74c3c;
    color: #001925;
}

.w{
    color: azure;
}
</style>
