
<template>
    
    <section class="form" v-if="!userIsLogged">

        <h1 class="form__title">Sign In</h1>

        <input class="form__loginInput" name="email" id="email" type="email" placeholder="email"  v-model="email"/>

        <input class="form__loginInput" name="password" id="password" type="password" placeholder="password" v-model="password"/>

        <button class="form__loginButton" @click="SignIn"> Sign In</button>

        <RouterLink to="/signUp" class="form__SignUp" >¿Don't have an account? Sign Up</RouterLink>
        
    </section>
    
   
    <section class="logged" v-if="userIsLogged">
        <h1 class="logged__title" >User Logged</h1>
        <button class="logged__button" @click="logOut">Log Out</button>
    </section>
    
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

    &__SignUp{
        font-family: 'RalewayLight';
        font-size: 0.95em;
        text-align: center;
        color: #000000;
        margin-top: 25px;
    }
}

.logged{

    position:relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 9%;
    flex-wrap: nowrap;
    align-items: center;
    
    &__title{
    font-family: 'Capuche';
    font-size: 1.30em;
    margin-top: 10%;
    margin-bottom: 3%;
    }

    &__button{
        font-family: 'RalewayLight';
        font-size: 0.95em;
        text-align: center;
        color: #000000;
        
        width: 50%;
        height: 15%;
        padding: 0.8%;
        
        border: 2px solid #000000;
        background-color: #FFFFFF;
        box-sizing: border-box;
        border-radius: 5px;

        &:hover{
              background-color: #2c77b5;
              color: #ffffff;
          }
    }
}

@media (max-width:600px) {
    .form{
    margin-top: 22%;
    }
}


    
    </style>