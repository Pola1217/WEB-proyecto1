<template>
<div class="form">

<h1 class="title">Sign Up</h1>

<input class="form__loginInput" placeholder="Name:" type="name" name="name" id="name" v-model="name">
<br>
<input class="form__loginInput" placeholder="Email:" type="email" name="email" id="email" v-model="email">
<br>
<input class="form__loginInput" placeholder="Password:" type="password" name="password" id="password" v-model="password">
<br>
<input class="form__loginInput" placeholder=" Confirm Password:" type="password" name="passwordConf" id="passwordConf" v-model="passwordConf">
<br>
<button class="form__loginButton" @click="SignUp"> Sign Up</button>

<RouterLink to="/signIn" class="form__SignIn" >¿Already have an account? Sign In</RouterLink>


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
    position:relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 9%;
    flex-wrap: nowrap;
    align-items: center;

    &__title{
    font-family: 'Raleway';
    font-size: 2em;
    margin-bottom: 3%;
    }

    &__loginInput{
    font-family: 'RalewayLight';
    font-size: 0.95em;
    line-height: 21px;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    width: 50%;
    height: 20%;
    margin-top: 25px;
    margin-bottom: 17px;
    padding: 10px;
    border-radius: 5px;

    }

    &__loginButton{
        font-family: 'RalewayLight';
        font-size: 0.95em;
        text-align: center;
        color: #000000;
        
        width: 20%;
        height: 15%;
        padding: 0.8%;
        margin-top: 25px;
        
        border: 2px solid #000000;
        background-color: #FFFFFF;
        box-sizing: border-box;
        border-radius: 5px;

        &:hover{
              background-color: #2c77b5;
              color: #ffffff;
          }
    }

    &__SignIn{
        font-family: 'RalewayLight';
        font-size: 0.95em;
        text-align: center;
        color: #000000;
        margin-top: 25px;
    }
}

@media (max-width:600px) {
    .form{
    margin-top: 22%;
    }
}

</style>