<template>
    <div>
        <div>
            <h1>Get User Bt Id</h1>
            <p>User ID: {{ user ? user.id : 'N/A' }}</p>
            <p>ชื่อ-นามสกุล: {{ user ? user.name + ' ' + user.lastname : 'N/A' }}</p>
            <p>email: {{ user ? user.email : 'N/A' }}</p>
            <p>password: {{ user ? user.password : 'N/A' }}</p>
            <p>status: {{ user ? user.status : 'N/A' }}</p>
            <p>type: {{ user ? user.type : 'N/A' }}</p>

            <p><button v-on:click="navigateTo('/users/')">กลับ</button></p>

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

</style>