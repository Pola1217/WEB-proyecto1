<template>
    <div class="product">

      <img :src=currentProduct.image alt="preview" class="product__pic">

      <div class="product__info">
        <p class="algo"> {{$route.params.productId}}</p>
        <p> {{ currentProduct.description }}</p>
        <p> {{ currentProduct.price }}</p>    
        <star-rating
        v-bind:increment="0.5"
        v-bind:max-rating="5"
        v-model:rating="rating"
        inactive-color="#000"
        active-color="#f00"
        :rounded-corners="true"
        :border-width="2"
      >{{ currentProduct.rating }}</star-rating>    
      </div>
      
    </div>
  </template>

  <script>

  import { mapStores } from "pinia";
  import { useProductsStore } from "../stores/products";
  
  export default {
    data() {
      return { currentProduct: {} };
    },

    computed: {
      ...mapStores(useProductsStore),
      
    },

    mounted() {
    this.currentProduct = this.productsStore.getProductsById(
        this.$route.params.productId
      );
    },
  };
  </script>

  <style lang="scss">

    .product{
        padding-top: 10%;
        padding-left: 10%;
        display: flex;
        align-items: center;
           
        &__pic{
          width:100%;
        height: 500px;
        object-fit: contain;
        }
    }

    .product__info{
        width: 100%;
        margin-left: 10%;
        font-family: 'RalewayLight';
        font-size: 1.50em;
        color: black;
    }

  </style>