<template>
<div class="form">

<h1 class="title">Sign In</h1>

<section v-if="!userIsLogged">

<label for="email"> Email:</label>
<input class="loginInput" name="email" id="email" type="email" placeholder="email"  v-model="email"/>
<label for="password"> Password:</label>
<input class="loginInput" name="password" id="password" type="password" placeholder="password" v-model="password"/>

<button @click="SignIn"> Sign In</button>

</section>

<section v-if="userIsLogged">
    <h1>El usuario ya esta loggeado</h1>
    <button @click="logOut">cerrar sesion</button>
   </section>

<RouterLink to="/signUp" class="SignUp" >¿Don't have an account? Sign Up</RouterLink>


</div>
</template>

<script>
import {useAuthenticationStore, } from '../stores/authentication'
import { mapStores } from "pinia";
import {auth} from "../firebase/config"

    export default{
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            SignIn(e) {
                e.preventDefault()
                this.authenticationStore.signIn(this.email, this.password)
            },
            logOut(e) {
                e.preventDefault()
                this.authenticationStore.logOut()
            }
        },
        computed: {
            ...mapStores(useAuthenticationStore),
            userIsLogged(){
                return this.authenticationStore.getUser() !== null
            }
        },
        mounted(){
            console.log(auth.currentUser)
        },
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