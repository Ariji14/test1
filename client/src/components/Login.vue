<template>
    <div class="form-container">
        <h1 class="heading">User Login</h1>
        <form v-on:submit.prevent="onLogin">
            <p class="text">Username: <input type="text" v-model="email" class="input" /></p>
            <p class="text">Password: <input type="password" v-model="password" class="input" /></p>
            <p>
                <button type="submit" class="send-button">Login</button>
                <button @click="navigateTo('/register')" class="reset-button">Register</button>
            </p>
            <div class="error" v-if="error">{{error}}</div>
        </form>
    </div>
</template>

<script>
import AuthenService from '@/services/AuthenService'

export default {
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },

        async onLogin() {
            if (!this.email || !this.password) {
                this.error = "Please enter both email and password."
                return;
            }
            try {
                const response = await AuthenService.login({
                    email: this.email,
                    password: this.password
                })
                console.log(response)
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)

                this.$router.push({
                    name: 'jewelry'
                })

            } catch (error) {
                console.log(error)
                this.error = error.response.data.error
                this.email = ''
                this.password = ''
            }
        }
    }
}
</script>

<style scoped>
.form-container {
    max-width: 700px;
    margin: 30px;
    background-color: #001925;
    padding: 30px;
    border-left: 5px solid #e74c3c;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
    margin: 5rem auto;
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
    width: 95%;
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

.error {
    color: #e74c3c;
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
.text{
    color: azure;
}
</style>
