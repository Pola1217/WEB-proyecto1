<script>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/footer.vue'

export default {
  components: {
    RouterLink, RouterView, Footer
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
          <RouterLink to="/Home" class="header__pages__item">Home</RouterLink>
          <RouterLink to="/shopAll" class="header__pages__item" >ShopAll</RouterLink>
          <RouterLink to="/about" class="header__pages__item" >Coffee</RouterLink>
          <RouterLink to="/accesories" class="header__pages__item" >Apparel</RouterLink>
          
      </nav>
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
    font-family: Raleway;
    src: url('/Raleway-Bold.ttf');

} 

.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
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
    
  }
  &__pages {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 10px;

    &__item {
      margin: 40px;
    }
  }

  &__logo {
    object-fit: contain;
    margin: 0 0 5px 15px;
    padding-top: 10%;
    height: 50%;
    width: 50%;
  }

  &__profile {
    margin: 15px;
    margin: 0 0 5px 15px;

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

</style>
