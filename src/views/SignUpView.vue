<template>
<div class="form">

<h1 class="title">Sign Up</h1>
<label for="name"> Name:</label>
<input class="loginInput" type="name" name="name" id="name" v-model="name">
<br>
<label for="email"> Email:</label>
<input class="loginInput" type="email" name="email" id="email" v-model="email">
<br>
<label for="password"> Password:</label>
<input class="loginInput" type="password" name="password" id="password" v-model="password">
<br>
<label for="passwordConf"> Confirm Password:</label>
<input class="loginInput" type="password" name="passwordConf" id="passwordConf" v-model="passwordConf">
<br>
<button @click="SignUp"> Sign Up</button>

<RouterLink to="/signIn" class="SignIn" >¿Already have an account? Sign In</RouterLink>


</div>
</template>

<script>

import { useAuthenticationStore } from '../stores/authentication'
import { useFirestoreStore } from "../stores/firestore.js";
import { mapStores } from "pinia";
import { auth } from "../firebase/config"

export default {

    data() {
        return {
            email: '',
            name: '',
            password: '',
            passwordConf: ''
        }
    },
    methods: {

    async SignUp(e) {

      e.preventDefault();

      const userInfo = {
        'name': this.name,
        'email': this.email,
        'password': this.password,
        'passwordConf': this.passwordConf
      };

      //auth
      if (this.password === this.passwordConf) {
        this.authenticationStore.newUserAwait(this.email, this.password);
      }else{
        alert('Passwords dont match')
      }

      //firestore
      await this.firestoreStore.addUser(this.authenticationStore.auth.currentUser.uid, userInfo);

      this.name = "";
      this.email = "";
      this.password = "";
      this.passwordConf = "";
    },

    },

    computed: {
        ...mapStores(useAuthenticationStore, useFirestoreStore),

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