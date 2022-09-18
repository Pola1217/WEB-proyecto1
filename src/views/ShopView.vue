<template>

  <div class="shop">
    <h1 class="shop__title">shop all</h1>

  <div class="shop__item">
    <RouterLink
      v-for="product in allProducts"
      :key="product.name"
      :to="`/details/${productsStore.name}`"
    >
    <div class="shop__item__indi">
      <img src="{{product.image}}" alt="preview">
      <h4 class="shop__item__indi__name">{{ product.name }}</h4>
    </div>
    
    </RouterLink>
  </div>
</div>



</template>

<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";

export default {

  data(){
    return{
      
    };
  },

  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
      return this.productsStore.getProducts;
    }
  },
  mounted() {
    this.productsStore.loadProducts();
  },

}
</script>

<style lang="scss">

.shop{
    display: flex;
    flex-direction: column;
    margin-top: 8%;
    align-items: center;

  &__title{
        align-items: center;
        font-family: 'Aboreto';
        font-size: 2em;
        color: #000000;
        padding-bottom: 5%;
  }

  &__item{
    display: flex;
    flex-direction: row;

    &__indi{
      margin-inline: 50px;
    }
  }
}

</style>