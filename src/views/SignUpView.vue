<template>
<div class="form">

<h1 class="title">Sign Up</h1>

<label for="email"> Email:</label>
<input class="loginInput" type="email" name="email" id="email" v-model="email">
<br>
<label for="password"> Password:</label>
<input class="loginInput" type="password" name="password" id="password" v-model="password">
<br>
<label for="passwordConf"> Confirm Password:</label>
<input class="loginInput" type="password" name="passwordConf" id="passwordConf" v-model="passwordConf">
<br>
<button @click="singUp"> Sign Up</button>

<RouterLink to="/signIn" class="SignIn" >¿Already have an account? Sign In</RouterLink>


</div>
</template>

<script>

import { useAuthenticationStore } from '../stores/authentication'
import { mapStores } from "pinia";
import { auth } from "../firebase/config"

export default {

    data() {
        return {
            email: '',
            password: '',
            passwordConf: ''
        }
    },
    methods: {
        singUp(e) {
            e.preventDefault()
            if (this.password === this.passwordConf) {
                this.authenticationStore.newUserAwait(this.email, this.password)
                console.log('no te voy a esperar')
            }
            else alert('Passwords no coinciden')
        }
    },
    computed: {
        ...mapStores(useAuthenticationStore)
    },
    mounted() {
        console.log(auth.currentUser)
    }
}
</script>

<style scoped lang="scss">

.form{
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    top: 15%;
    flex-wrap: nowrap;
    align-items: center;
}

</style>