<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink, RouterView
  }
}
</script>

<template>
  <header class="header">

    <RouterLink to="/add">
			<img src="./assets/logo.png" alt="" class="header__logo" >
		</RouterLink> 

    <div class="header__bar">
      <nav class="header__pages">
          <RouterLink to="/" class="header__pages__item">Home</RouterLink>
          <RouterLink to="/shopAll" class="header__pages__item" >Shop&nbsp;All</RouterLink>
      </nav>
      <RouterLink to="/">
        <img src="/menu_mobile.png"
            alt="#" class="header__bar__icon">
      </RouterLink>
    </div>

    

      <div class="header__profile">
          <RouterLink to="/" class="header__profile__item" >Profile</RouterLink>
          <RouterLink to="/" class="header__profile__item" >Cart</RouterLink>
      </div>

  </header>

  <RouterView />

</template>

<style scoped lang="scss">
 
@font-face {
    font-family: Aboreto;
    src: url('/Aboreto-Regular.ttf');
}
@font-face {
    font-family: Capuche;
    src: url('/Capuche Trial.otf');
}
@font-face {
    font-family: Raleway;
    src: url('/Raleway-Bold.ttf');
}    

@font-face {
    font-family: RalewayLight;
    src: url('/Raleway-Medium.ttf');
}  

.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  font-family: 'Raleway';
  font-size: 1em;
  position: fixed;
  z-index: 10;
  top: 0;
  background-color: ghostwhite;

  &__bar {
    display: flex;
    align-items: center;
    
    &__icon{
    display: none;
  }
}

  &__pages {
    width: 100%;
    margin-left: 5%;
    
    &__item {
      margin: 15px;
    }
  }

  

  &__logo {
    object-fit: contain;
    margin: 0 0 5px 15px;
    padding-top: 5%;
    height: 50%;
    width: 50%;
  }

  

  &__profile {
    margin: 0 0px 5px 15px;
    

    &__item {
      margin: 15px;
    }
  }

  
}

a {
  color: black;
}

footer {
  color: black;
}

@media (max-width:600px) {

  .header{
    position :fixed;

    &__bar{
      &__icon{
        display:flex;
      }
    }
    &__pages {
  
      display:none;
    
    }

    &__profile{
      
      &__item {
        display:none;
    }

    }

    &__logo {
      width: 30%;
      margin: 0 0 20px 140px;

  }

    &__logo {
    justify-content: center;
  }

  }
  .header__icon{
  
  }
  }



</style>
